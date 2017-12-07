import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const state = {
  photo : []
}

const mutations = {
  // setNewPhoto (state,payload) {
  //   state.photo.push(payload);
  // },
  setAllJepret (state, payload) {
    state.photo = payload
  },
  setPushJepret (state, payload) {
    state.photo.push(payload)
  }
}

const actions = {
  // postPhoto ({commit}, newImg) {
  //   http.post('/jeprets/', newImg)
  //   .then(({data})=> {
  //     console.log('ISI DATANYA', data)
  //     // commit('setNewPhoto', data)
  //   })
  //   .catch(err => console.error(err))
  // },

  getJepret ({commit}) {
    http.get('/jeprets')
    .then(({data}) => {
      commit('setAllJepret', data)
    })
    .catch(err => {
      res.send(err)
    })
  },

  postJepret ({commit}, payload) {
    http.post('/jeprets')
    .then(({data}) => {
      commit('setPushJepret', data)
    })
  }
}


export default new Vuex.Store ({
  state,
  mutations,
  actions
})
