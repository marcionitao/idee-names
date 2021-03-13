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
<script lang="ts" src="./DomainList.ts"></script>