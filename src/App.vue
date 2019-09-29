<template>
  <div id="app" >
<app-dashboard></app-dashboard>

  </div>
</template>

<script>
 
//import Landing from "./components/Landing";

import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";

export default {
  name: 'app',
  components: {
    "app-landing-page": Landing,
  
  "app-dashboard":Dashboard,
   
  },
  data: function(){
    return{ 
}
    }
  }

</script>

<style>
 
body  {
   background: rgb(185, 22, 41);
    font-family: 'Nunito Sans', sans-serif;
  
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;  
}

::-webkit-scrollbar {
  background: #CCF6ED;
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 4px;
}

</style>
