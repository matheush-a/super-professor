<template>
  <div v-if="messages">
    <span v-for="(message, index) in messages" :key="index">- {{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'SnackBar',
  props: {
    messages: Array,
  },
}
</script>

<style lang="scss" scoped>
div {
  background-color: #bb0000;
  position: fixed;
  z-index: 999999;
  border-radius: 12px;
  padding: .25rem 1rem;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  margin: 1rem 1rem 0 0;
  font-size: 14px;
}
</style>