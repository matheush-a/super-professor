<template>
  <div class="form first-step">
    <div class="filtros">
      <i class="fa fa-filter" @click="abrirModalDeFiltros(true)"><span>Filtrar</span></i>
    </div>
    <FiltersGroup
      v-show="filtrando"
      @abrirModalDeFiltros="abrirModalDeFiltros"
      @filtrar="filtrar"
    />
    <SelectBox
      v-if="cursos"
      :options="filteredCursos"
      :label="'Curso'"
      @filtrar="filtrar"
      @selectOption="selectOption"
    ></SelectBox>
    <CtaButton
      :text="'Prosseguir'"
      :nextStep="2"
      @setCurrentStep="setCurrentStep"
    />
    <ErrorSpan :message="message"/>
  </div>

</template>

<script>
import axios from 'axios';
import TextInput from '../TextInput.vue';
import SelectBox from '../SelectBox.vue';
import CtaButton from '../CtaButton.vue';
import FiltersGroup from '../FiltersGroup.vue';
import ErrorSpan from '../ErrorSpan.vue';

export default {
  name: 'FirstStep',
  components: {
    TextInput,
    SelectBox,
    CtaButton,
    FiltersGroup,
    ErrorSpan
  },
  data() {
    return {
      cursos: '',
      filteredCursos: '',
      filtrando: false,
      cursoId: '',
      message: '',
    }
  },
  async created() {
    await axios.get('http://localhost:3000/curso')
      .then(response => {
        this.cursos = response.data;
        this.filteredCursos = response.data;
      })
      .catch(error => {
        this.error = error.message;
      });
  },
  methods: {
    filtrar(filtros) {
      const filtrarPor = [];

      if(filtros.presencial) {
        filtrarPor.push('Presencial');
      }
      if(filtros.ead) {
        filtrarPor.push('EAD');
      }
      if(filtros.graduacao) {
        filtrarPor.push('Graduação');
      }
      if(filtros.pos) {
        filtrarPor.push('Pós-graduação');
      }

      this.filteredCursos = this.cursos.filter((curso) => {
        return filtrarPor.includes(curso.modalidade.descricao) && filtrarPor.includes(curso.tipo_curso.descricao)
      });
    },
    setCurrentStep(stepNumber) {
      if(!this.cursoId) {
        this.message = 'Primeiro selecione um curso!';
        return;
      }

      this.$emit('setCurrentStep', stepNumber);
      this.preencherAcademico();
    },
    abrirModalDeFiltros(flag) {
      this.filtrando = flag;
    },
    selectOption(curso) {
      this.cursoId = curso;
      this.message = '';
    },
    preencherAcademico() {
      this.$emit('fillAcademico', {
        cursoId: this.cursoId.toString()
      });
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

.filtros {  
  i {
    user-select: none;
    cursor: pointer;
    span {
      margin-left: .25rem;
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
  }
}
</style>
