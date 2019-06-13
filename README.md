# VIPDialog

> 可插入组件的自定义对话框 用于LOV等场景
## 发布
npm config set registry=http://registry.npmjs.org
npm adduser
这里需要邮箱验证一下
npm publish
npm login
npm config set registry=https://registry.npm.taobao.org

## 安装

``` bash
$ npm install vip-dialog -S
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
import VIPDialog from 'vip-dialog'
Vue.use(VIPDialog)
```

在项目中用使用 VIPDialog

```js
<script>
  import FndImportView from '@/views/fnd/importView';
  export default {
    methods: {
      showLov(){
        this.$dialog.modal(FndImportView, {
            title: '测试对话框',
            width: 700,
            height: 350,
            params: {
                name: 'saa shang'
            },
            callback: data=>{
            console.log(data)
            }
        });
      }
    }
  }
</script>
```
