import Vue from 'vue'
import Vuex from 'vuex'
import { getAllMembers as membersService } from '../../services/members.js';
import {FETCH_MEMBERS} from '../types/actions'
import {FETCH_MEMBERS_END} from '../types/mutations'

Vue.use(Vuex)

export default({
  namespaced: true,
  state: {
      membersList: [],
      membersRaw: []
  },
  mutations: {
      [FETCH_MEMBERS_END] (state, {members}){
        state.membersList = members;
        state.membersRaw = members;
      }
  },
  actions: {
    [FETCH_MEMBERS] ({ commit }){
        return membersService()
        .then(membersResult => {
            commit (FETCH_MEMBERS_END, {
                members: membersResult,
            })
        })
        .catch(error => {
            throw new Error(error);
          });
    },
  },
})
