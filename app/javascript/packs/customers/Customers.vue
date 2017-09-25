<template>
    <div class="customers container">
        <h1 class="page-header">Manage Customers</h1>
        <paginate
                :page-count="20"
                :click-handler="handleClick"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'className'">
        </paginate>
    </div>
</template>

<script>

    export default {
        name: 'customers',
        methods: {
            handleClick: function(pageNum){
                console.log(pageNum)
            }
        }
    }

</script>

<style lang="scss">

</style>