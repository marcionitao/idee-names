<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>Idee Name</h1>
      <br>
      <h6 class="text-secundary">A word generator for the Future using Vue, Node and GraphQL</h6>
    </div>

    <div id="main">
      <!--Call DomainList Component-->
      <DomainList></DomainList>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import DomainList from './components/DomainList.vue';

export default Vue.extend({
  name: 'app',
  components: {
    DomainList
  }
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