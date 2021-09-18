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
  id: number | null = null

  generalReadDelay = 1

  precipitationReadDelay = 1

  username = 'admin'

  password = 'adminpassword'
}


export class Station {
  id = -1

  ip = '192.168.4.1'

  ipMask = '255.255.255.0'

  ssid = 'station-ap'

  password = 'ap-password'

  hostname = 'station-0'

  connectionMode: OperationModeEnum = OperationModeEnum.AP


  Settings: StationSettings = new StationSettings()

  ws?: WebSocket = undefined

  connectionStatus = ConnectionStatusEnum.DISCONNECTED

  get currentUrl() {
    return this.ws?.url.split(':')[1] || '/'
  }
}

