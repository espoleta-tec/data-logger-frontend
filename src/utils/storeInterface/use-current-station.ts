import { useStore } from 'src/store'
import { computed } from 'vue'

export function useCurrentStation() {
  const store = useStore()
  return computed(() => store.state.station.currentStation)
}
