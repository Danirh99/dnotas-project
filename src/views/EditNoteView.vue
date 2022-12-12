<template>
    <div class="container-fluid">

        <div class="row">


            <div class="col-12 p-0 class-rest">

                <NavbarEdit :title="title" :body_message="body_message" :id="id" @titleerror="updateTitleError"
                    @bodyerror="updateBodyError" />

                <div class="col p-0 mb-3">

                    <div class="py-1 px-3 py-md-3 px-md-5">
                        <main>
                            <form v-on:submit.prevent="save()" class="form-notes">
                                <EditTitle v-model="title" :s_error_title="s_error_title" :title="title" />
                                <EditBody v-model="body_message" :s_error_body="s_error_body" :body="body_message" />
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
import EditTitle from "../components/editnote/EditTitle.vue";
import EditBody from "../components/editnote/EditBody.vue";
import Footer from "../components/Footer.vue";
import NavbarEdit from "../components/editnote/NavbarEdit.vue";
import { editNote } from "@/functions/helper";

export default {
    components: {
        NavbarEdit, EditTitle, Footer, EditBody
    },

    data() {
        const data = this.getNoteFromLS()
        return {
            id: data[2],
            title: data[0],
            body_message: data[1],
            s_error_title: '',
            s_error_body: ''
        }
    },

    methods: {

        getNoteFromLS(): any {
            let info_notes = JSON.parse(localStorage.getItem("notes")!);
            let id = encodeURI(this.$route.params.id);

            let a_data : any[] = [];

            info_notes = info_notes[id];
            if (info_notes != undefined) {
                a_data[0] = info_notes['title'];
                a_data[1] = info_notes['body'];
                a_data[2] = info_notes['id'];
            }


            return a_data;


        },

        save() {
            let a_resp: any = editNote(this.title, this.body_message, this.id);

            // Check if the note has been created correctly
            if (a_resp['b_error']) {
                // Go home with hash to open a popup
                this.$router.push({ path: '/see-note/'+this.id, hash: '#updated' })
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
