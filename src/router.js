import Vue from 'vue'
import Router from 'vue-router'

const MyNav = resolve => require(['./components/MyNav/MyNav'], resolve);
const G2 = resolve => require(['./components/g2/test'], resolve);
const Loading = resolve => require(['./components/Loading/Loading'], resolve);

//const MyNav = () => import(/* webpackChunkName: "group-MyNav" */ './components/MyNav/MyNav');

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'MyNav',
            component: MyNav,
            children:[
                {
                    path:"g2",
                    name:"g2",
                    component:G2
                },
                {
                    path:"loading",
                    name:"loading",
                    component:Loading
                }
            ]
        }
    ]
})
