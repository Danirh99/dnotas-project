<template>
    <span v-html="message"></span>
    <!-- Modal -->
    <div ref="modal" class="modal fade" :class="{ show, 'd-block': active }" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ title_popup }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>{{ body_popup }}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-if="active" class="modal-backdrop fade show"></div>
</template>

<script lang="ts">

// import bootstrap from "bootstrap";
import { defineComponent } from "vue";
import $ from 'jquery';

export default defineComponent({

    data() {
        return {
            hash: location.hash ? location.hash : '',
            active: false,
            show: false,
            title_popup: '',
            body_popup: '',
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

        switch (this.hash) {
            case ('#show'):
                this.hash = 'show'
                this.title_popup = 'Note Saved';
                this.body_popup = 'The note has been saved correctly';
                this.openModal()
                break;
            case ('#updated'):
                this.hash = 'show'
                this.title_popup = 'Note Updated';
                this.body_popup = 'The note has been updated correctly';
                this.openModal()
                break;
            case ('#delete'):
                this.hash = 'show'
                this.title_popup = 'Note deleted';
                this.body_popup = 'The note has been deleted correctly';
                this.openModal()
                break;
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
                        html += '<span class="align-self-center"><a title="Edit" href="/edit-note/' + info_notes["id"] + '"><button class="btn btn-primary btn-blue-dark me-5"><i class="bi bi-pencil-square"></i></button></a></span>';
                        html += '<span class="align-self-center"><button class="btn btn-primary btn-error" id="delete" data-note="' + info_notes["id"] + '"><i class="bi bi-trash"></i></button></span>';
                        html += '</div>';
                        html += '</div>';
                        html += "<hr>";
                        html += "<p>" + info_notes["body"] + "</p>";

                        this.$nextTick(() => {
                            $('#delete').on('click', function () {
                                let noteid = $('#delete').data('note');
                                let info_notes = JSON.parse(localStorage.getItem("notes")!);
                                if(info_notes[noteid]['id'].length > 0)
                                {
                                    console.log('entra')
                                    delete info_notes[noteid];
                                    localStorage.setItem("notes", JSON.stringify(info_notes));
                                    window.location.href = "/#delete"
                                }

                            })
                        });
                    }
                    else {
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