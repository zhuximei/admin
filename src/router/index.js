import Vue from 'vue'
import Router from 'vue-router'
import RyLogin from '@/pages/ry-login'
import RyUserAdm from '@/pages/ry-userAdm'
import RyUserAdmContent from '@/components/ry-userAdmcom/ry-userAdm-content'
import RyRoleAdmContent from '@/components/ry-userAdmcom/ry-roleAdm-content'
import RyMenu from '@/pages/ry-menu'
import MenuContent from '@/components/ry-menu/MenuContent'
import SectionContent from '@/components/ry-menu/SectionContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: RyLogin,
    },
    {
      path: '/RyUserAdm',
      component: RyUserAdm,
      children:[
        {
          path: '/RyUserAdmContent',
          component: RyUserAdmContent,
        },
        {
          path: '/RyRoleAdmContent',
          component: RyRoleAdmContent,
        }
      ]
    },
    {
      path: '/RyMenu',
      component: RyMenu,
      children:[
        {
          path: '/MenuContent',
          component: MenuContent,
        },
        {
          path: '/SectionContent',
          component: SectionContent,
        }
      ]
    }
  ]
})
