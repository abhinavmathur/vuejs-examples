<template>
    <div>
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <create-ticket-button
                        v-show="showTicketButton">
                </create-ticket-button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-4">

            </div>
        </div>
    </div>

</template>

<script>
    import CreateTicketButton from './create_ticket_button.vue'
    export default {
        data: function(){
            return {
                text: '',
                showTicketButton: true
            }
        },
        methods: {
            format(value) {
                return value.toLowerCase();
            }
        },
        components: {
            CreateTicketButton: CreateTicketButton
        },
        computed: {
            checkLength() {
                this.text.length < 3 ? 'failure' : 'success'
            }
        }
    }
</script>