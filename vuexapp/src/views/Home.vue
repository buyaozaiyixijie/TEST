<template>
  <div class="home">
    <h1>点击数量：{{count}}</h1>
    <button @click="addEvent">添加点击数</button>

    <!-- vuex的方式 -->
    <h1>vuex的方式</h1>
    <h1>点击数量：{{$store.state.num}}</h1>
    <button @click="emitAction">添加点击数</button>

    
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

  data() {
    return {
      count:0
    }
  },

  methods: {
    addEvent:function(){
      this.count++;
    },
    emitAction:function(){
      //采用vuex可以在共享数据时，不混乱
      //可以随时看到是哪个action在修改数据
      this.$store.commit('addNum')
    }
  },

  mounted() {
    console.log(this)
  },
}
</script>
