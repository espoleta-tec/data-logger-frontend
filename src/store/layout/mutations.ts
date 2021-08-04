import { MutationTree } from 'vuex';
import { LayoutStateInterface } from './state';

const mutation: MutationTree<LayoutStateInterface> = {
  changeDrawerState(state: LayoutStateInterface, payload: boolean) {
    state.drawerState = payload;
  },

  changeMini(state: LayoutStateInterface, payload: boolean) {
    state.mini = payload;
  },

  toggleDrawer(state: LayoutStateInterface) {
    state.drawerState = !state.drawerState;
  },

  toggleMini(state: LayoutStateInterface) {
    state.mini = !state.mini;
  }
};

export default mutation;
