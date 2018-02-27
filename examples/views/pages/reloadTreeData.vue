<template>
    <div class="main-content">
        <h1>t-vue-tree</h1>
        <h3 class="title-mark"> 一个基于vue的同步树 </h3>
        <p>ps:当前版本没有做异步树</p>
        <section class="inner-main-content">
            <h3 class="title-mark">reloadTreeData</h3>
            <div class="example-box" ref="containerNode">
                <div class="top demo1-tree-wrapper">
                    <Ttree ref="demotree"
                           :data="treeData"
                           :treeSelectable="treeSelectable"
                           :treeSelectType="treeSelectType"
                    ></Ttree>
                </div>
                <div class="bottom">
                    <div class="control-part" @click="showHideCode(0)">
                        {{examplesObj[0].bottomShow ? '隐藏代码' : '显示代码'}}
                    </div>
                    <div class="code-part" v-if="examplesObj[0].bottomShow">

                    </div>
                </div>

            </div>

            <div class="example-box padding">
                <p class="example-title">事件示例：</p>

                <p class="example-title" style="margin:10px 0 0;">方法示例：</p>
                <button class="btn btn-block" @click="updateTreeData">更新树的数据</button>

            </div>
        </section>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                examplesObj: [
                    {
                        bottomShow: false,
                        resultStr: ''
                    },
                    {
                        bottomShow: false,
                        resultStr: ''
                    },
                    {
                        bottomShow: false,
                        resultStr: ''
                    },
                    {
                        bottomShow: false,
                        resultStr: ''
                    }
                ],
                treeSelectable: true,//点击树节点时，是否有选中效果，默认true,
                treeSelectType: "single",//点击树节点时的选中效果是单选还是多选,默认single
                treeData: [
                    {
                        title: 'parent 1',
                        expanded: true,
                        checkbox: true,//是否有勾选框,默认false
                        checked: false,//是否勾选该节点，默认false
                        selected: false,//是否选中该节点，默认false
                        custormKey: 'ccdf',
                        children: [
                            {
                                title: 'parent 1-1',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: false,//是否勾选该节点，默认false
                                custormKey: 'ccdf',
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: false,//是否勾选该节点，默认false
                                        custormKey: 'ccdf',
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: false,//是否勾选该节点，默认false
                                        selected:true,//是否选中该节点，默认false
                                        custormKey: 'ccdf',
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: false,//是否勾选该节点，默认false
                                custormKey: 'ccdf',
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: false,//是否勾选该节点，默认false
                                        custormKey: 'ccdf',
                                        children: [
                                            {
                                                title: 'leaf 1-2-1-1',
                                                checkbox: true,//是否有勾选框,默认false
                                                checked: false,//是否勾选该节点，默认false
                                                custormKey: 'mmccf',
                                            },
                                            {
                                                title: 'leaf 1-2-1-2',
                                                checkbox: true,//是否有勾选框,默认false
                                                checked: false,//是否勾选该节点，默认false
                                                custormKey: 'mmccf',
                                            },
                                            {
                                                title: 'leaf 1-2-1-3',
                                                checkbox: true,//是否有勾选框,默认false
                                                checked: false,//是否勾选该节点，默认false
                                                custormKey: 'mmccf',
                                            }
                                        ]
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: false,//是否勾选该节点，默认false
                                        custormKey: 'ccdf',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'parent 2',
                        expanded: false,
                        checkbox: true,//是否有勾选框,默认false
                        checked: true,//是否勾选该节点，默认false
                        children: [
                            {
                                title: 'parent 2-1',
                                checkbox: true,//是否有勾选框,默认false
                                checked: true,//是否勾选该节点，默认false
                                expanded: true,//是否展开该节点
                                selected: false,//是否选中该节点，默认false
                                expandOnClickNode: false,//点击节点时也展开节点，需要expand属性同时为真，默认false
                                children: [
                                    {
                                        title: 'leaf 2-1-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: true,//是否勾选该节点，默认false
                                    },
                                    {
                                        title: 'leaf 2-1-2',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: true,//是否勾选该节点，默认false
                                    }
                                ]
                            },
                            {
                                title: 'parent 2-2',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: true,//是否勾选该节点，默认false
                                children: [
                                    {
                                        title: 'leaf 2-2-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: true,//是否勾选该节点，默认false
                                    },
                                    {
                                        title: 'leaf 2-2-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: true,//是否勾选该节点，默认false
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            onToggleHandle(val){
                console.log('onToggleHandle', val);
            },
            onCheckHandle(val){
                console.log('onCheckHandle', val);
            },
            onSelectHandle(val){
                console.log('onSelectHandle', val);
            },
            /**
             *
             * @param {String} type checked|indeterminated 必須、それに、この二つに限り
             */
            getCheckedNodes(type){
                let that = this;
                if (type === 'checked' || type === 'indeterminated') {
                    let result = that.$refs.demotree.getCheckedNodes(type);
                    console.log(result);
                    that.$set(that.examplesObj, 'resultStr', result);
                } else {
                    throw "传参值仅为'checked'或者'indeterminated'"
                }
            },

            getSelectedNodes(){
                let that = this;
                let result = that.$refs.demotree.getSelectedNodes();
                console.log(result);
                that.$set(that.examplesObj, 'resultStr', result);
            },

            showHideCode(idx){
                let that = this;

                let oldVal = that.examplesObj[idx].bottomShow;
                that.$set(that.examplesObj[idx], 'bottomShow', !oldVal);
            },

            updateTreeData(){
                let that = this;
                let newTreeData = [
                    {
                        title: 'parent 1-new',
                        expanded: true,
                        checkbox: true,//是否有勾选框,默认false
                        checked: false,//是否勾选该节点，默认false
                        selected: false,//是否选中该节点，默认false
                        custormKey: 'ccdf',
                        children: [
                            {
                                title: 'parent 1-1-new',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: false,//是否勾选该节点，默认false
                                custormKey: 'ccdf',
                                children: [
                                    {
                                        title: 'leaf 1-1-1-new',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: false,//是否勾选该节点，默认false
                                        custormKey: 'ccdf',
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: false,//是否勾选该节点，默认false
                                        selected:true,//是否选中该节点，默认false
                                        custormKey: 'ccdf',
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: false,//是否勾选该节点，默认false
                                custormKey: 'ccdf',
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: false,//是否勾选该节点，默认false
                                        custormKey: 'ccdf',
                                        children: [
                                            {
                                                title: 'leaf 1-2-1-1',
                                                checkbox: true,//是否有勾选框,默认false
                                                checked: false,//是否勾选该节点，默认false
                                                custormKey: 'mmccf',
                                            },
                                            {
                                                title: 'leaf 1-2-1-2',
                                                checkbox: true,//是否有勾选框,默认false
                                                checked: false,//是否勾选该节点，默认false
                                                custormKey: 'mmccf',
                                            },
                                            {
                                                title: 'leaf 1-2-1-3',
                                                checkbox: true,//是否有勾选框,默认false
                                                checked: false,//是否勾选该节点，默认false
                                                custormKey: 'mmccf',
                                            }
                                        ]
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: false,//是否勾选该节点，默认false
                                        custormKey: 'ccdf',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'parent 2',
                        expanded: false,
                        checkbox: true,//是否有勾选框,默认false
                        checked: true,//是否勾选该节点，默认false
                        children: [
                            {
                                title: 'parent 2-1',
                                checkbox: true,//是否有勾选框,默认false
                                checked: true,//是否勾选该节点，默认false
                                expanded: true,//是否展开该节点
                                selected: false,//是否选中该节点，默认false
                                expandOnClickNode: false,//点击节点时也展开节点，需要expand属性同时为真，默认false
                                children: [
                                    {
                                        title: 'leaf 2-1-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: true,//是否勾选该节点，默认false
                                    },
                                    {
                                        title: 'leaf 2-1-2',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: true,//是否勾选该节点，默认false
                                    }
                                ]
                            },
                            {
                                title: 'parent 2-2',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: true,//是否勾选该节点，默认false
                                children: [
                                    {
                                        title: 'leaf 2-2-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: true,//是否勾选该节点，默认false
                                    },
                                    {
                                        title: 'leaf 2-2-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: true,//是否勾选该节点，默认false
                                    }
                                ]
                            }
                        ]
                    }
                ];

                that.treeData = newTreeData;
//                that.$refs.demotree.reloadTreeData(newTreeData);
            }
        }
    }
</script>
