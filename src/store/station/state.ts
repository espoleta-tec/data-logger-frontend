export interface StationStateInterface {
  connectedStations: unknown[],
  currentStation?: Record<string, any>
}

function state(): StationStateInterface {
  return {
    connectedStations: []
  }
}

export default state
