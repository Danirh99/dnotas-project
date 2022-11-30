<template>

    <nav class="navbar navbar-expand-lg topbar py-4 navbar-dark bgd-dark ">
        <div class="container-fluid justify-content-between">
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div>
                <a href="/"
                    class="d-flex align-items-center py-3 my-0 me-md-auto text-white text-decoration-none m-auto">
                    <img src="../../assets/logo.svg" class="w-50 m-auto" alt="dNotes">
                </a>
            </div>
            <div class="d-flex">
                <button class="btn btn-primary btn-blue-light me-4" v-on:click="save()"><b>Save</b></button>
                <a href="/"><button class="btn btn-primary btn-error"><b>Cancel</b></button></a>
            </div>

        </div>
    </nav>

</template>


<script lang="ts">
import { defineComponent } from "vue";
import { saveNote } from "@/functions/helper";

export default defineComponent({
    props: ["title", "body_message"],
 
    methods: {
        save(){
            saveNote(this.title, this.body_message);
            console.log('pulsado')
        }
    }
})
</script>
