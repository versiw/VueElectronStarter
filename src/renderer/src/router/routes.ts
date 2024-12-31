import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@renderer/views/index.vue'),
    meta: {
      title: '首页',
      enUSTitle: 'Home',
      isHide: false,
      icon: 'HomeOutline',
      iconAction: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@renderer/views/about.vue'),
    meta: {
      title: '关于',
      enUSTitle: 'About',
      isHide: false,
      icon: 'InformationCircleOutline',
      iconAction: 'InformationCircle'
    }
  },
  {
    path: '/groups',
    name: 'groups',
    component: () => import('@renderer/views/groups.vue'),
    // component: () => import('@renderer/views/groups/children1.vue'),
    meta: {
      title: '传统路由分组1',
      enUSTitle: 'File Routing Menu 1',
      isHide: false,
      icon: 'MenuOutline',
      iconAction: 'Menu'
    },
    children: [
      {
        path: '',
        name: 'groups_index',
        component: () => import('@renderer/views/groups/index.vue'),
        meta: {
          title: '二级子选项1',
          enUSTitle: 'Secondary sub-option 1',
          isHide: false,
          icon: '',
          iconAction: ''
        }
      },
      {
        path: 'children1',
        name: 'groups_children1',
        component: () => import('@renderer/views/groups/children1.vue'),
        meta: {
          title: '二级子选项2',
          enUSTitle: 'Secondary sub-option 2',
          isHide: false,
          icon: '',
          iconAction: ''
        }
      },
      {
        path: 'children2',
        name: 'groups_children2',
        component: () => import('@renderer/views/groups/children2.vue'),
        meta: {
          title: '二级子选项3',
          enUSTitle: 'Secondary sub-option 3',
          isHide: true,
          icon: '',
          iconAction: ''
        }
      },
      {
        path: 'groupsTwo',
        name: 'groupsTwo',
        component: () => import('@renderer/views/groups/groupsTwo.vue'),
        meta: {
          title: '传统路由分组2',
          enUSTitle: 'File Routing Menu 2',
          isHide: false,
          icon: 'MenuOutline',
          iconAction: 'Menu'
        },
        children: [
          {
            path: '',
            name: 'groupsTwo_index',
            component: () => import('@renderer/views/groups/groupsTwo/index.vue'),
            meta: {
              title: '三级子选项1',
              enUSTitle: 'Tertiary sub-option 1',
              isHide: false,
              icon: '',
              iconAction: ''
            }
          },
          {
            path: 'children1',
            name: 'groupsTwo_children1',
            component: () => import('@renderer/views/groups/groupsTwo/children1.vue'),
            meta: {
              title: '三级子选项2',
              enUSTitle: 'Tertiary sub-option 2',
              isHide: false,
              icon: '',
              iconAction: ''
            }
          }
        ]
      }
    ]
  }
]

export default routes
