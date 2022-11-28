<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import FooterView from "./views/FooterView.vue";
import SidebarView from "./views/SidebarView.vue";
import TopbarView from "./views/TopbarView.vue";

</script>

<template>

  <div class="container-fluid">

    <div class="row">

      <div class="col-9 col-md-2 p-0 class-sidebar bgd-dark">

        <SidebarView />

      </div>

      <div class="col-12 col-md-10 p-0 class-rest">

        <TopbarView />


        <div class="col p-0 mb-3">

          <div class="py-1 px-3 py-md-3 px-md-5">
            <RouterView />
          </div>
        </div>


      </div>

    </div>

    <FooterView /> 

  </div>
</template>

<style lang="scss">
@import './assets/scss/main.scss';
</style>