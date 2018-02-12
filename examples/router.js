import P1 from './views/pages/p1.vue'
import basicDemo from './views/pages/basicDemo.vue'

const routers = [
    {path: "/", redirect: '/basicDemo'},
    // {path: "/", redirect: '/p1'},
    {path: "/p1", component: P1},
    {path: "/basicDemo", component: basicDemo},
];

export default routers;