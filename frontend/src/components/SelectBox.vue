<template>
  <div>
    <div class="input-wrapper">
      <label :for="id">{{ label }}</label>
      <select
        v-model="selectedOption"
        :placeholder="placeholder"
        :id="id"
        @change="selectOption"
      >
        <option v-for="(option, index) in options" :key="index" :value="option">
          {{ option.nome }}
        </option>
      </select>
      <div class="description" v-if="selectedOption">
        <div class="row">
          <span>Valor: {{ selectedOption.valor.toLocaleString("pt-BR", {style:"currency", currency:"BRL"}) }}</span>
        </div>
        <div class="row">
          <span>Valor parcelado: {{ selectedOption.parcelas + 'x ' + (selectedOption.valor / selectedOption.parcelas).toLocaleString("pt-BR", {style:"currency", currency:"BRL"}) }}</span>
        </div>
        <div class="row">
          <span>Modalidade: {{ selectedOption.modalidade.descricao }}</span>
        </div>
        <div class="row">
          <span>Tipo: {{ selectedOption.tipo_curso.descricao }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FiltersGroup from './FiltersGroup.vue';

export default {
  name: 'TextInput',
  components: {
    FiltersGroup,
  },
  props: {
    label: String,
    placeholder: String,
    id: String,
    options: Object,
  },
  data() {
    return {
      selectedOption: '',
    };
  },
  methods: {
    filtrar(filtros) {
      this.$emit('filtrar', filtros);
    },
    selectOption() {
      this.$emit('selectOption', this.selectedOption.id);
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  color: #fff;

  label {
    text-align: left;
    font-size: 16px;
  }
  
  select {
    font-size: 16px;
    padding: .25rem;
  }

  .description {
    margin-top: 1rem;
  }
}
</style>