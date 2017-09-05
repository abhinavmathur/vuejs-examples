<template>
    <div>
        <div class="progress">
            <div class="progress-bar bg-success"
                 role="progressbar"
                 style="width: 25%"
                 :style="{ width: progressWidth + '%'}"
                 aria-valuenow="25"
                 aria-valuemin="0"
                 aria-valuemax="100"></div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['progressWidth']
    }
</script>

<style>

</style>