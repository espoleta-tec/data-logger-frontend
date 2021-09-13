import { useStore } from 'src/store'
import { computed } from 'vue'
import { Station } from 'src/types/station'

export function useCurrentStation() {
  const store = useStore()
  return computed((): Station => store.state.station.currentStation as Station)
}
