import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { StationStateInterface } from './state'
import { api } from 'boot/axios'

const actions: ActionTree<StationStateInterface, StateInterface> = {
  async saveCurrentStation(context) {
    if (context.state.currentStation?.id) {
      return api.patch(`/station/${+context.state.currentStation.id}`, context.state.currentStation)
    }
  }
}

export default actions
