import iconMaps from '@renderer/utils/iconMaps'
import { renderIconMenu } from '@renderer/utils/common'
import { MenuOption } from 'naive-ui'
import { computed, ref } from 'vue'
import { RouteRecordNormalized, useRoute, useRouter } from 'vue-router'

// TODO:: 基于文件系统的自动路由，需要完善符合NavieUI的MenuOption类型数据格式

export const useMenu = () => {
  const isCollapsed = ref(false)

  // 监听菜单收缩状态
  watch(
    () => isCollapsed.value,
    (newVal) => {
      console.log('menu isCollapsed:', newVal)
      // state.openKeys = newVal ? [] : getOpenKeys
      // selectedKeys.value = currentRoute.name as string
    }
  )

  // 获取路由实例
  const router = useRouter()
  console.log('useRouter object:', router)

  // 获取所有路由
  const routes = router.getRoutes()
  console.log('all routers:', routes)

  // 获取当前激活的路由
  const route = useRoute()
  const activeKey = ref(route.path)

  console.log('active menu', route.matched)

  // 过滤掉子路由，并标记父路由为 isGroup
  const filteredRoutes = filterChildRoutes(routes)
  console.log(filteredRoutes)

  // 根据过滤后的路由数据生成菜单选项
  const menuOptions = computed<MenuOption[]>(() => {
    return filteredRoutes
      .filter((route) => !route.meta?.isHide)
      .map((route) => {
        const isActive = activeKey.value === route.path
        if (route.children.length) {
          return {
            label: route.meta?.title || route.name,
            key: route.path,
            children: route.children.map((child) => ({
              label: child.meta?.title || child.name,
              key: route.path + '/' + child.path,
              icon:
                activeKey.value === route.path + '/' + child.path
                  ? renderIconMenu(iconMaps[(child.meta?.iconAlt as string) || 'Warning'])
                  : renderIconMenu(iconMaps[(child.meta?.icon as string) || 'WarningOutline'])
            })),
            icon: isActive
              ? renderIconMenu(iconMaps[(route.meta.iconAlt as string) || 'Warning'])
              : renderIconMenu(iconMaps[route.meta.icon as string] || 'WarningOutline')
          }
        } else {
          return {
            label: route.meta?.title || route.name,
            key: route.path,
            icon: isActive
              ? renderIconMenu(iconMaps[(route.meta.iconAlt as string) || 'Warning'])
              : renderIconMenu(iconMaps[route.meta.icon as string] || 'WarningOutline')
          }
        }
      })
  })

  // 菜单项点击事件处理函数
  const handleMenuClick = (key: string, item: MenuOption) => {
    activeKey.value = key
    console.log('active key:', key)
    console.log('active item:', item)
    router.push(key)
  }

  return {
    isCollapsed,
    menuOptions,
    activeKey,
    handleMenuClick
  }
}

const filterChildRoutes = (routes: RouteRecordNormalized[]) => {
  const routePaths = routes.map((route) => route.path)
  return routes.filter((route) => {
    // 检查当前路由是否是其他任何路由的子路由
    const isChildRoute = routePaths.some(
      (path) => route.path.startsWith(`${path}/`) && route.path !== path
    )
    // 如果当前路由不是子路由，并且它的children数组不为空，则它是一个父路由
    if (!isChildRoute && route.children && route.children.length > 0) {
      // 添加或更新meta属性
      route.meta = { ...route.meta, isGroup: true }
    }
    return !isChildRoute
  })
}
