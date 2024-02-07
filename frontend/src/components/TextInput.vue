<template>
  <div class="input-wrapper">
    <label :for="id">{{label}}</label>
    <input
      type="text"
      v-maska
      :data-maska="mask ? mask : ''"
      :placeholder="placeholder"
      v-model="inputValue"
    >
    <span :class="id" class="input-error">
    </span>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  data() {
    return {
      inputValue: '',
    };
  },
  props: {
    label: String,
    placeholder: String,
    id: String,
    mask: String,
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