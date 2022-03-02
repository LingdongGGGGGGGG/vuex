<template>
2{{getMessage}}
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "v1",
  mounted(){

  },
  computed:{
    ...mapGetters(['getMessage'])
  }
}
</script>

<style scoped>

</style>