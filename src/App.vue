<template>
  <div id="app">


    <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
      <router-view></router-view>
    </transition>

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

      "app-dashboard": Dashboard,

    },
    data: function () {
      return {}
    }
  }
</script>

<style>
 
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

  body {
    background: rgb(185, 22, 41);
    font-family: 'Nunito Sans', sans-serif;
    overflow-y: hidden;
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