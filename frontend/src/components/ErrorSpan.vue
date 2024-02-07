<template>
  <span v-show="message"> 
    {{message}}
  </span>
</template>

<script>
export default {
  props: {
    message: String,
  }
}
</script>

<style lang="scss" scoped>
  span {
    color: rgb(187, 0, 0);
    font-weight: 600;
  }
</style>