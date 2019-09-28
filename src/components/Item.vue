<template>
 
<div class="card" style="width: 16rem; margin-left:1rem;  margin-right:1rem; margin-bottom:2rem">
  <img :src="require(`../assets/movieImages/${item.img}`)" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><b>STAR WARS V</b></h5>
    <h2 style="" class="card-text"><b>{{item.subtitle}}</b></h2>
  </div>
  <ul class="list-group list-group-flush" style="margin-left:1rem;margin-right:1rem">
    <li class=""><b>Price : ${{item.price}}</b></li>
    <div>
    <li class=""><b>Quantity : </b>
      <input type="number" class="quantity-input"
       min="1" maxlength="3" max="100" value=1 style="width:3rem;text-align:center">
      </li>
    </div>
  </ul>
  <div class="card-body">
    <button class="btn" style="width:75%">Add to Cart</button>
  </div>
</div>
  
</template>


<script>
export default {

data : function(){
  return {
    quantity_options:[1,2,3]
  }
},
props:['item']
}
</script>

<style scoped>

img {
    width: 100%;
    height: 12vw;
    object-fit: cover;
}
.btn{
  background:rgb(73, 73, 75);
  color: #FFFF;
  margin: 1rem;
  padding: 0.2rem;
   
   
}
.btn:hover{
  color :rgb(73, 73, 75);
  background: #FFFF;
  
}

.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.04); }

 .card-title{
   margin: 0;
   font-size: 1.3em
 }
 ul{
   color: rgb(95, 95, 95);
 }
 .quantity-input {
    border:0.5px solid rgb(95, 95, 95);
    border-radius: 3px;
   
    font-size: 0.8rem;
}
 
 
  .card-img-top {
    width: 100%;
   height: 100%;
    object-fit: cover;
     border-top-right-radius: 0.5rem;
     border-top-left-radius: 0.5rem;
    
}
.card{
  border:  0 solid #fff;
  border-radius: 0.5rem;
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




</style>