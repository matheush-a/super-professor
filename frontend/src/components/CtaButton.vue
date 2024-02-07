<template>
  <div
    @click="setCurrentStep"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'CtaButton',
  props: {
    text: String,
    nextStep: Number,
  },
  methods: {
    setCurrentStep() {
      this.$emit('setCurrentStep', this.nextStep);
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00be4b;
  width: 100%;
  height: 55px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 12px;
  user-select: none;
  transition: all 1s;
  cursor: pointer;

  &:hover {
    background: #03682b;
  }
}
</style>