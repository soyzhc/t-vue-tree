<style lang="less">
    @import 'styles/common.less';
</style>

<style lang="less" scoped>
    @import 'styles/nav.less';
</style>
<template>
    <div>
        <div class="left-top-nav">
            <router-link class="link-item" to="basicDemoAndApi">基本api</router-link>
            <router-link class="link-item" target="_blank" to="reloadTreeData">用新数据重新加载树</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        mounted () {
            console.log('app.vue');
        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
