import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { StationStateInterface } from './state'

const actions: ActionTree<StationStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  }
}

export default actions
