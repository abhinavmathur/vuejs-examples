<template>
    <div>
        <div class="container">
            <progress-bar :progressWidth="progressWidth"></progress-bar>
        </div>
        <UploadImage></UploadImage>
    </div>
</template>

<script>
    import ProgressBar from './ProgressBar.vue'
    import UploadImage from './UploadImage.vue'

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
            ProgressBar: ProgressBar,
            UploadImage: UploadImage
        }
    }

</script>

<style scoped>

</style>