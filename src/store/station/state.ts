export interface StationStateInterface {
  connectedStations: unknown[]
}

function state(): StationStateInterface {
  return {
    connectedStations: []
  }
}

export default state
