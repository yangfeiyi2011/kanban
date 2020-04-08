import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect: 'HomePage',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
	  path: '/HomePage',
	  name: 'HomePage',
	  component: HomePage
	}
  ],
  mode: 'history'
})
