<template>
    <div>
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <img src="../join/images/avatar_placeholder.png" class="img-responsive img-thumbnail" alt="">
                        <br>
                        <div class="text-center">
                            <button class="btn btn-success"
                                    @click="changeText"
                            ><strong ref="input">Select Image</strong></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            changeText(){
                this.$refs.input.value = 'Changed!'
            }
        }
    }

</script>