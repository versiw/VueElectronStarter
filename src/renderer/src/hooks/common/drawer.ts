import type { DrawerPlacement } from 'naive-ui'
import { ref } from 'vue'

export const useDrawer = () => {
  const active = ref(false)
  const placement = ref<DrawerPlacement>('right')
  const activate = (place: DrawerPlacement) => {
    active.value = !active.value
    placement.value = place
  }
  return {
    active,
    placement,
    activate
  }
}
