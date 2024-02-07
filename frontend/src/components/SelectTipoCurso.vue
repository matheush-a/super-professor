<template>
  <div class="input-wrapper">
    <label :for="id">{{label}}</label>
      <select
        v-model="selectedOption"
        :placeholder="placeholder"
        :id="id"
        @change="selectOption"
      >
        <option v-for="(option, index) in options" :key="index" :value="option">
          {{ option.descricao }}
        </option>
      </select>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
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