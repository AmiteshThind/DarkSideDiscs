<template>
   
            <div>
                <h1 style="text-align:left; margin-top:2rem;margin-bottom:1rem;font-size:3rem"><b>DVD</b></h1>
                 <div class="row" style="justify-content:center;margin:0;padding:0"> 
                     <app-dvds ></app-dvds>
                    
                    </div>
                <h1 style="text-align:left; margin-top:2rem;margin-bottom:1rem;font-size:3rem"><b>BlueRay</b></h1>
                     <div class="row" style="justify-content:center"> 
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
            "app-dvds":DVDs
             
        }

}
</script>

<style>
 
</style>