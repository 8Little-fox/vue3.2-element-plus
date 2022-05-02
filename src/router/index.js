import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }
]

export const privateRoute = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    meta: {
      title: '首页',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/dashboard',
        name: '首页',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: '首页',
          icon: 'dashboard'
        }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile',
    meta: {
      title: '个人中心',
      icon: 'people'
    },
    children: [
      {
        path: '/profile',
        name: '个人中心',
        component: () => import('@/views/profile/index'),
        meta: {
          title: '个人中心',
          icon: 'people'
        }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    name: '系统管理',
    meta: {
      title: '系统管理',
      icon: 'system'
    },
    children: [
      {
        path: '/system/userManager',
        component: () => import('@/views/system/userManager/index'),
        name: 'UserManager',
        meta: { title: '用户管理', icon: 'user' }
      },
      {
        path: '/system/role',
        component: () => import('@/views/system/role/index'),
        name: 'Role',
        meta: { title: '角色管理', icon: 'role' }
      },
      {
        path: '/system/role/details/:id',
        component: () => import('@/views/system/role/details'),
        name: 'Details',
        props: true,
        meta: { title: '角色详情', icon: 'role' }
      },
      {
        path: '/system/department',
        component: () => import('@/views/system/department/index'),
        name: 'Department',
        meta: { title: '部门管理', icon: 'dept' }
      }
    ]
  },
  {
    path: '/demo',
    component: Layout,
    redirect: '/demo/goodsList',
    name: 'DEMO',
    meta: {
      title: 'DEMO',
      icon: 'dev'
    },
    children: [
      {
        path: '/demo/testCom',
        component: () => import('@/views/demo/testCom/index'),
        name: 'TestCom',
        meta: { title: '测试组件', icon: '' }
      },
      {
        path: '/demo/authority',
        component: () => import('@/views/demo/authority/index'),
        name: 'Authority',
        meta: { title: '权限', icon: '' }
      },
      {
        path: '/demo/goodsList',
        component: () => import('@/views/demo/goodsList/index'),
        name: 'GoodsList',
        meta: { title: '商品列表', icon: '' }
      },
      {
        path: '/demo/pdf',
        component: () => import('@/views/demo/pdf/index'),
        name: 'PDF',
        meta: { title: 'PDF', icon: '' }
      },
      {
        path: '/demo/clipboard',
        component: () => import('@/views/demo/clipboard/index'),
        name: 'Clipboard',
        meta: { title: '粘贴板', icon: '' }
      },
      {
        path: '/demo/tinymce',
        component: () => import('@/views/demo/tinymce/index'),
        name: 'Tinymce',
        meta: { title: '富文本编辑器', icon: '' }
      },
      {
        path: '/demo/scroll',
        component: () => import('@/views/demo/scroll/index'),
        name: 'Scroll',
        meta: { title: '滚动', icon: '' }
      },
      {
        path: '/demo/upload',
        component: () => import('@/views/demo/upload/index'),
        name: 'Upload',
        meta: { title: '导入', icon: '' }
      }
    ]
  },
  {
    path: '/pdf-download-example',
    component: () => import('@/views/demo/pdf/download'),
    meta: { hidden: true }
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...privateRoute]
})
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
