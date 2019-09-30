<template>
  <div id="app">
    <transition name="router-anim" enter-active-class="animated fadeInDown">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
 
 
  export default {
    name: 'app'
  }
</script>

<style>
 
 @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');
 @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css";

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }
 

  html, body {
  font-family: 'Nunito Sans', sans-serif;
    background-image: linear-gradient(rgb(235, 76, 76), rgb(41, 41, 41));
    font-family: 'Nunito Sans', sans-serif;
    overflow-y: hidden;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
}

#app {
  font-family: 'Nunito Sans', sans-serif;
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