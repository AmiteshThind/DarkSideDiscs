<template>
    <div class="row center-text">
        <div class="col-sm-4" v-for="item in dvds" :key="item.title">
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
        dvds() {
            return this.$store.state.products.DVDs;
        }
    }
}
</script>

<style>
.center-text{
    text-align: center;
}
 </style>