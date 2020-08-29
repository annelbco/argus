import Vue from 'vue'
import Vuex from 'vuex'

import { mType } from './mutationtypes'

Vue.use(Vuex)

const state = {
    ui: {
        modal: false,
    },
    emails: [
        {
            address: 'john@appleseed.com',
            status: 0, //1-positive, 0-negative
        },
        {
            address: 'undefinedundefinedundefinedundefinedundefinedundefined@status.com',
            status: null,
        },
        {
            address: 'whatsorceressisthis@wut.com',
            status: 1,
        }
    ]
}
const getters = {}

const mutations = {
    [mType.MODAL_TOGGLE](state) {
        state.ui.modal = !state.ui.modal
    },

}

const actions = {}

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    getters,
    mutations,
    actions,
})