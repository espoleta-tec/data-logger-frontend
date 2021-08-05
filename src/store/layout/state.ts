export interface LayoutStateInterface {
  drawerState: boolean
  mini: boolean,
  overlay: boolean
}

function state(): LayoutStateInterface {
  return {
    drawerState: false, mini: true, overlay: false
  }
}

export default state
