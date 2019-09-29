<template>
   
       
         <div  class="row" style= "text-align:center;   ">
             <div class="col-sm-4" v-for="item in bluerays" :key="item.title">
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
    computed:{ bluerays(){
        return this.$store.state.products.bluerays;
    }

    }
    

}
</script>

<style>
body{
 overflow-y: auto;
}


 </style>