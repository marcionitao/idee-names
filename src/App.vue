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
                    {{ prefix }}
                  </li>
                </ul>
                <br>
                <!--input form to Prefix-->
                <div class="input-group">
                  <input class="form-control" type="text" placeholder="Add Prefix">
                  <div class="input-group-append">
                    <button class="btn btn-info" @click="addPrefix()"><span class="fa fa-plus"></span></button>
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
                    {{ sufix }}
                  </li>
                </ul>
                <br>
                <!--input form to Prefix-->
                <div class="input-group">
                  <input class="form-control" type="text" placeholder="Add Sufix">
                  <div class="input-group-append">
                    <button class="btn btn-info" @click="addSufix()"><span class="fa fa-plus"></span></button>
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
      prefixes: ['Air', 'Jet', 'Flight'],
      sufixes: ['Hub', 'Station', 'Mart'],
      domains: ['AirHub', 'AirStation', 'AirMart', 'JetHub', 'JetStation', 'JetMart', 'FlightHub', 'FlightStation', 'FlightMart'],
    };
  },
  methods: {
    addPrefix(prefix: string) {
      this.prefixes.push(prefix);
    },
    addSufix(sufix: string) {
      this.prefixes.push(sufix);
    },
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