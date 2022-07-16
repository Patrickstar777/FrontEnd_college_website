import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './pages/HomePage'

import ConnectUs from './pages/ConnectUs'
import TwicePage from './pages/TwicePage'
import Content from './pages/Content'
import NewsPage from './pages/NewsPage'
import Search from './pages/Search'


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/home-page' },
        { path: '/home-page', component: HomePage },
        {
            path: '/news-page', component: NewsPage
        },
        { path: '/search', component: Search },
        { path: '/connect-us', component: ConnectUs },
        { path: '/twice-page', component: TwicePage },
        { path: '/content', component: Content, name: 'content' },

    ]
})