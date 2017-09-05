<template>
    <div>
        <div class="col-md-9">
            <input type="text"
                   placeholder="Enter name of the person"
                   class="form-control"
                   v-model="search_input"
            >
        </div>
        <div class="col-md-3">
            <button class="btn btn-success"
                    @click="get_results"
                    :disabled="search_input.length < 3"
            >Search</button>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                search_input: ''
            }
        },
        methods: {
            get_results(){
                var vm = this;
                this.axios.post('/peoples/search',{
                    name: this.search_input
                }).then(function(response){
                    vm.$emit('results', response.data)
                }).catch(function(error){
                    console.log(error)
                })
            }
        }
    }

</script>