<template>
  <div class="input-wrapper">
    <label :for="id">{{label}}</label>
    <input
      type="file"
      @change="onFileChange"
      ref="files"
    >
  </div>
</template>

<script>
export default {
  name: 'FilesInput',
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.inputValue = this.$refs.files.files[0];
      this.$emit('update:modelValue', this.inputValue);
    },
  },
  props: {
    label: String,
    id: String,
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
    font-size: 14px;
    padding: .25rem;
  }
}
</style>