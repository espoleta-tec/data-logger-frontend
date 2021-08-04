export interface LayoutStateInterface {
  drawerState: boolean
  mini: boolean,
  overlay: boolean
}

function state(): LayoutStateInterface {
  return {
    drawerState: true, mini: true, overlay: false
  };
}

export default state;
