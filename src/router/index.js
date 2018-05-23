import Vue from 'vue'
import Router from 'vue-router'
import Exmple from 'components/exmple/exmple'
import Xscroll from 'components/Xscroll/Xscroll'
import Yscroll from 'components/Yscroll/Yscroll'
import Banners from 'components/banners/banners'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/exmple'
    },  
    {
      path: '/exmple',
      component: Exmple
    },
    {
	  path:'/Xscroll',
	  component:Xscroll
	},
    {
	  path:'/Yscroll',
	  component:Yscroll
	},
    {
	  path:'/banners',
	  component:Banners
	}
    
  
  ]
})
