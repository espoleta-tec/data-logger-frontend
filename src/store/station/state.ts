import { Station } from 'src/types/station'

export interface StationStateInterface {
  connectedStations: Station[],
  availableStations: Station[],
  currentStation?: Station,
  moduleKey: number
}

function state(): StationStateInterface {
  return {
    connectedStations: [], availableStations: [], moduleKey: 0
  }
}

export default state
