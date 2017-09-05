<template>
    <div>
        <div class="container">
            <h1 class="text-center">Hello World</h1>
            <div class="row">
                <search-bar @results="update_results"></search-bar>
            </div>
            <div class="row">
                <div v-if="search_results.length > 0">
                    <br>
                    <ul class="list-group">
                        <li v-for='result in search_results' class="list-group-item">{{ result.name }}</li>
                    </ul>
                </div>
                <div>
                    <p class="text-muted text-center" v-if="no_results">No search results found</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    import SearchBar from './Search.vue'

    export default {
        data() {
            return {
                search_results: [],
                no_results: false
            }
        },
        components: {
            SearchBar: SearchBar
        },
        methods: {
            update_results(results) {
                this.search_results = results;
                if(this.search_results.length <= 0)
                {
                    this.no_results = true
                } else {
                    this.no_results = false
                }
            }
        }
    }

</script>

<styles>

</styles>