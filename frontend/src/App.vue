<script>
import axios from 'axios';
import FirstStep from './components/matricula/FirstStep.vue';
import SecondStep from './components/matricula/SecondStep.vue';
import ThirdStep from './components/matricula/ThirdStep.vue';

export default {
  data() {
    return {
      stepActive: 1,
      createAcademico: {
        nome: '',
        email: '',
        telefone: '',
        cursoId: '',
      }
    }
  },
  components: {
    FirstStep,
    SecondStep,
    ThirdStep
  },
  methods: {
    setCurrentStep(stepNumber) {
      this.stepActive = stepNumber;
    },
    fillAcademico(academico, create = false) {
      Object.assign(this.createAcademico, academico);

      if(create) {
        this.apiPostAcademico();
      }
    },
    async apiPostAcademico() {
      await axios.post('http://localhost:3000/academico', this.createAcademico)
        .then(response => {
          this.cursos = response.data;
          this.filteredCursos = response.data;
        })
        .catch(error => {
          this.error = error.message;
        });
    },
  }
}
</script>

<template>
  <div>
    <img src="/matriculas.png" class="logo" alt="Matríclas logo" />
    <FirstStep v-if="stepActive === 1" @setCurrentStep="setCurrentStep" @fillAcademico="fillAcademico"/>
    <SecondStep v-if="stepActive === 2" @setCurrentStep="setCurrentStep" @fillAcademico="fillAcademico"/>
    <ThirdStep v-if="stepActive === 3" @setCurrentStep="setCurrentStep"/>
  </div>
</template>

<style scoped>
.logo {
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  width: 120px;
}
</style>
