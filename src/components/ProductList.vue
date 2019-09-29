<template>
   
            <div>
                <h1 style="text-align:left;color:#000; margin-top:2rem;margin-bottom:1rem;font-size:2rem;margin-left:1rem;"><b>DVD</b></h1>
                 <div class="row" style="margin:0;padding:0"> 
                     <app-dvds ></app-dvds>
                    
                    </div>
                <h1 style="text-align:left; color:#000;margin-bottom:1rem;font-size:2rem;margin-left:1rem"><b>BluRay</b></h1>
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
            "app-dvds":DVDs
             
        }

}
</script>

<style>
 
</style>