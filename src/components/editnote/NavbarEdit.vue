<template>

    <nav class="navbar navbar-expand-lg topbar py-4 navbar-dark bgd-dark ">
        <div class="container-fluid">
            <div>
                <a href="/"
                    class="d-flex align-items-center py-3 my-0 me-md-auto text-white text-decoration-none m-auto">
                    <img src="../../assets/logo.svg" class="w-50 m-auto" alt="dNotes">
                </a>
            </div>
            <div class="d-flex">
                <button class="btn btn-primary btn-blue-light me-4" v-on:click="save()"><b>Update</b></button>
                <a href="/"><button class="btn btn-primary btn-error"><b>Cancel</b></button></a>
            </div>

        </div>
    </nav>

</template>


<script lang="ts">
import { defineComponent } from "vue";
import { editNote } from "@/functions/helper";

export default defineComponent({
    props: ["title", "body_message", "id"],

    methods: {
        save() {
            let a_resp: any = editNote(this.title, this.body_message, this.id);

            // Check if the note has been created correctly
            if (a_resp['b_error']) {
                // Go home with hash to open a popup
                this.$router.push({ path: '/see-note/'+this.id, hash: '#updated' })
            }
            else {
                this.$emit('titleerror', a_resp['s_title_message'])
                this.$emit('bodyerror', a_resp['s_body_message'])
            }

        }
    }
})
</script>

<style lang="scss">
@media (min-width: 720px) {
    .navbar .container-fluid {
        justify-content: space-between;
    }
}

@media (max-width: 719px) {
    .navbar .container-fluid {
        justify-content: center;
    }
}
</style>