import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: "",
    userStatus: "",// 0普通用户,1vip,2高级vip
    vipLevel: ""
  },
  mutations: {
    login(state, v) {
      state.userInfo = v
    },
    setMemberInfo(state, v) {
      state.userStatus = v.userStatus
      state.vipLevel = v.vipLevel
    } 
  },
  actions: {
    // 购买会员
    buyVip({commit}, e) {
      //new Promise((resolve,reject) => {})
      return new Promise((resolve) => {
        // mock api 交互
        setTimeout(() => {
          //修改本地state
          commit('setMemberInfo',{
            userStatus: e.userStatus,
            vipLevel: e.vipLevel
          })
          resolve("购买成功")
        },1000);
      })
    },
    // 分享获取免费会员,对比一下buyVip方法,参数的不同可写成getFreeVip({commit,state})
    getFreeVip(context) {
      // mock api交互
      return new Promise((resolve) => {
        setTimeout(() => {
          if(context.state.userStatus === 0){//如果getFreeVip({commit,state}),则直接if(state.userStatus)
            context.commit('setMemberInfo',{
              userStatus: 1,
              vipLevel: 0
            })
            resolve("分享成功,恭喜你获得了30天免费会员")
          } else {
            resolve("分享成功")
          }
        },1000)
      })
    }
  },
  modules: {
    
  },
  getters:{
    memberInfo(state) {
      switch(state.userStatus) {
        case 0:
          return '普通会员';
          //break;
        case 1:
          return 'vip会员';
          //break;
        case 2:
          return `高级V${state.vipLevel}会员`;
          //return '高级V'+state.vipLevel+'会员'
          //break;
        default:
          return '普通会员';
          //break;
      }
    }
  }
})
