<template>
    <input class="form-control me-2 title-note" type="text" v-model="input"
        @input="$emit('update:modelValue', $event.target.value)" placeholder="Title of the note">
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({

    data() {
        const input = ref("")
        return {
            input
        }
    },
})
</script>
