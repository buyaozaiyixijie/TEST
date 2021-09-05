export default {
    namespaced:true,
    state:{
        productNum:10,
    },
    getters:{
        brief:function(state){
            //console.log(state)
            return state.productNum+"件衣服"
        }
    },
    mutations:{
        addProNum(state){
            console.log(state)
            state.productNum ++;
        }
    },
    actions:{
        changeProNum(content){
            console.log(content)
            setTimeout(() => {
                content.commit('addProNum')
            },1000);
        }
        
    }
}