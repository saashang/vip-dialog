<template>
    <div style="padding-bottom: 25px">

        <header>
            <a href="?lang=en" class="lang-btn">English</a>
            <a href="?lang=zh" class="lang-btn">中文</a>

            <div class="header-cont centered">
                <h1 class="title">VIP Dialog Plugin</h1>
                <p class="description">A lightweight, promise based alert, prompt and confirm dialog</p>
            </div>
        </header>

        <div class="container">
          <button @click="open">测试对话框</button>
        </div>

    </div>
</template>

<script>
  import TestView from './custom-component.vue'

  export default {
    data () {
      return {
      }
    },
    mounted () {
      console.log('mounted app')

    },
    methods: {
        open(){
            this.$dialog.modal(TestView, {
                title: '测试对话框',
                width: 350,
                height: 350,
                //send params to inner component
                params: {
                    name: 'saa shang'
                },
                //modal dialog close callback
                //data: inner component call 'this.$emit.('close', data)'
                //to close modal and return data
                callback: data=>{
                    //alert selected result
                    console.log(data)
                }
            });
        }
    }
  }
</script>

<style lang="scss">
    @import "../scss/app";

    .vue-notification {
        padding: 10px;
        margin: 15px;

        font-size: 18px;
        font-family: "Noto Sans", sans-serif;

        color: #ffffff;
        background: #44A4FC;
        border-left: 5px solid #187FE7;
    }
</style>