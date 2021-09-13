import { Station } from 'src/types/station'

export interface StationStateInterface {
  connectedStations?: Station,
  currentStation?: Station
}

function state(): StationStateInterface {
  return {}
}

export default state
