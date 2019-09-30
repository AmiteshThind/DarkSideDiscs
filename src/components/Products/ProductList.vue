<template>

    <div>
        <h1 class="dvd-title">
            <b>DVD</b></h1>
        <div class="row remove-margin-padding">
            <app-dvds></app-dvds>
        </div>
        <h1 class="blueray-title"><b>BluRay</b></h1>
        <div class="row">
            <app-bluerays></app-bluerays>
        </div>
    </div>

</template>

<script>

import BlueRays from "./BlueRays";
import DVDs from "./DVDs";

export default {
    components: {

        "app-bluerays": BlueRays,
        "app-dvds": DVDs

    }
}

</script>

<style >

.remove-margin-padding{
    margin:0;
    padding:0
}

.dvd-title {
    text-align: left;
    color: #000;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    margin-left: 1rem;
}

.blueray-title {
    text-align: left;
    color: #000;
    margin-bottom: 1rem;
    font-size: 2rem;
    margin-left: 1rem
}
 
</style>