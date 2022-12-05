<template>
    <aside>
        <div class="col-auto px-sm-2 px-0 p-0 navbar-left bgd-dark">
            <div class="d-flex flex-column align-items-end align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <button class="btn btn-primary d-md-none" type="button"><i class="bi bi-plus"></i></button>
                <a href="/"
                    class="d-flex align-items-center py-3 my-0 me-md-auto text-white text-decoration-none m-auto">
                    <img src="../assets/logo.svg" class="w-50 m-auto" alt="dNotes">
                </a>
                <hr>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
                    id="menu" v-if="notes != ''">
                    <li :key="data.id" v-for="data in notes" class="nav-item w-100 text-center mt-4"
                        :data-route="data['id']">
                        <RouterLink :to="{ path: '/see-note/' + data['id'] }">
                            <div class="enlace justify-content-between d-flex py-3"
                                :class="data['nameroute'] == routename ? 'active' : ''">
                                <div class="d-block text-start">
                                    <p class="title mb-0">{{ data['title'] }}</p>
                                    <p class="date mb-0">{{ data['date'] }}</p>
                                </div>
                                <span class="align-self-center"><button class="btn btn-primary btn-blue-light"><i
                                            class="bi bi-eye"></i></button></span>
                            </div>
                            <hr>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({

    data() {
        const notes = this.obtainNotes()
        return {
            notes,
            routename: this.$route.name
        }
    },

    methods: {
        obtainNotes() {
            let notes = JSON.parse(localStorage.getItem("notes")!)

            if (notes == null) {
                notes = ''
            }

            return notes
        }
    }
})

</script>