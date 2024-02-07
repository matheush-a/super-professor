<template>
  <div class="input-wrapper">
    <label :for="id">{{label}}</label>
    <input
      type="date"
      v-model="inputValue"
    >
  </div>
</template>

<script>
export default {
  name: 'DateInput',
  data() {
    return {
      inputValue: '',
    };
  },
  props: {
    label: String,
    id: String,
  },
  watch: {
    inputValue(value) {
      this.$emit('update:modelValue', value);
    },
  },
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;

  label {
    text-align: left;
    font-size: 16px;
  }
  
  input {
    font-size: 16px;
    padding: .25rem;
  }
}
</style>