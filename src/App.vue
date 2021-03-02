<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>Idee Name</h1>
      <br>
      <h6 class="text-secundary">A word generator for the Future using Vue, Node and GraphQL</h6>
    </div>

    <div id="main">
      <div class="container">
        <!-- 1 row -->
        <div class="row">
          <!-- 1ª columm -->
          <div class="col-md">
             <!--add component of Items and send datas for him-->
            <AppItemList v-bind:items="prefixes"></AppItemList>

            <h5>Prefix <span class="badge badge-info">{{ prefixes.length }}</span></h5>
            <div class="card">
              <div class="card-body">
                <!--List Prefix-->
                <ul class="list-group">
                  <li class="list-group-item" v-for="prefix in prefixes" v-bind:key="prefix">
                     <!--Define prefix title and delete icon-->
                    <div class="row">
                      <div class="col-md">
                        {{ prefix }}
                      </div>
                      <div class="col-md text-right">
                        <button class="btn btn-info" v-on:click="deletePrefix(prefix)">
                          <span class="fa fa-trash"></span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
                <br>
                <!--input form to Prefix-->
                <div class="input-group">
                  <input class="form-control" v-model="prefix" v-on:keyup.enter="addPrefix(prefix)" type="text" placeholder="Add Prefix">
                  <div class="input-group-append">
                    <button class="btn btn-danger" @click="addPrefix(prefix)">
                      <span class="fa fa-plus"></span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
           <!-- 2ª columm -->
          <div class="col-md">
             <!--add component of Items and send datas for him-->
            <AppItemList v-bind:items="sufixes"></AppItemList>

            <h5>Sufix <span class="badge badge-info">{{ sufixes.length }}</span></h5>
            <div class="card">
              <div class="card-body">
                <!--List Sufix-->
                <ul class="list-group">
                  <li class="list-group-item" v-for="sufix in sufixes" v-bind:key="sufix">
                    <!--Define sufix Title and delete icon-->
                    <div class="row">
                      <div class="col-md">
                        {{ sufix }}
                      </div>

                      <div class="col-md text-right">
                        <button class="btn btn-info" v-on:click="deleteSufix(sufix)">
                          <span class="fa fa-trash"></span>
                        </button>
                      </div>

                    </div>
                  </li>
                </ul>
                <br>
                <!--input form to Prefix-->
                <div class="input-group">
                  <input class="form-control" v-model="sufix" v-on:keyup.enter="addSufix(sufix)" type="text" placeholder="Add Sufix">
                  <div class="input-group-append">
                    <button class="btn btn-danger" @click="addSufix(sufix)">
                      <span class="fa fa-plus"></span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
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
import AppItemList from './components/AppItemList.vue';

export default Vue.extend({
  name: 'app',
  components: {
    AppItemList
  },
  data() {
    return {
      prefix: '',
      sufix: '',
      prefixes: ['Air', 'Jet', 'Flight'],
      sufixes: ['Hub', 'Station', 'Mart'],
      
    };
  },
  methods: {

    addPrefix(prefix: any) {
      this.prefixes.push(prefix);
      this.prefix = '';
    },
    deletePrefix(prefix: any) {
      this.prefixes.splice(this.prefixes.indexOf(prefix),1);
    },
    addSufix(sufix: any) {
      this.sufixes.push(sufix);
      this.sufix = '';
    },
    deleteSufix(sufix: any) {
      this.sufixes.splice(this.sufixes.indexOf(sufix),1);
    },
    
  },
  // is ideal to use dynamic interaction and reactive datas, Example: as data input on the screen or updates
  computed: {    
    domains(): any {
      const domains = [];
      for (const prefix of this.prefixes) {
        for (const sufix of this.sufixes) {
          const name = (prefix + sufix);
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
  // created() {

// },
});
</script>

<style scoped>
  #slogan {
    margin: 30px 0 30px 0;
  }
  #main {
    background-color: #f1f1f1;
    padding: 30px 0 30px 0;
  }
</style>