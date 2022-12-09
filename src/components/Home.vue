<template>
    <h1>aas</h1>
    <!-- Modal -->
    <div ref="modal" class="modal fade" :class="{ show, 'd-block': active }" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
            </div>
        </div>
    </div>
    <div v-if="active" class="modal-backdrop fade show"></div>
</template>

<script lang="ts">
import $ from 'jquery';

// import bootstrap from "bootstrap";
import { defineComponent } from "vue";

export default defineComponent({

    data() {
        return {
            hash: location.hash ? location.hash : '',
            active: false,
            show: false
        }
    },

    mounted() {
        this.hash = this.hash == '#show' ? 'show' : '';

        if (this.hash == 'show') {
            console.log('entra');
            this.openModal()
        }
    },

    methods:
    {
        openModal() {
            const body = document.querySelector("body");
            this.active = !this.active;
            body!.classList.add("modal-open");
            setTimeout(() => (this.show = !this.show), 10);

            // this.active = !this.active;
            // this.active
            //     ? body!.classList.add("modal-open")
            //     : body!.classList.remove("modal-open");
            // setTimeout(() => (this.noactive = !this.noactive), 10);
        },

        closeModal() {
            const body = document.querySelector("body");
            this.active = !this.active;
            body!.classList.remove("modal-open");
            setTimeout(() => (this.show = !this.show), 10);
        }
    }
})
</script>