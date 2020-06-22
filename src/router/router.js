import Vue from 'vue';
import Router from 'vue-router';
import vCatalog from '../components/v-catalog';
import vCart from '../components/v-cart';
import vMain from '../components/v-main'
Vue.use(Router);

let router = new Router({
    routes:[
        {
    path:'/catalog',
    name:'catalog',
    component: vCatalog
        },
        {
            path:'/cart',
            name:'cart',
            component: vCart,
            props:true
        },
        {
            path:'/',
            name:'main',
            component:vMain,
        }
    ]
});

export default router;