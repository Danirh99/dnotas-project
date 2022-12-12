<template>
    <div>
        <input class="form-control me-2 title-note" type="text" v-model="inputTitle"
            @input="$emit('update:modelValue', $event.target.value)" placeholder="Title of the note">
        <p class="error-class">{{ s_error_title }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

    props: ['s_error_title', 'title'],

    data() {
        const inputTitle = this.title
        return {
            inputTitle
        }
    },
})
</script>
