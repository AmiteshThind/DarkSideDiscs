<template>
<div>
     
  
    <app-header></app-header>
    <div class="container">
    <div class="row" style="justify-content:center">
    <div class="col-sm-8">
        <app-product-list></app-product-list>
    </div>
    <div class="col-sm-4">
        <h1 style= "text-align:left; margin-top:2rem;margin-bottom:1rem;font-size:3rem"><b>Cart</b></h1>
                 <div class="row" > 
                     <app-shopping-cart></app-shopping-cart>
                    
                    </div>
       
    </div>
</div>
</div>
</div>
</template>

<script>
    import Header from "./Header";
    import ProductList from "./ProductList";
    import ShoppingCart from "./shopping-cart/ShoppingCart"
    
    export default {
        
        components: {
            "app-header": Header,
            "app-product-list":ProductList,
            "app-shopping-cart":ShoppingCart
        }
         
    }
</script>

<style>
    .body{
        background: #353535;
         
    }
    .container{
        margin:0;
        padding: 0;
    }
    
</style>