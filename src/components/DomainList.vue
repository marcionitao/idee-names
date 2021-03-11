<template>
  <div>

    <div id="main">
      <div class="container">
        <!-- 1 row -->
        <div class="row">
          <!-- 1ª columm -->
          <div class="col-md">
            <!--add component of Items and send datas for him then call a event to a next action-->
            <AppItemList title='prefixes' v-bind:items="prefixes" v-on:addItem="addPrefix" v-on:deleteItem="deletePrefix"></AppItemList>
          </div>
           <!-- 2ª columm -->
          <div class="col-md">
            <!--add component of Items and send datas for him then call a event to a next action-->
            <AppItemList title='sufixes' v-bind:items="sufixes" v-on:addItem="addSufix" v-on:deleteItem="deleteSufix"></AppItemList>
          </div>

        </div>
        <br>

        <h5>Domains <span class="badge badge-info">{{ domains.length }}</span></h5>
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item" v-for="domain in domains" v-bind:key="domain.name">
                <!--add button to save domain-->
                <div class="row">
                  <div class="col-md">
                    {{ domain.name }}
                  </div>
                </div>
                <div class="col-md text-right">
                  <a class="btn btn-warning" v-bind:href="domain.checkout" target="_blank">
                    <span class="fa fa-shopping-cart"></span>
                  </a>
                </div>

              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import AppItemList from './AppItemList.vue';
import axios from 'axios';

export default Vue.extend({
  name: 'app',
  components: {
    AppItemList
  },
  data() {
    return {
      prefixes: [] as any,
      sufixes: [] as any,     
    };
  },
  methods: {

    addPrefix(prefix: any) {
    // this.prefixes.push(prefix);
      // comunicando com graphql
      axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: {
          query: `
            mutation ($item: ItemInput) {
              newPrefix: saveItem(item: $item) {
                id
                type
                description
              }
            }
          `,
          variables: {
            item: {
              type: 'prefix',
              description: prefix
            }
          }
        }
      }).then(response => {
        //refreshing List
        const query = response.data;
        const newPrefix = query.data.newPrefix;
        this.prefixes.push(newPrefix.description);
      });

    },
    deletePrefix(prefix: any) {
      axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: {
          query: `
            mutation ($id: Int) {
              deleted: deleteItem(id: $id)
            }
          `,
          variables: {
            id: prefix.id
          }
        }
      }).then(() => {
        this.getPrefixes();
      });
    },
    addSufix(sufix: any) {
      this.sufixes.push(sufix);
    },
    deleteSufix(sufix: any) {
      this.sufixes.splice(this.sufixes.indexOf(sufix as any),1);
    },
    getPrefixes() {
      axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: {
          query: `
            {
              prefixes: items (type: "prefix") {
                id
                type
                description
              }
            }
          `
        }
      }).then(response => {
        const query =  response.data;
        // eslint-disable-next-line no-console
        console.log(query.data);
        this.prefixes = query.data.prefixes;

      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    },
    getSufixes() {
      axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: {
          query: `
            {
              sufixes: items (type: "sufix") {
                description
              }
            }
          `
        }
      }).then(response => {
        const query =  response.data;
        // eslint-disable-next-line no-console
        console.log(query.data);
        this.sufixes = query.data.sufixes;
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    }
    
  },
  // is ideal to use dynamic interaction and reactive datas, Example: as data input on the screen or updates
  computed: {    
    domains(): any {
      const domains = [];
      for (const prefix of this.prefixes) {
        for (const sufix of this.sufixes) {
          const name = (prefix.description + sufix.description);
          // all letters of the same size
          const url = name.toLowerCase();
          const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${url}&tld=.com.br`;
          //create a Object
          domains.push({
            name,
            checkout
          });
        }      
      }
      return domains;
    }
  },
  // 'created' is run after of 'data()', 'methods()'... is ideal to get datas from backend or using APIs
  created() {
    this.getPrefixes();
    this.getSufixes();
  },
});
</script>

<style scoped>

</style>