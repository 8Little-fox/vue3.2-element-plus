import Layout from '../layout/index.vue'
export default () => [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: '首页',
          icon: 'home'
        }
      }
    ]
  }
]
