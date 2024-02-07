<template>
  <div class="form first-step">
    <TextInput
      :placeholder="'CEP'"
      :label="'CEP'"
      :id="'cep'"
      :mask="'#####-###'"
      v-model="cep"
    ></TextInput>
    <TextInput
      :placeholder="'CPF'"
      :label="'CPF'"
      :id="'cpf'"
      :mask="'###.###.###-##'"
      v-model="cpf"
    ></TextInput>
    <DateInput
      :label="'Data de Nascimento'"
      :id="'dt_nascimento'"
      v-model="dt_nascimento"
    ></DateInput>
    <SelectTipoCurso
      v-if="tiposDocumentos"
      :options="tiposDocumentos"
      :label="'Tipo de Documento'"
      @selectOption="selectOption"
    ></SelectTipoCurso>
    <FilesInput
      :label="'Enviar Documento'"
      :id="'documento'"
      v-model="documento"
    ></FilesInput>
    <CtaButton
      :text="'Concluir Cadastro'"
      :nextStep="1"
      @setCurrentStep="setCurrentStep"
    />
  </div>
</template>

<script>
import axios from 'axios';
import TextInput from '../TextInput.vue';
import DateInput from '../DateInput.vue';
import FilesInput from '../FilesInput.vue';
import CtaButton from '../CtaButton.vue';
import SelectTipoCurso from '../SelectTipoCurso.vue';

export default {
  name: 'ThirdStep',
  data() {
    return {
      cep: '',
      cpf: '',
      dt_nascimento: '',
      documento: '',
      tiposDocumentos: [],
    }
  },
  components: {
    TextInput,
    CtaButton,
    DateInput,
    FilesInput,
    SelectTipoCurso,
  },
  async created() {
    await axios.get('http://localhost:3000/tipo-documento')
      .then(response => {
        this.tiposDocumentos = response.data;
      })
      .catch(error => {
        this.error = error.message;
      });
  },
  methods: {
    setCurrentStep(stepNumber) {
      this.preencherAcademico();
    },
    preencherAcademico() {
      this.$emit('fillAcademico', {
        cep: this.cep.replace(/[^0-9]+/g,''),
        cpf: this.cpf.replace(/[^0-9]+/g,''),
        dt_nascimento: this.dt_nascimento,
        documento: this.documento,
        tipoDocumento: this.tipoDocumento,
      });
    },
    selectOption(tipoDocumento) {
      this.tipoDocumento = tipoDocumento;
    },
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
