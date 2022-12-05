<script setup lang="ts">
import Home from "../components/Home.vue";
import Footer from "../components/Footer.vue";
import NavbarHome from "../components/NavbarHome.vue";
import Sidebar from "../components/Sidebar.vue";


</script>

<template>
  <div class="container-fluid">

    <div class="row">

      <div class="col-9 col-md-2 p-0 class-sidebar bgd-dark">

        <Sidebar />

      </div>

      <div class="col-12 col-md-10 p-0 class-rest">

        <NavbarHome />


        <div class="col p-0 mb-3">

          <div class="py-1 px-3 py-md-3 px-md-5">
            <main>
              <Home />
            </main>
          </div>
        </div>


      </div>

    </div>

    <div class="row">
      <div class="col-12 p-0">
        <Footer />
      </div>
    </div>

  </div>


</template>
