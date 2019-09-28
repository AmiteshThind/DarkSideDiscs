<template>
<div>
     
  
    <app-header></app-header>

        <div class="row" style="padding-top:5em;">
            <div class="col-sm"  >
                <h1 style="text-align:center; margin:2rem;font-size:3rem"><b>DVD</b></h1>
                 <div class="row" style="justify-content:center"> 
                    <app-bluerays  :bluerayItems="mockData.DVDs"></app-bluerays>
                    </div>
                <h1 style="text-align:center; margin:2rem;font-size:3rem"><b>BlueRay</b></h1>
                     <div class="row" style="justify-content:center"> 
                    <app-bluerays  :bluerayItems="mockData.bluerays"></app-bluerays>
                    </div>
                </div>
        </div>
</div>
</template>

<script>
    import Header from "./Header";
    import BlueRays from "./BlueRays";
    
    export default {
        props :['mockData'],
        components: {
            "app-header": Header,
            "app-bluerays": BlueRays
             
        }
    }
</script>

<style>
    .body{
        background: #353535;
         
    }
</style>