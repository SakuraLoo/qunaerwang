<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'fadeAnimate'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leaev-to 
    opacity: 0
  .v-enter-active, .v-leave-active 
    transition: opacity .5s
</style>