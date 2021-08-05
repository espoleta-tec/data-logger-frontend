import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { StationStateInterface } from './state'

const getters: GetterTree<StationStateInterface, StateInterface> = {
  someGetter(/* context */) {
    // your code
  }
}

export default getters
