<template>
    <div>
        <input class="form-control me-2 mt-2 mt-md-0 title-note" type="text" v-model="input"
            @input="$emit('update:modelValue', $event.target.value)" placeholder="Title of the note">
        <p class="error-class">{{ s_error_title }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({

    props: ['s_error_title'],

    data() {
        const input = ref("")
        return {
            input
        }
    },
})
</script>
