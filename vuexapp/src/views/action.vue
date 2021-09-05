<template>
    <div>
        <h1>action</h1> 
        <h1>{{num}}</h1>
        <button @click="addNum">添加NUM</button>
        <button @click="getDuanzi">点击获取段子</button> 
        <button @click="setDz">点击获取段子2</button>
        <ul>
            <li v-for="(item,index) in duanzi" :key="index">{{index+1}}：{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
let mapGettersObj = mapGetters(['reverseMsg'])
let mapStateObj = mapState(['duanzi','num']);
let mapActionsObj = mapActions(['setDz']);
let mapMutationsObj = mapMutations(['addNum','setNum'])
export default {
    computed: {
       ...mapStateObj,
       ...mapGettersObj
    },
   methods: {
       getDuanzi:function(){
           this.$store.dispatch('setDz')
           console.log(this)
       },
       ...mapActionsObj,
       ...mapMutationsObj
   }, 
}
</script>