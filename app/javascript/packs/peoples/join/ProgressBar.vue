<template>
    <div>
        <div class="progress">
            <div class="progress-bar"
                 :class="{'progress-bar-primary': progressWidth >= 0 && progressWidth <= 50, 'progress-bar-success': progressWidth >= 50 && progressWidth <= 100}"
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
        props: ['progressWidth']

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