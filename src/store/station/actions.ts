import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { StationStateInterface } from './state'
import { api } from 'boot/axios'
import { ConnectionStatusEnum, Station } from 'src/types/station'

const actions: ActionTree<StationStateInterface, StateInterface> = {
  async saveCurrentStation(context) {
    if (!context.state.currentStation.id) {
      await api.post('/station', context.state.currentStation)
    } else {
      await api.patch(`/station/${+context.state.currentStation.id}`, context.state.currentStation)
    }

    context.commit('mutateKey')
  },
  connectToStation(context, station: Station) {
    if (station.connectionStatus === ConnectionStatusEnum.CONNECTED) {
      station.connectionStatus = ConnectionStatusEnum.DISCONNECTED
      station.ws?.close()
      context.commit('disconnectStation', station.id)
      return
    }
    station.connectionStatus = ConnectionStatusEnum.CONNECTING
    const url = station.ip
    // const name = station.Settings?.username
    // const password = station.Settings?.password
    // const { data: { access_token } } = await axios.post(`http://${url}/authenticate`,
    //   {
    //     name, password
    //   }).catch(() => {
    //   return { data: null }
    // })
    // if (!access_token) {
    //   return
    // }
    station.ws = new WebSocket(`ws://${url}:81`)
    station.ws.onopen = () => {
      console.log('connection opened')
      station.connectionStatus = ConnectionStatusEnum.CONNECTED
      context.commit('addConnectedStation', station)
    }
    station.ws.onmessage = (messageEvent) => {
      console.log(messageEvent.data)
    }
    station.ws.onclose = () => {
      station.connectionStatus = ConnectionStatusEnum.DISCONNECTED
      console.log('closing connection to station')
    }
    station.ws.onerror = () => {
      station.connectionStatus = ConnectionStatusEnum.DISCONNECTED
    }
  },
  uploadConfig(context, { station, token }) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { ws, id, ...object } = station
    const payload2Send = `<config>${JSON.stringify(object)}</config>token=${token as string}`
    ws?.send(payload2Send)
  }
}

export default actions
