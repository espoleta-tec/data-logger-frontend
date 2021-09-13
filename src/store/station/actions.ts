import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { StationStateInterface } from './state'
import { api } from 'boot/axios'

const actions: ActionTree<StationStateInterface, StateInterface> = {
  async saveCurrentStation(context) {
    if (!context.state.currentStation?.id) {
      await api.post('/station', context.state.currentStation)
    }
    if (context.state.currentStation?.id) {
      await api.patch(`/station/${+context.state.currentStation.id}`, context.state.currentStation)
    }

    window.location.reload()
  }
}

export default actions
