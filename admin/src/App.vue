
<template>
<router-view></router-view>
  {{as}}
  {{getName}}
  {{name}}
</template>
<script>
import { mapState } from 'vuex'; // 从vuex中导入mapState
export default {
  data(){
    return{
      as:''
    }
  },
  mounted() {
    console.log(this.$store.state.name);
    this.as=this.$store.state.name;
    console.log(`旧值：${this.$store.state.number}`);
    this.$store.commit('setNumber');
    console.log(`新值：${this.$store.state.number}`);
  },
  computed:{
    ...mapState(['name']), // 经过解构后，自动就添加到了计算属性中，此时就可以直接像访问计算属性一样访问它
    getName() {
      return this.$store.state.name;//封装到计算属性中
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
