<template>
  <div class="home">
    <router-link to="/list">跳转至list</router-link>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',

    components: {
      HelloWorld
    },

    beforeRouteLeave (to, from, next) {
      console.log("从"+from.path+"离开")
      next()
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
    },

    mounted() {
      console.log(this.$route)
    },
}
</script>
