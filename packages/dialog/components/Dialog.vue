<template>
    <dlg-modal v-bind="$attrs" v-on="$listeners"></dlg-modal>
</template>

<script>
import '../styles/dialog.scss';
import modal from './Modal.vue';
export default {
  components: {
    'dlg-modal': modal
  },
  props: {
    /**
     * Dialog type
     * @type string
     * @enum 'modal' Modal dialog
     */
    type: {
      type: String,
      default: 'modal',
      required: true
    }
  }
};
</script>
