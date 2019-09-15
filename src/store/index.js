import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const getExios = async () =>"axios" in window || (await import(/* webpackChunkName: "http" */ "./http").then(
  m => (window.axios = m.default)
));
getExios()

import createPersistedState from 'vuex-persistedstate'
export default new Vuex.Store({
  //plugins: [createPersistedState()],
  state: {
    ITEMS: [],
    SEARCH_BY: '', 
    loading: false,
    snackMsg: false,
   // BACKEND_URL: 'http://localhost:3000/mvc/',
    BACKEND_URL: 'https://todo.kostia7alania.ru/mvc/',
    SHOW_LOGIN_DIALOG: false,
    IS_LOGGED_IN: false,
    IS_ADMIN: false,
  },
  getters: { 
    COUNT_FILTERED_ITEMS(state, getters) {
      return getters.FILTERED_ITEMS.length
    },
    FILTERED_ITEMS(state) {
      let items = state.ITEMS
      const SEARCH_BY = state.SEARCH_BY
      if(SEARCH_BY) {
        items = items.filter( item => item[SEARCH_BY].match(new RegExp(SEARCH_BY, 'gim')) )
      }
      if(!items.length) return []
    
      const compare = (a, b, key = 'name') => {
        if(typeof a[key] == 'string') {
            if (a[key]&&a[key].toUpperCase() < b[key]&&b[key].toUpperCase()) return -1;
            if (a[key]&&a[key].toUpperCase() > b[key]&&b[key].toUpperCase()) return 1;
        } else {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
        }
        return 0;
      }

      return items.sort(compare);
    },
    SNACK_MSG(state) {
      return state.snackMsg
    }
  },
  mutations: {
    SET_LOADING_ON(state) { state.loading = true },
    SET_LOADING_OFF(state) { state.loading = false },
    SET_SHOW_LOGIN_DIALOG(state, val) {state.SHOW_LOGIN_DIALOG = val},
    SET_IS_LOGGED_IN(state,LOGGED_IN) {state.IS_LOGGED_IN = LOGGED_IN},
    SET_IS_ADMIN(state,IS_ADMIN) {state.IS_ADMIN = IS_ADMIN},
    SET_SEARCH_BY(state, req) {
      state.SEARCH_BY = req
    }, 
    SET_SNACK_MSG(state, msg) {
      state.snackMsg = msg
      return msg
    },
    SET_ITEMS(state, ITEMS) {
      this._vm.$set(state, 'ITEMS', ITEMS)
    }
  },
  actions: {
    // создать:  POST http://localhost:3000/mvc/tasks/create =Name Email Description
    // изменить: POST http://localhost:3000/mvc/tasks/update/10 -- POST 
    // выйти:    GET  http://localhost:3000/mvc/logout
    // список задач:  http://localhost:3000/mvc/tasks
    async CREATE_ITEM({state, commit, dispatch}, item) {
      const fd = new FormData();
      Object.keys(item).forEach(key=>fd.append(key, item[key]))
      commit('SET_LOADING_ON')
      return axios
      .post(state.BACKEND_URL+'tasks/create', fd)
      .then(res=>dispatch('GET_ITEMS'))
      .catch(err=>commit('SET_SNACK_MSG', err.message))
      .finally(()=>commit('SET_LOADING_OFF'))
    }, 
    async UPDATE_ITEM({state, commit}, item) {
      const fd = new FormData();
      Object.keys(item).forEach(key=>fd.append(key, item[key]))
      commit('SET_LOADING_ON')
      return axios
      .post(state.BACKEND_URL+'tasks/update/'+item.id, fd)
      .then(res=>dispatch('GET_ITEMS'))
      .catch(err=>commit('SET_SNACK_MSG', err.message))
      .finally(()=>commit('SET_LOADING_OFF'))
    },
    
    async DELETE_ITEM({state, commit}, id) {
      const fd = new FormData();
      fd.append('id', id)
      commit('SET_LOADING_ON')
      return axios
      .post(state.BACKEND_URL+'tasks/delete/'+id, fd)
      .then(res=>{
        commit('SET_SNACK_MSG', 'Contact has been deleted')
        dispatch('GET_ITEMS')
      })
      .catch(err=>commit('SET_SNACK_MSG', err.message))
      .finally(()=>commit('SET_LOADING_OFF'))
    },
 

    GET_ITEMS({state, commit}) {
      commit('SET_LOADING_ON')
      return axios
      .post(state.BACKEND_URL+'tasks')
      .then(res=>{
        commit('SET_ITEMS', res.data)
        commit('SET_SNACK_MSG', 'Updated')
      })
      .catch(err=>commit('SET_SNACK_MSG', err.message))
      .finally(()=>commit('SET_LOADING_OFF'))
    },

  DO_LOGIN({state,commit}, form) {
      const fd = new FormData(); 
      fd.append('username', form.username)
      fd.append('password', form.password)
      return axios
        .post(state.BACKEND_URL+'login', fd)
        .then(res=>{
          commit('SET_SNACK_MSG', 'Logged in!')
          commit('SET_IS_LOGGED_IN', true)
          commit('SET_IS_ADMIN', res.data.is_admin)
          return true
        })
        .catch(err=>commit('SET_SNACK_MSG', err.message))
  }
  },
})
