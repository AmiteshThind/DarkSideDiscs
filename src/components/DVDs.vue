<template>
   
       
         <div  class="row" style= "text-align:center; justify-content:center  ">
              <app-Item  :item = "item" v-for="item in dvds" :key="item.title"></app-Item>
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