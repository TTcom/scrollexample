import Vue from 'vue'
import Router from 'vue-router'
import Exmple from 'components/exmple/exmple'
import Xscroll from 'components/Xscroll/Xscroll'
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
	    }
    
  
  ]
})
