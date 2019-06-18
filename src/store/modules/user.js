// import request from "@/utils/request";
import api from "@/api/"
export default {
    namespaced:true,
    state:{ //用户信息
        userinfo:{}
    },
    mutations:{
        setuserinfo(state,data){
            state.userinfo = data;
        }
    },
    actions:{
        getUserInfo(context){
            //成功要改变userinfo
            console.log(context)
            api.islogin().then(res=>{
                context.commit('setuserinfo',res.data)
            })
        }
    }
}