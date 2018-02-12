<style scoped>
    .demo1 {
        border: 1px solid mediumpurple;
        width: 200px;
        height: 300px;
    }
</style>

<template>
    <div class="index">

        <p>p1</p>
        <div class="demo1">

        </div>
        <div>
            <div class="marquee-wrap" style="width: 100px;">
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        components: {

        },
        data(){
            return {
                myData: {
                    name: '天天',
                    country: 'china'
                }
            }
        }
    }
</script>
