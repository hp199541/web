import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '@/views/layout'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',
    name:'首页',
    component:() => import('@/views/index/index.vue')
  },
  {
    path:'/login',
    name:'登录',
    component:() => import('@/views/login/login.vue')
  },
  {
    path:'/register',
    name:'注册',
    component:() => import('@/views/register/register.vue')
  },
  {
    path:'/resetpass',
    name:'找回密码',
    component:() => import('@/views/resetpass/resetpass.vue')
  },
  {
    path:'/search',
    name:'搜索',
    component:() => import('@/views/search/search.vue')
  },
  {
    path:'/detail',
    name:'视频详情',
    component:() => import('@/views/detail/detail.vue')
  },
  {
    path:'/user',
    name:'用户中心',
    component:() => import('@/views/user/user.vue')
  },
  {
    path:'/link',
    name:'联系我们',
    component:() => import('@/views/link/link.vue')
  },
  {
    path:'/about',
    name:'关于',
    component:() => import('@/views/about/about.vue')
  },
  {
    path:'/shortvideo',
    name:'短视频',
    Englishname:'Short Video',
    redirect:'/shortvideo/index',
    component:AppMain,
    children:[
      {
        path:'index',
        component:()=> import('@/views/shortvideo/index')
      },
    {
      path:'typeone',
      component:()=> import('@/views/shortvideo/typeone.vue')
    },
    {
      path:'typetwo',
      component:()=> import('@/views/shortvideo/typetwo.vue')
    },
    {
      path:'typethree',
      component:()=> import('@/views/shortvideo/typethree.vue')
    }
  ]    
  },
  {
    path:'/audio',
    name:'音频',
    Englishname:'Audio',
    redirect:'/audio/typeone',
    component:AppMain,
    children:[
      {
        path:'typeone',
        component:()=> import('@/views/audio/typeone.vue')
      },
      {
        path:'typetwo',
        component:()=> import('@/views/audio/typetwo.vue')
      },
      {
        path:'typethree',
        component:()=> import('@/views/audio/typethree.vue')
      }       
    ]
  },
  {
    path:'/longvideo',
    name:'纪录片',
    Englishname:'long Video',
    redirect:'/longvideo/index',
    component:AppMain,
    children:[
      {
        path:'typeone',
        component:()=> import('@/views/longvideo/typeone.vue')
      },
      {
        path:'typetwo',
        component:()=> import('@/views/longvideo/typetwo.vue')
      },
      {
        path:'typethree',
        component:()=> import('@/views/longvideo/typethree.vue')
      }       
    ]
  }
]

const router = new VueRouter({
 // mode:'history',
 routes,
})

export default router