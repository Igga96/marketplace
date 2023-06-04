import { createWebHistory, createRouter } from 'vue-router'
import vCatalog from '../components/v-catalog.vue'
import vBasket from '../components/v-basket.vue'
import vOrder from '../components/v-order.vue'

const routes = [
    {
        path: '/',
        name: 'catalog',
        component:
            vCatalog
    },
    {
        path: '/basket',
        name: 'basket',
        component:
            vBasket,
        props: true

    },
    {
        path: '/order',
        name: 'order',
        component: vOrder,

    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
export default router