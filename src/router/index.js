import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import HomePage from '@/components/HomePage'
// import Profile from '@/components/Profile'
// import Projects from '@/components/Projects'
// import About from '@/components/About'
const HomePage = () => import('@/components/HomePage')
const Profile = () => import('@/components/Profile')
const Projects = () => import('@/components/Projects')
const About = () => import('@/components/About')
const Login = () => import('@/components/Login')

Vue.use(Router)
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'HomePage',
    },
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
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  ],
  mode: 'history'
})
