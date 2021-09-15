export enum OperationModeEnum {
  AP = 'AP',
  STATION = 'STATION'
}

export enum ConnectionStatusEnum {
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING'
}

export class StationSettings {
  id: number | undefined

  generalReadDelay: number | undefined

  precipitationReadDelay: string | undefined

  username: string | undefined

  password: string | undefined
}


export class Station {
  id: number | undefined

  ip: string | undefined

  ipMask: string | undefined

  ssid: string | undefined

  password: string | undefined

  hostname: string | undefined

  connectionMode: OperationModeEnum | undefined


  Settings: StationSettings | undefined

  ws?: WebSocket

  connectionStatus = ConnectionStatusEnum.DISCONNECTED
}

