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

          <div class="py-1 px-3 py-md-3 px-md-5 m-3 m-md-0">
            <main>
              <Home />
            </main>
          </div>
        </div>


      </div>

    </div>

    <div class="row">
      <div class="col-12 p-0 class-footer ">
        <Footer />
      </div>
    </div>

  </div>


</template>


<style lang="scss">

.class-footer {
    position: fixed;
    bottom: 0;
}

@media (max-width: 720px) {
  .class-sidebar {
    transition: opacity 0.2s linear;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }

  .height-0{
    height: 0;
  }

  .activos {
      opacity: 1;
      height: auto;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }

}

</style>

