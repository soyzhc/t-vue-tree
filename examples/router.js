import basicDemoAndApi from './views/pages/basicDemoAndApi.vue'

const routers = [
    {path: "/", redirect: '/basicDemoAndApi'},
    {path: "/basicDemoAndApi", component: basicDemoAndApi},
];

export default routers;