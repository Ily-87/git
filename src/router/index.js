import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import fantasy from '@/components/fantasy'
import game from '@/components/game'
import docs from '@/components/docs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fantasy',
      name: ' fantasy',
      component: fantasy
    },
    {
      path: '/game',
      name: ' game',
      component: game
    },
    {
      path: '/docs',
      name: ' docs',
      component: docs
    }
  ]
})
