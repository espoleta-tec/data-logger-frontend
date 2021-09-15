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

  generalReadDelay = 0

  precipitationReadDelay = ''

  username = 'admin'

  password = 'adminpassword'
}


export class Station {
  id: number | null = null

  ip = '192.168.4.1'

  ipMask = '255.255.255.0'

  ssid = 'station-ap'

  password = 'ap-password'

  hostname = 'station-0'

  connectionMode: OperationModeEnum = OperationModeEnum.AP


  Settings: StationSettings = new StationSettings()

  ws?: WebSocket

  connectionStatus = ConnectionStatusEnum.DISCONNECTED
}

