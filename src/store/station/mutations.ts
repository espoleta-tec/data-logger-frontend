import { MutationTree } from 'vuex'
import { StationStateInterface } from './state'

const mutation: MutationTree<StationStateInterface> = {
  changeCurrentStation(state: StationStateInterface, payload: Record<string, any>) {
    state.currentStation = payload
  }
}

export default mutation
