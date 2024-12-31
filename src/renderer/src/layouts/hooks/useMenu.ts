import iconMaps from '@renderer/utils/iconMaps'
import { renderIconMenu } from '@renderer/utils/common'
import type { MenuOption } from 'naive-ui'
import { computed, ref } from 'vue'
import { RouteRecordNormalized, RouterLink, useRoute, useRouter } from 'vue-router'
import { getLocale } from '@renderer/locales'

export const useMenu = () => {
  const isCollapsed = ref(false)

  const router = useRouter()

  const routes = computed(() => {
    const routerList = router.getRoutes()
    return routerList
  })

  const route = useRoute()
  const activeKey = ref(route.fullPath)

  const filterChildRoutes = (routes: RouteRecordNormalized[]) => {
    const routePaths = routes.map((route) => route.path)
    return routes.filter((route) => {
      const isChildRoute = routePaths.some(
        (path) => route.path.startsWith(`${path}/`) && route.path !== path
      )
      if (!isChildRoute && route.children && route.children.length > 0) {
        route.meta = { ...route.meta, isGroup: true }
      }
      return !isChildRoute
    })
  }

  const filterRoutesWithIsGroup = (routes: RouteRecordNormalized[]) => {
    const pathMap = new Map<string, RouteRecordNormalized>()

    routes.forEach((route) => {
      if (pathMap.has(route.path)) {
        const existingRoute = pathMap.get(route.path)
        if (route.meta.isGroup && !existingRoute?.meta.isGroup) {
          pathMap.set(route.path, route)
        }
      } else {
        pathMap.set(route.path, route)
      }
    })

    return Array.from(pathMap.values())
  }

  const filteredRoutes = computed(() => {
    const filterRouteList = filterRoutesWithIsGroup(filterChildRoutes(routes.value))
    return filterRouteList
  })

  function createMenuOption(route: RouteRecordNormalized, parentPath = ''): MenuOption {
    const path = parentPath + route.path
    const isActive = activeKey.value === path
    const childrenList = route.children
    const menuOption: MenuOption = {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: path
            }
          },
          {
            default: () => {
              switch (getLocale()) {
                case 'zh-CN':
                  return route.meta?.title || '未命名'
                case 'en-US':
                  return route.meta?.enUSTitle || 'untitled'
              }
            }
          }
        ),
      key: path,
      icon: isActive
        ? renderIconMenu(iconMaps[(route.meta?.iconAction as string) || 'Warning'])
        : renderIconMenu(iconMaps[(route.meta?.icon as string) || 'WarningOutline'])
    }

    if (childrenList && childrenList.length) {
      menuOption.children = childrenList.map((childRoute) =>
        createMenuOption(
          childRoute as RouteRecordNormalized,
          path.endsWith('/') ? path : path + '/'
        )
      )
    }

    return menuOption
  }

  function transformRoutesToMenuOptions(routes: RouteRecordNormalized[]) {
    return routes.filter((route) => !route.meta?.isHide).map((route) => createMenuOption(route))
  }

  const menuOptions = computed<MenuOption[]>(() =>
    transformRoutesToMenuOptions(filteredRoutes.value)
  )

  const handleMenuClick = (key: string) => {
    activeKey.value = key
    router.push(key)
  }

  return {
    isCollapsed,
    menuOptions,
    activeKey,
    handleMenuClick
  }
}
