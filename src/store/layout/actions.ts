import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { LayoutStateInterface } from './state';

const actions: ActionTree<LayoutStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
