<template>
   
       
         <div  class="row" style= "text-align:center; justify-content:center  ">
             
              <app-Item  :item = "item" v-for="item in bluerayItems" :key="item.title"></app-Item>
          </div>
    
 
</template>

<script>

import Item from "../components/Item"
export default {

    props:["bluerayItems"],
    components: {
        "app-Item":Item
    }
    

}
</script>

<style>
body{
 overflow-y: auto;
}
 </style>