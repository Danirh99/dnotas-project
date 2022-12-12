<template>
    <span v-html="message"></span>
    <!-- Modal -->
    <div ref="modal" class="modal fade" :class="{ show, 'd-block': active }" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Note Saved</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>The note has been saved correctly</p>
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
            show: false,
            message: this.firstMessage()
        }
    },

    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.message = this.firstMessage(toParams['id'])
            }
        )
    },

    mounted() {
        this.hash = this.hash == '#show' ? 'show' : '';

        if (this.hash == 'show') {
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
        },

        closeModal() {
            const body = document.querySelector("body");
            this.active = !this.active;
            body!.classList.remove("modal-open");
            setTimeout(() => (this.show = !this.show), 10);
        },

        firstMessage(noteid: string = '') {
            let html = '';
            if (this.$route.name == 'see-note') {
                if (this.$route.params.id) {
                    let info_notes = JSON.parse(localStorage.getItem("notes")!);
                    let id = '';
                    if (noteid == '') {
                        // Codigiamos la url del titulo
                        id = encodeURI(this.$route.params.id);
                    }
                    else {
                        id = encodeURI(noteid);
                    }

                    info_notes = info_notes[id];

                    if (info_notes != undefined) {
                        html = '<div class="d-flex justify-content-between">'
                        html += '<div class="d-block">'
                        html += "<h1>" + info_notes["title"] + "</h1>";
                        html += "<p>" + info_notes["date"] + "</p>";
                        html += '</div>';
                        html += '<div class="d-flex justify-content-between">'
                        html += '<span class="align-self-center"><a title="Edit" href="/edit-note/'+info_notes["id"]+'"><button class="btn btn-primary btn-blue-dark me-5"><i class="bi bi-pencil-square"></i></button></a></span>';
                        html += '<span class="align-self-center"><button class="btn btn-primary btn-error"><i class="bi bi-trash"></i></button></span>';
                        html += '</div>';
                        html += '</div>';
                        html += "<hr>";
                        html += "<p>" + info_notes["body"] + "</p>";
                    }
                    else
                    {
                        html = "<h1>The note Doesn't exist</h1>";
                    }
                }
                else {
                    html = "<h1>The note Doesn't exist</h1>";
                }
            }
            else {
                html = '<h1>Welcome to dNotes</h1>'
                html += '<p>You can create all the notes that do you need</p>'
            }


            return html
        }
    }
})
</script>