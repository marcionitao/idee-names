import Vue from 'vue';
export default Vue.extend({

  name: 'AppItemList',
  //Props allow you to pass a value (state) from one component (parent) to another (child).
  props: ['title','items'],
  data() {
    return {
      item: '',
    };
  },
  methods: {
    // 'addItem' mirror 'addPrefix' and 'addSufix'
    addItem(item: string) {
      // trigged a event to a next action
      this.$emit('addItem', item);
      // to clean
      this.item = '';
    },
    deleteItem(item:any): void {
      this.$emit('deleteItem', item);
    }
  }
});
