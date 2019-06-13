<template>
    <div>
        <div dialog="v-dialog" tabindex="-1" :class="classes" :style="[{'z-index':dialogZIndex}]">

            <div :class="['v-dialog-dialog', {'v-dialog-default-animated': animate}]"
                 :style="{width:width+'px',height:height+'px',top:dialogTop+'px'}">
                <transition name="v-dialog--smooth" :appear="true" >
                    <div :class="['v-dialog-content']" v-show="show" >

                        <div class="v-dialog-header" ref="header" v-if="titleBar !== false">
                            <button type="button" aria-label="Close" class="el-dialog__headerbtn" v-if="dialogCloseButton" @click="closeDialog(true)">
                                <i class="el-dialog__close el-icon el-icon-close"></i>
                            </button>
                            <button type="button" class="el-dialog__headerbtn el-dialog__maxmin" v-if="dialogMaxButton" @click="max" >
                                <i :class="['el-dialog__close', maximize?'el-icon el-icon-zoom-out': 'el-icon el-icon-zoom-in']"></i>
                            </button>
                            <h3>{{ titleBar }}</h3>
                        </div>

                        <div class="el-dialog__body" :style="{height:bodyHeight+'px'}" >
                            <component :is="component" v-bind="params" @close="modalClose"></component>
                        </div>

                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<style>
.el-dialog__headerbtn{
    top: 0px !important;
    right: 0px !important
}
.el-dialog__maxmin{
    top: 0px !important;
    right: 40px !important
}
</style>

<script>
    import mixins from '../js/mixins';
    export default {
        name: "DialogModal",
        mixins: [mixins],
        props: {
            component: Object,
            /**
             * Send parameters to Component
             * you need use props to receive this params in component
             */
            params: Object,
            /**
             * Full screen dialog
             * @type boolean
             */
            fullWidth: {
                type: Boolean,
                default: false
            },
            dialogMaxButton: {
                type: Boolean,
                default: true
            },
            dialogCloseButton: {
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                default: 'Dialog'
            }
        },
        data(){
            return {
                maximize: false,
                animate: false
            };
        },
        computed: {
            classes(){
                return {
                    'v-dialog': true,
                    'v-dialog-modal': true,
                    'v-dialog--maximize': this.maximize,
                    'v-dialog--buzz-out': this.shake
                };
            }
        },
        methods: {
            /**
             * dialog max size
             */
            max(){
                if(!this.animate) this.animate = true;
                this.maximize = !this.maximize;
                this.modalAdjust();
            },
            modalAdjust(){
                if(this.maximize) this.dialogTop = 0;
                else this.adjust();
            },
            modalClose(data){
                this.closeDialog(false, data);
            }
        },
        mounted(){
            this.$nextTick(()=>{
                if(this.titleBar){
                    const headerHeight = this.$refs.header.offsetHeight;//this.$refs.header.getBoundingClientRect().height;
                    this.bodyHeight = this.height - headerHeight;
                }else this.bodyHeight = this.height;

                this.modalAdjust();
            });
        }
    }
</script>