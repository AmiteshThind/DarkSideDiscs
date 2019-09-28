<template>
  <div id="app">

<app-dashboard  :mockData="mockData"></app-dashboard>
  </div>
</template>

<script>
 
//import Landing from "./components/Landing";

import Dashboard from "./components/Dashboard";
import Item from "./components/Item"

export default {
  name: 'app',
  components: {
    //"app-landing-page": Landing,
  
  "app-dashboard":Dashboard,
   "app-item":Item
  },
  data: function(){
    return{
      mockData : {
  bluerays :[
    {title: "Star Wars IV",subtitle:"A NEW HOPE", price:20, img:'SW_IV_BR.png'},
    {title: "Star Wars V", subtitle:"EMPIRE STRIKES BACK",price:20, img:'SW_V_BR.png'} ,
    {title: "Star Wars VI",subtitle:"RETURN OF THE JEDI", price:20, img:'SW_VI_BR.png'} 
    
  ],
  DVDs : [
    {title: "Star Wars IV",subtitle:"A NEW HOPE", price:20, img:'SW_IV_DVD.png'},
    {title: "Star Wars V", subtitle:"EMPIRE STRIKES BACK",price:20, img:'SW_V_DVD.png'} ,
    {title: "Star Wars VI",subtitle:"RETURN OF THE JEDI", price:20, img:'SW_VI_DVD.png'} 
  ]
}
    }
  }
}
</script>

<style>

body  {
   background: #353535;
    font-family: 'Nunito Sans', sans-serif;
  
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;  
}

</style>
