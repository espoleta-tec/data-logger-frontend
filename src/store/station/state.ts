import { Station } from 'src/types/station'

export interface StationStateInterface {
  connectedStations: Station[],
  availableStations: Station[],
  currentStation?: Station
}

function state(): StationStateInterface {
  return {
    connectedStations: [], availableStations: []
  }
}

export default state
