/**
 * vip-dialog
 */
import container from '../components/Container.vue';
let dialog = {name:container.name}

dialog.install = function(Vue, options){
    const Dialog = Vue.component(container.name, container), dlg = new Dialog();
    document.body.appendChild(dlg.$mount().$el);

    const mergeParams = (p)=>{
        const params = {};
        params.language = typeof options.language === 'string' ? options.language : 'cn';
        if(typeof options.dialogCloseButton === 'boolean') params.dialogCloseButton = options.dialogCloseButton;
        if(typeof options.dialogMaxButton === 'boolean') params.dialogMaxButton = options.dialogMaxButton;
        return Object.assign({}, params, p);
    };
    const instanceName = '$dialog';

    Vue.prototype[instanceName] = {
            modal: function(component, params = {}){
                if(!component) return;
                params = mergeParams(params);
                params.component = component;
                return dlg.addModal(params);
            },
            close: function(key){
                dlg.close(key);
            },
            closeAll: function(callback){
                dlg.closeAll(callback);
            }
		}
}
export default dialog