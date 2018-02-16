<!--
    Created by 879372858@qq.com 2018/01/19/10:47:19
-->
<style scoped lang="less">
    @import '../styles/TreeNode.less';
</style>

<template>
    <compoTransition>
        <ul class="TtreeNode-wrapper"
            :class="computedNodeWrapperCls"
            :style="computedNodeWrapperStyles">
            <li>
           <span class="icon-wrapper">
               <span v-if="data.children && data.children.length" @click="handleExpand"></span>
           </span>
                <span class="checkbox-wrapper" v-if="data.checkbox" :class="computedCheckBoxCls">
                <span class="checkbox-inner"></span>
                <input type="checkbox"
                       :checked="data.checked"
                       class="checkbox-checkbox"
                       @change="checkboxChange">
           </span>
                <span class="text-wrapper" :class="computedTextCls" @click="handleClick">
               {{data.title}}
           </span>

                <TtreeNode v-if="data.expanded" v-for="(child, i) in data.children" :key="i"
                           :data="child">
                </TtreeNode>
            </li>
        </ul>
    </compoTransition>
</template>

<script>
    import compoTransition from './Transition';

    export default{
        name: 'TtreeNode',
        components: {
            compoTransition
        },
        props: {
            data: {
                type: Object,
                default () {
                    return {};
                }
            },
            checkbox: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {

//                treeAllData:[]
            }
        },
        computed: {
            computedNodeWrapperCls(){
                let that = this;
                let result = '';

                let hasChildren = that.data.children && that.data.children.length;
                let isExpanded = that.data.expanded && hasChildren;
                let isCollapsed = !that.data.expanded && hasChildren;

                if (isExpanded) {
                    result += 'expanded';
                } else if (isCollapsed) {
                    result += 'collapsed';
                }
                return result;
            },

            computedNodeWrapperStyles(){
                let that = this;
                let result = '';

                return result;
            },
            computedCheckBoxCls(){
                let that = this;
                let result = '';

                if (that.data.checked) {
                    result += 'checked';
                } else if (that.data.indeterminated) {
                    result += 'indeterminated';
                }

                return result;
            },

            computedTextCls(){
                let that = this;
                let result = '';

                if (that.data.selected) {
                    result += 'text-selected';
                }

                return result;
            }
        },

        watch: {},

        methods: {

            handleClick(){
                let that = this;
                let item = that.data;
                let parent = that._getParent();

                /* このノードのselected状態を変え */
                that.$set(that.data, 'selected', !that.data.selected);
                parent.$emit.apply(parent, ['handleClickText'].concat(that.data));
            },

            handleExpand(){
                let that = this;
                let item = that.data;
                let parent = that._getParent();

                if (item.children && item.children.length) {
                    that.$set(that.data, 'expanded', !that.data.expanded);
                    parent.$emit.apply(parent, ['handleToggle'].concat(that.data));

                    //demo
                    //this.dispatch('Tree', 'toggle-expand', this.data);

                }
            },

            _getParent(){
                let that = this;
                let parent = that.$parent || that.$root;
                let name = parent.$options.name;

                while (parent && name !== 'Ttree') {
                    parent = parent.$parent;
                    parent && (name = parent.$options.name);
                }

                console.log('getParent(), name理应为Ttree,实际为', name);
                return parent;

            },

            checkboxChange(e){
                let that = this;

                const checkedVal = e.target.checked;
                that.$set(that.data, 'checked', checkedVal);

                let item = that.data;
                let parent = that._getParent();
                parent.$emit.apply(parent, ['handleCheckbox'].concat(that.data));

            }
        },

        created(){
            let that = this;
//            console.log(that.data, that.data.constructor);

        }
    }
</script>