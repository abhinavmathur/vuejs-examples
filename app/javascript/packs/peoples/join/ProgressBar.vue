<template>
    <div>
        <div class="progress">
            <div class="progress-bar"
                 :class="classObject"
                 role="progressbar"
                 :style="{ width: progressWidth + '%'}"
                 :aria-valuenow="progressWidth"
                 aria-valuemin="0"
                 aria-valuemax="100">
                {{ progressWidth }}% complete
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['progressWidth'],
        computed: {
            classObject(){
                return {
                    'progress-bar-primary': this.progressWidth >= 0 && this.progressWidth <= 50,
                    'progress-bar-success': this.progressWidth >= 50 && this.progressWidth <= 100
                }
            }
        }

    }
</script>

<style>
    .bg-danger {
        color: red;
    }
    .bg-warning {
        color: yellow;
    }
</style>