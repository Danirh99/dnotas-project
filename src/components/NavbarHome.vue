<template>

    <nav class="navbar navbar-expand-lg topbar py-4 navbar-light bgd-dark ">
        <div class="container-fluid justify-content-between">
            <button class="navbar-toggler" type="button" v-on:click="openSidebar()">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-none d-md-block">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Buscar"
                        aria-label="Buscar">
                    <button class="btn btn-primary btn-blue-light" type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
            <a href="/create-note"><button class="btn btn-primary btn-blue-light"><b>New Note</b></button></a>
        </div>
    </nav>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import $ from "jquery";
export default defineComponent({
    name: "NavbarHome",

    data() {
        return {
            busqueda: ''
        }
    },

    methods: {
        /**
         * Función que va la ruta del filtro si coincide
         * @param busqueda Valor del input de búsqueda
         */
        buscar(busqueda: string) {
            if (busqueda.length > 0) {
                busqueda = busqueda.toLocaleLowerCase().trim()
                let s_ruta: string = filtro(busqueda, this.urls);
                if (s_ruta.length > 0) {
                    this.busqueda = '';
                    this.$router.push(s_ruta)
                }
            }

        },

        /**
         * Funcion que muestra el sidebar lateral
         */
        openSidebar() {
            $('.class-sidebar').addClass('activos')
            // $('.class-sidebar').css({
            //     height: '100vh',
            // });
            $('.class-rest').animate({ opacity: 0.2 }, 50)
            $('.class-rest').css('pointer-events', 'none')
        },
    }
});

/**
 * Función para ir a la busqueda introducida
 * @param busqueda Valor del input
 * @param urls Ulrs disponibles para buscar
 */
function filtro(busqueda: string, urls: []): string {
    let alias: string;
    let b_encontrado: boolean = false;
    let s_route: string = "";

    urls.forEach(element => {
        alias = element['alias']
        if (alias.includes(busqueda) && !b_encontrado) {
            b_encontrado = true;
            s_route = element['url'] + "/" + element['id'];
        }
    });

    return s_route;
}


</script>

<style lang="scss">
@import '../assets/scss/main.scss';

.form-control {
    background-color: $color-blue-dark;
    border-top: 0;
    border-radius: 0;
    border-right: 0;
    border-left: 0;
    width: 100% !important;
    border-color: $color-blue-light;
    color: $color-white;

    &:focus {
        background-color: $color-blue-dark;
        border-color: none;
        box-shadow: initial;
        color: $color-white;
    }

    &:hover {
        background-color: $color-blue-dark;
    }
}

</style>