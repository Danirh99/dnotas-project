<template>
    <div class="container-fluid">

        <div class="row">


            <div class="col-12 p-0 class-rest">

                <NavbarCreate :title="title" :body_message="body_message" @titleerror="updateTitleError" @bodyerror="updateBodyError" />

                <div class="col p-0 mb-3">

                    <div class="py-1 px-3 py-md-3 px-md-5">
                        <main>
                            <form v-on:submit.prevent="save()" class="form-notes">
                                <CreateTitle v-model="title" :s_error_title="s_error_title" />
                                <CreateBody v-model="body_message" :s_error_body="s_error_body" />
                            </form>
                        </main>
                    </div>
                </div>


            </div>

        </div>

        <div class="row">
            <div class="col-12 p-0 class-footer">
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
            body_message,
            s_error_title: '',
            s_error_body: ''
        }
    },

    methods: {
        save() {
            let a_resp: any = saveNote(this.title, this.body_message);

            // Check if the note has been created correctly
            if (a_resp['b_error']) {
                // Go home with hash to open a popup
                this.$router.push({ path: '/', hash: '#show' })
            }
            else {
                this.s_error_title = a_resp['s_title_message'];
                this.s_error_body = a_resp['s_body_message'];
            }
        },

        updateTitleError(title_error: string) {
            this.s_error_title = title_error;
        },

        updateBodyError(body_error: string) {
            this.s_error_body = body_error;

        }
    }
}
</script>


<style lang="scss">
.class-footer {
    position: fixed;
    bottom: 0;
}

.error-class {
    color: #DC3545;
}
</style>
