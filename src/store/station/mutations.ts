import { MutationTree } from 'vuex'
import { StationStateInterface } from './state'
import { Station } from 'src/types/station'
import { plainToClass } from 'class-transformer'

const mutation: MutationTree<StationStateInterface> = {
  changeCurrentStation(state: StationStateInterface, payload: Station) {
    state.currentStation = payload
  },
  addConnectedStation(state: StationStateInterface, payload: Station) {
    state.connectedStations.push(payload)
  },
  disconnectStation(state: StationStateInterface, payload: number) {
    state.connectedStations = state.connectedStations.filter(sta => sta.id !== payload)
  },
  loadAvailableStations(state: StationStateInterface, payload: Station[]) {
    state.availableStations = plainToClass(Station, payload)
    // state.availableStations.map((available, i) => {
    //   const cond = state.connectedStations.find(connected => connected.id === available.id)
    //   if (cond) {
    //     state.availableStations[i] = cond
    //   }
    // })
  }
}

export default mutation
