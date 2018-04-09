import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MarkData from '@/components/markData/MarkData'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'MarkData',
        component: MarkData
    }]
})