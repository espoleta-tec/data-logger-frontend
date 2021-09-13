import { MutationTree } from 'vuex'
import { StationStateInterface } from './state'
import { Station } from 'src/types/station'

const mutation: MutationTree<StationStateInterface> = {
  changeCurrentStation(state: StationStateInterface, payload: Station) {
    state.currentStation = payload
  }
}

export default mutation
