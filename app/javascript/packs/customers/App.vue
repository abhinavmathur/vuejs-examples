<template>
    <div>
        <stepper></stepper>
        <router-view></router-view>
    </div>
</template>

<script>
    import Stepper from './Stepper.vue'

    export default {
        components: {
            Stepper: Stepper
        }
    }

</script>

<style lang="sass">

</style>