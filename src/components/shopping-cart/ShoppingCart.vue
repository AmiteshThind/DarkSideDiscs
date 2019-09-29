<template>
 
    <ul class="list-group" style="width:100%; " >
       
        <li class="list-group-item d-flex justify-content-between align-items-center" style="padding-right:1rem;padding-top:0">
             <app-cart-item></app-cart-item>
    </li>
            
        <li class="list-group-item d-flex justify-content-between align-items-center">
             <app-cart-item></app-cart-item>
    </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="col-6">
             <strong style="margin-left:2rem">Total</strong>
                </div>
                <div class="col">
             <span style="margin-left:0.2rem"><b>$232</b></span>
                </div>
                <button class="btn btn-primary" >Checkout</button>
            </li>

            
         
    </ul>
    
</template>






<script>
import CartItem from "../shopping-cart/CartItem"
export default {
    components:{
        "app-cart-item":CartItem
    }
    }
</script>

<style>

</style>
