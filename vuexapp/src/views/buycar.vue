<template>
    <div>
        <h1>buycar</h1>
        <h2>{{$store.state.buyCar.productNum}}</h2>
        <h2>{{buyCar.productNum}}</h2>
        <h2>{{buyCar/brief}}</h2>
        <!-- <h2>-----{{brief}}</h2> -->
        <h2>{{$store.getters['buyCar/brief']}}</h2>
        <button @click="$store.commit('buyCar/addProNum') ">添加数量</button>
        <button @click="$store.dispatch('buyCar/changeProNum')">添加数量</button>
    </div>
</template>
<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

let mapStateObj = mapState(['buyCar'])
//let mapGettersObj = mapGetters(['buyCar/brief'])
let mapGettersObj = mapGetters({brief:'buyCar/brief'})
let mapMutationsObj = mapMutations({addProNum:'buyCar/addProNum'})
let mapActionsObj = mapActions({changeProNum:'buyCar/changeProNum'})
export default {
    mounted(){
        console.log(this)
    },
    computed: {
        ...mapStateObj,
        ...mapGettersObj,
    },
    methods: {
        ...mapActionsObj,
        ...mapMutationsObj
    },
}
</script>