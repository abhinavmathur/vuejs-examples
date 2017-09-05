<template>
    <div>
        <div class="container">
            <progress-bar :progressWidth="progressWidth"></progress-bar>
        </div>

        <input type="number" v-model.number="input_value">
    </div>
</template>

<script>
    import ProgressBar from './ProgressBar.vue'

    export default {
        data() {
            return {
                progressWidth: 0,
                input_value: ''
            }
        },
        watch: {
            input_value(value){
                if(value === ''){
                    this.$data.progressWidth = 0
                } else {
                    this.$data.progressWidth = value
                }
            }
        },
        components: {
            ProgressBar: ProgressBar
        }
    }

</script>

<style scoped>

</style>