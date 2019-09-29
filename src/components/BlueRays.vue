<template>
   
       
         <div  class="row" style= "text-align:center; justify-content:center  ">
              <app-Item  :item = "item" v-for="item in bluerays" :key="item.title"></app-Item>
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