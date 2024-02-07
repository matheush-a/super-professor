<script>
import axios from 'axios';
import FirstStep from './components/matricula/FirstStep.vue';
import SecondStep from './components/matricula/SecondStep.vue';
import ThirdStep from './components/matricula/ThirdStep.vue';
import SnackBar from './components/SnackBar.vue';

export default {
  data() {
    return {
      errors: [],
      stepActive: 1,
      createAcademico: {
        nome: '',
        email: '',
        telefone: '',
        cursoId: '',
      },
      updateAcademico: {
        documento: '',
        tipoDocumento: '',
        cep: '',
        cpf: '',
        dt_nascimento: '',
      },
      academico: {}
    }
  },
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    SnackBar,
  },
  methods: {
    setCurrentStep(stepNumber) {
      this.stepActive = stepNumber;
    },
    fillCreateAcademico(academico, create = false) {
      Object.assign(this.createAcademico, academico);

      if(create) {
        this.apiPostAcademico();
      }
    },
    fillUpdateAcademico(academico) {
      Object.assign(this.updateAcademico, academico);

      this.apiUpdateAcademico();
    },
    async apiPostAcademico() {
      this.errors = [];

      await axios.post('http://localhost:3000/academico', this.createAcademico)
        .then(response => {
          this.academico = response.data
          this.stepActive++;
        })
        .catch(error => {
          if (error.response) {
            error.response.data.message.forEach((item) => {
              this.errors.push(item);
            })
          } else {
            this.errors = ["Ocorreu um erro inesperado."]
          }
        });
    },
    async apiUpdateAcademico() {
      let formData = new FormData();
      formData.append('documento', this.updateAcademico.documento);
      formData.append('tipoDocumento', this.updateAcademico.tipoDocumento);
      formData.append('cep', this.updateAcademico.cep);
      formData.append('cpf', this.updateAcademico.cpf);
      formData.append('dt_nascimento', this.updateAcademico.dt_nascimento);

      this.errors = [];
      await axios.patch(`http://localhost:3000/academico/${this.academico.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        this.stepActive = 1;
      })
      .catch(error => {
        if (error.response) {
          error.response.data.message.forEach(async (item) => {
            this.errors.push(item);
          })
        } else {
          this.errors = ["Ocorreu um erro inesperado."]
        }
      });
    },
  }
}
</script>

<template>
  <div>
    <SnackBar v-if="errors.length" :messages="errors"/>
    <img src="/matriculas.png" class="logo" alt="Matríclas logo" />
    <FirstStep v-if="stepActive === 1" @setCurrentStep="setCurrentStep" @fillAcademico="fillCreateAcademico"/>
    <SecondStep v-if="stepActive === 2" @setCurrentStep="setCurrentStep" @fillAcademico="fillCreateAcademico"/>
    <ThirdStep v-if="stepActive === 3" @setCurrentStep="setCurrentStep" @fillAcademico="fillUpdateAcademico"/>
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
