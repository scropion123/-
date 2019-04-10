import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Member from '@/components/member'
import Shopcar from '@/components/shopcar'
import Search from '@/components/search'
import NewsList from '@/components/news/newsList'
import NewsInfo from '@/components/news/newsInfo'
import PhotoList from '@/components/photos/photoList'
import PhotoInfo from '@/components/photos/photoInfo'
import GoodsList from '@/components/goods/goodsList'
import GoodsInfo from '@/components/goods/goodsInfo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/member',
      name: 'Member',
      component: Member
    },{
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/home/newslist',
      name: 'NewsList',
      component: NewsList
    },{
      path: '/home/newsinfo/:id',
      name: 'NewsInfo',
      component: NewsInfo
    },{
      path: '/home/photolist',
      name: 'PhotoList',
      component: PhotoList
    },{
      path: '/home/photoinfo/:id',
      name: 'PhotoInfo',
      component: PhotoInfo
    },{
      path: '/home/goodslist',
      name: 'GoodsList',
      component: GoodsList
    },{
      path: '/home/goodsinfo/:id',
      name: 'GoodsInfo',
      component: GoodsInfo
    },
  ],
  linkActiveClass: 'mui-active'
})
