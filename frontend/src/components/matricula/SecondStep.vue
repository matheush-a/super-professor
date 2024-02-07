<template>
  <div class="form first-step">
    <TextInput
      :placeholder="'Nome'"
      :label="'Nome'"
      :id="'nome'"
      v-model="nome"
    ></TextInput>
    <TextInput
      :placeholder="'E-mail'"
      :label="'E-mail'"
      :id="'email'"
      v-model="email"
    ></TextInput>
    <TextInput
      :placeholder="'(31) 99999-9999'"
      :label="'Telefone'"
      :id="'telefone'"
      :mask="'(##) #####-####'"
      v-model="telefone"
    ></TextInput>
    <CtaButton
      :text="'Prosseguir'"
      :nextStep="3"
      @setCurrentStep="setCurrentStep"
    />
  </div>
</template>

<script>
import TextInput from '../TextInput.vue';
import CtaButton from '../CtaButton.vue';

export default {
  name: 'SecondStep',
  props: {
    errors: [],
  },
  data() {
    return {
      nome: '',
      email: '',
      telefone: '',
    }
  },
  components: {
    TextInput,
    CtaButton
  },
  methods: {
    setCurrentStep(stepNumber) {
      this.preencherAcademico();
    },
    preencherAcademico() {
      this.$emit('fillAcademico', {
        nome: this.nome,
        email: this.email,
        telefone: this.telefone.replace(/[^0-9]+/g,''),
      }, true);
    }
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
