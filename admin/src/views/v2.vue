<template>
3
</template>

<script>
export default {
  name: "v2",
  mounted(){
  console.log(`旧值：${this.$store.state.number}`);
  this.$store.commit('setNumberIsWhat', 666);
  console.log(`新值：${this.$store.state.number}`);
}
}
</script>

<style scoped>

</style>