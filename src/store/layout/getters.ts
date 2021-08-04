import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { LayoutStateInterface } from './state';

const getters: GetterTree<LayoutStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
