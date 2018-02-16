
<style scoped lang="less">
    @import '../styles/Tree.less';
</style>

<template>
    <div class="Ttree-wrapper"
         :class="computedTreeWrapperCls"
         :style="computedTreeWrapperStyles">
        <TtreeNode v-for="(item, i) in treeAllData" :key="i"
                   :data="item">
        </TtreeNode>
    </div>
</template>

<script>
    import TtreeNode from './TreeNode.vue';

    export default{
        name: 'Ttree',
        components: {
            TtreeNode
        },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            showCheckbox: {
                type: Boolean,
                default: false
            },
            treeSelectable: {
                type: Boolean,
                default: true
            },
            treeSelectType: {
                type: String,
                default: 'single'
            }
        },
        data(){
            return {
                treeAllData: []
            }
        },
        computed: {
            computedTreeWrapperCls(){
                let that = this;
                let result = '';

                return result;
            },

            computedTreeWrapperStyles(){
                let that = this;
                let result = '';

                return result;
            }
        },

        watch: {
            data(val){

//                this.rebuildTree();
            }
        },

        methods: {

            getCheckedNodes(type){
                let that = this;
                console.log('getCheckedNodes in source/Ttree.vue', type);
                return that.flatTree.filter(obj => obj.node[type]).map(obj => obj.node);
            },
            _handleCheckbox(params){
                let that = this;

                let currentCheckVal = params.checked;
                let currentNodeKey = params.nodeKey;

                const node = that.flatTree[currentNodeKey].node;
                console.log(node);

                that.$set(node, 'checked', currentCheckVal);
                that.$set(node, 'indeterminated', false);

                that._propagateUp(currentNodeKey);
                (params.children && params.children.length) && that._propagetaDown(node,{
                    checked:currentCheckVal,
                    indeterminated:false
                });

                //今操作してるのツリーノードを外に通知
                that.$emit('onCheck', params);
            },

            /**
             * 文字をクリックした時
             * @param params
             * @private
             */
            _handleClickText(params){
                let that = this;

                let currentSelectVal = params.selected;
                let currentNodeKey = params.nodeKey;

                const node = that.flatTree[currentNodeKey].node;
                console.log(node);

                that.$set(node, 'selected', currentSelectVal);

                //今操作してるのツリーノードを外に通知
                that.$emit('onSelect', params);
            },

            _propagateUp(nodekey){
                let that = this;

                console.log('======');
                console.log('nodekey', nodekey);
                console.log('node',  that.flatTree[nodekey].node.title);
                console.log('currentNode.checked',  that.flatTree[nodekey].node.checked);
                console.log('======');

                const parentKey = that.flatTree[nodekey].parent;
                if(parentKey === undefined) {return;}
                const currentNode = that.flatTree[nodekey].node;
                const parentNode = that.flatTree[parentKey].node;

                if(currentNode.checked == parentNode.checked && currentNode.indeterminated == parentNode.indeterminated){
                    return;
                }

                if(currentNode.checked){
                    let isAllChildrenChecked = true;
                    let allChildren = parentNode.children;
                    for(let i = 0,len = allChildren.length;i<len;i++){
                        let _child = allChildren[i];
                        if(!_child.checked){
                            isAllChildrenChecked = false;
                            break;
                        }
                    }

                    console.log(`选中节点为${currentNode.title},isAllChildrenChecked值为${isAllChildrenChecked}`);

                    that.$set(parentNode, 'indeterminated', !isAllChildrenChecked);
                    that.$set(parentNode, 'checked', isAllChildrenChecked);

                }else{
                    let isChildenContainIndeterminated = false;
                    let isAllChildrenChecked = true;

                    let isChildenContainUnchecked = false;

                    let uncheckedCount = 0;

                    let jAllChildren = parentNode.children;
                    for(let j = 0,jlen = jAllChildren.length;j<jlen;j++){
                        console.log("cc_22");
                        let _jChild = jAllChildren[j];
//                        if(_jChild.indeterminated){
//                            isChildenContainIndeterminated = true;
//                            break;
//                        }
                        if(!_jChild.checked && !_jChild.indeterminated){
                            uncheckedCount++;
                        }
                    }
                    console.log(uncheckedCount)
                    console.log(jAllChildren.length)
                    if(uncheckedCount != jAllChildren.length){
                        isChildenContainUnchecked = true;
                    }

                    that.$set(parentNode, 'indeterminated', isChildenContainUnchecked);
                    that.$set(parentNode, 'checked', false);
                }

                that._propagateUp(parentKey);

            },

            _propagetaDown(node, params={}){
                let that = this;

                for(let i in params){
                    that.$set(node, i, params[i]);
                }
//                debugger
//                that.$set(node, 'checked', params['checked']);
//                that.$set(node, 'indeterminated', false);

                //TODO 重整这里 that.flatTree[child]
                if(node && node.children && node.children.length){
                    node.children.forEach(child => {
//                        that._propagetaDown({
//                            nodeKey:
//                        });

                        that._propagetaDown(child, params);
                    });
                }
            },

            generateFlatTree () { // so we have always a relation parent/children of each node
                let that = this;
                let keyCounter = 0;
                const flatTree = [];
                function flattenChildren(node, parent) {
                    node.nodeKey = keyCounter++;
                    flatTree[node.nodeKey] = {
                        node: node,
                        nodeKey: node.nodeKey
                    };
                    if (typeof parent != 'undefined') {
                        flatTree[node.nodeKey].parent = parent.nodeKey;
                        flatTree[parent.nodeKey].children.push(node.nodeKey);
                    }

                    if (node.children) {
                        flatTree[node.nodeKey].children = [];
                        node.children.forEach(child => flattenChildren(child, node));
                    }
                }
                that.treeAllData.forEach(rootNode => {
                    flattenChildren(rootNode);
                });
                return flatTree;
            },
            rebuildTree(){
                let that = this;

                that.treeAllData = [];
            }
        },

        created(){
            let that = this;
            that.treeAllData = that.data;

            that.flatTree = that.generateFlatTree();
        },

        mounted(){
            let that = this;

            that.$on('handleToggle', data => that.$emit('onToggle', data));
            that.$on('handleCheckbox', that._handleCheckbox);
            that.$on('handleClickText', that._handleClickText);

//            this.$on('toggle-expand', node => this.$emit('on-toggle-expand', node));
        }
    }
</script>