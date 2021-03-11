<!--It runs within of DomainList-->
<template>
  <div>
    
    <h5>{{ title }} <span class="badge badge-info">{{ items.length }}</span></h5>
    <div class="card">
      <div class="card-body">
        <!--List Item-->
        <ul class="list-group">
          <li class="list-group-item" v-for="item in items" v-bind:key="item.id">
              <!--Define Item title and delete icon-->
            <div class="row">
              <div class="col-md">
                {{ item.description }}
              </div>
              <div class="col-md text-right">
                <button class="btn btn-info" v-on:click="deleteItem(item)">
                  <span class="fa fa-trash"></span>
                </button>
              </div>
            </div>
          </li>
        </ul>
        <br>
        <!--input form to Item-->
        <div class="input-group">
          <input class="form-control" v-model="item" v-on:keyup.enter="addItem(item)" type="text" placeholder="Add Item">
          <div class="input-group-append">
            <button class="btn btn-danger" @click="addItem(item)">
              <span class="fa fa-plus"></span>
            </button>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts">

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
</script>

<style scoped>

</style>
