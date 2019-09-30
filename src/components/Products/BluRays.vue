<template>
    <div class="row center-text">
        <div class="col-sm-4" v-for="item in blurays" :key="item.title">
            <app-Item :item="item"></app-Item>
        </div>
    </div>
</template>

<script>
    import Item from "./Item";

    export default {
        components: {
            "app-Item": Item
        },
        computed: {
            blurays() {
                return this.$store.state.products.blurays;
            }
        }
    }
</script>

<style>
    .center-text{
        text-align: center;
    }
    body {
        overflow-y: auto;
    }
</style>