<template>
    <div class="container-fluid">

        <div class="row">


            <div class="col-12 p-0 class-rest">

                <NavbarCreate :title="title" :body_message="body_message" />

                <div class="col p-0 mb-3">

                    <div class="py-1 px-3 py-md-3 px-md-5">
                        <main>
                            <form v-on:submit="prueba()" class="form-notes">
                                <CreateTitle v-model="title" />
                                <CreateBody v-model="body_message" />
                            </form>
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

<script lang="ts">
import { defineComponent, ref } from "vue";
import CreateTitle from "../components/createnote/CreateTitle.vue";
import CreateBody from "../components/createnote/CreateBody.vue";
import Footer from "../components/Footer.vue";
import NavbarCreate from "../components/createnote/NavbarCreate.vue";
import { saveNote } from "@/functions/helper";

export default {
    components: {
        NavbarCreate, CreateTitle, Footer, CreateBody
    },

    data() {
        const title = ref("")
        const body_message = ref("")
        return {
            title,
            body_message
        }
    },

    methods : {
        prueba()
        {
            saveNote(this.title, this.body_message);
        }
    }
}
</script>
