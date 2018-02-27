import basicDemoAndApi from './views/pages/basicDemoAndApi.vue'
import reloadTreeData from './views/pages/reloadTreeData.vue'

const routers = [
    {path: "/", redirect: '/basicDemoAndApi'},
    {path: "/basicDemoAndApi", component: basicDemoAndApi},
    {path: "/reloadTreeData", component: reloadTreeData},
];

export default routers;