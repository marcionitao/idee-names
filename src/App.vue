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
                        <button class="btn btn-info" v-on:click="deletePrefix(prefix)"><span class="fa fa-trash"></span></button>
                      </div>
                    </div>
                  </li>
                </ul>
                <br>
                <!--input form to Prefix-->
                <div class="input-group">
                  <input class="form-control" v-model="prefix" v-on:keyup.enter="addPrefix(prefix)" type="text" placeholder="Add Prefix">
                  <div class="input-group-append">
                    <button class="btn btn-info" @click="addPrefix(prefix)"><span class="fa fa-plus"></span></button>
                  </div>
                </div>

              </div>
            </div>
          </div>
           <!-- 2ª columm -->
          <div class="col-md">
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
                        <button class="btn btn-info" v-on:click="deleteSufix(sufix)"><span class="fa fa-trash"></span></button>
                      </div>
                    </div>
                  </li>
                </ul>
                <br>
                <!--input form to Prefix-->
                <div class="input-group">
                  <input class="form-control" v-model="sufix" v-on:keyup.enter="addSufix(sufix)" type="text" placeholder="Add Sufix">
                  <div class="input-group-append">
                    <button class="btn btn-info" @click="addSufix(sufix)"><span class="fa fa-plus"></span></button>
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
              <li class="list-group-item" v-for="domain in domains" v-bind:key="domain">
                {{ domain }}
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

export default Vue.extend({
  name: 'app',
  data() {
    return {
      prefix: '',
      sufix: '',
      prefixes: ['Air', 'Jet', 'Flight'],
      sufixes: ['Hub', 'Station', 'Mart'],
      domains: ['AirHub', 'AirStation', 'AirMart', 'JetHub', 'JetStation', 'JetMart', 'FlightHub', 'FlightStation', 'FlightMart'],
    };
  },
  methods: {
    addPrefix(prefix: any) {
      this.prefixes.push(prefix);
      this.prefix = '';
      this.generate();
    },
    deletePrefix(prefix: any) {
      this.prefixes.splice(this.prefixes.indexOf(prefix),1);
      this.generate();
    },
    addSufix(sufix: any) {
      this.sufixes.push(sufix);
      this.sufix = '';
      this.generate();
    },
    deleteSufix(sufix: any) {
      this.sufixes.splice(this.sufixes.indexOf(sufix),1);
      this.generate();
    },
    generate() {
      this.domains = [];
      for (const prefix of this.prefixes) {
        for (const sufix of this.sufixes) {
          this.domains.push(prefix+sufix); 
        }      
      }
    }
  },
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