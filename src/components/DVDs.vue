<template>
   
       
         <div  class="row" style= "text-align:center;">
             <div class="col-sm-4"  v-for="item in dvds" :key="item.title">
              <app-Item  :item = "item" ></app-Item>
             </div>
          </div>
    
 
</template>

<script>

import Item from "../components/Item"
export default {

    
    components: {
        "app-Item":Item
    },
    computed:{
        dvds(){
            return this.$store.state.products.DVDs;
    }
    }
    

}
</script>

<style>


 </style>