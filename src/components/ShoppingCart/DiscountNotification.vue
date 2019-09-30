<template>
    <div>
        <transition name="fade">
            <div v-if="this.$store.state.products.uniqueDVDsCount ==2">
                <b-button class="mb-2 mt-2 btn btn-discount"><b>Buy One More DVD to get a Discount</b></b-button>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="this.$store.state.products.uniqueBluRaysCount ==2">
                <b-button class="mb-2 mt-2 btn btn-discount">Buy One More BluRay to get a Discount</b-button>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
 
}
</script>

<style>
.btn-discount {
    background: rgb(36, 34, 34);

    color: rgb(218, 218, 218);
    border: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}



.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}
</style>