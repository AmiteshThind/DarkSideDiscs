<template>
 
<div class="card grow rounded" style=" width:100%;     margin-bottom:2rem">
  <img :src="require(`../assets/movieImages/${item.img}`)" class=" card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><b>{{item.title}}</b></h5>
    <h2 style="" class="card-text"><b>{{item.subtitle}}</b></h2>
  </div>
   <span >
   ${{item.price}}   

     
   </span>
  <div class="card-body">
    <button class="btn" v-on:click="addItemToCart(item)" style="width:75%">Add to Cart</button>
  </div>    
</div>
  
</template>


<script>
export default {

data : function(){
  return {
    
  }
},
props:['item'],
methods:{
  addItemToCart:function(item){
     
    this.$store.commit('addItemToCart',item);
  }
}
}
</script>









<style scoped>

img {
    width: 100%;
    height: 12vw;
    object-fit: cover;
}
.btn{
  background: rgb(218, 218, 218);
  color: rgb(185, 22, 41);
  margin: 1rem;
  padding: 0.2rem;
  border: 2px solid rgb(185, 22, 41)
   
}
.btn:hover{
  color :#000;
  background: rgb(185, 22, 41);
  
}

.grow { transition: all .2s ease-in-out; }
 

 .card-title{
   margin: 0;
   font-size: 1.3em
 }
 ul{
   color: #000;
 }
 .quantity-input {
    border:0.5px solid rgb(95, 95, 95);
    border-radius: 0.2rem;
   
    font-size: 0.8rem;
}
 
 
  .card-img-top {
    width: 100%;
   height: 100%;
    object-fit: cover;
     
    
}
.card{
  border:  0 solid rgb(228, 215, 215);
  border-radius: 0.5rem;
  color: #000;
  background: rgb(204, 204, 204);
}

.card:hover{
  background: #000;
  transform: scale(1.02);
  color: rgb(185, 22, 41);
  
}
 

 
ul{
  margin: 0;
  padding: 0;
  
}
li{
  padding: 0;
  margin: 0.1rem;
}
.card-title{
  margin: 0.5rem;
 
}
.card-img-top{
  padding: 0;
  margin: 0;
}
.card-text{
  margin: 0.3rem;
  padding: 0;
}
.card-body{
  margin: 0;
  padding: 0;
}
input,
textarea {
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  margin: 0;
  outline: none;
  padding: 10px;
}

input[type="button"] {
  -webkit-appearance: button;
  cursor: pointer;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.input-group {
  clear: both;
  margin: 5px 0;
  position: relative;
}

.input-group input[type='button'] {
  background-color: #eeeeee;
  min-width: 38px;
  width: auto;
  transition: all 300ms ease;
}

.input-group .button-minus,
.input-group .button-plus {
  font-weight: bold;
  height: 38px;
  padding: 0;
  width: 38px;
  position: relative;
}

.input-group .quantity-field {
  position: relative;
  height: 38px;
  left: -6px;
  text-align: center;
  width: 62px;
  display: inline-block;
  font-size: 13px;
  resize: vertical;
}

.button-plus {
  left: -13px;
}

input[type="number"] {
  -moz-appearance: textfield;
  -webkit-appearance: none;
}




</style>