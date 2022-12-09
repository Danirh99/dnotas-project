<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 ps-0">
                <textarea class="form-control mt-2" v-model="input"
                    @input="$emit('update:modelValue', $event.target.value)" id="bodymessage" rows="6"
                    placeholder="Note" v-on:keyup="seeResult()"></textarea>
            </div>
            <div class="col-12 col-md-6 pe-0">
                <textarea class="form-control mt-2 response" v-model="text_response" rows="6" disabled></textarea>
            </div>
        </div>
        <p class="error-class">{{s_error_body}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({

    props: ['s_error_body'],

    data() {
        const input = ref("")
        return {
            input,
            text_response: '',
        }
    },

    methods: {
        seeResult() {
            this.text_response = this.input;
        }
    }
})
</script>

<style lang="scss">
textarea {
    z-index: 100;
    max-height: 500px;
}
</style>
