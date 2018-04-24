import basicDemoAndApi from './views/pages/basicDemoAndApi.vue'
import reloadTreeData from './views/pages/reloadTreeData.vue'
import defaultCheckedNodes from './views/pages/defaultCheckedNodes.vue'

const routers = [
    {path: "/", redirect: '/basicDemoAndApi'},
    {path: "/basicDemoAndApi", component: basicDemoAndApi},
    {path: "/reloadTreeData", component: reloadTreeData},
    {path: "/defaultCheckedNodes", component: defaultCheckedNodes},
];

export default routers;