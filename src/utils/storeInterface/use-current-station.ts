import { useStore } from 'src/store'
import { computed } from 'vue'

export function useCurrentStation() {
  const store = useStore()
  return computed({
    get() {
      return store.state.station.currentStation
    },
    set(newValue) {
      store.commit('station/changeCurrentStation', newValue)
    }
  })
}
