<template>
 
    <ul class="list-group" style="width:100%; " >
       
       
             <app-cart-item :cartItem="cartItem" v-for="cartItem in this.$store.state.cart" :key="cartItem.id" ></app-cart-item>
  
      


            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="col-6">
             <strong style="margin-left:2rem">Total</strong>
                </div>
                <div class="col">
             <span style="margin-left:0.2rem"><b>${{totalPrice}}</b></span>
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
    },
    computed:{
        totalPrice:function(){
            let total =0;

            this.$store.state.cart.forEach(item => {
                total += item.totalPrice;
            });
        
            return total;
        }
    }
    }
</script>

<style>

</style>
