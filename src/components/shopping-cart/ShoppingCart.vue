<template>

    <ul class="list-group" style="width:100%;margin-bottom:1rem ">
        <app-cart-item :cartItem="cartItem" v-for="cartItem in this.$store.state.cart" :key="cartItem.id">
        </app-cart-item>
        <li class="list-group-item d-flex justify-content-between align-items-center"
            v-if="applyDiscountOnBluerays || applyDiscountOnDVDs">
            <div class="row">
                <div class="col-5">
                    <strong style="margin-left:2rem">Discount</strong>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" v-if="this.applyDiscountOnBlueray">
                    <span>15% OFF All BlueRays</span>
                </div>
                <div class="col-12" v-if="this.applyDiscountOnDVD">
                    <span>10% OFF DVDs</span>
                </div>
                <div class="col-12" v-if="applyBulkDiscount">
                    <span>5% OFF All ITEMS</span>
                </div>
            </div>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="col-6">
                <strong style="margin-left:2rem">Total</strong>
            </div>
            <div class="col">
                <span style="margin-left:0.2rem"><b>${{totalPrice}}</b></span>
            </div>
        </li>
        <button class="btn checkout" @click="checkout">Checkout</button>
    </ul>

</template>

<script>
    import CartItem from "../shopping-cart/CartItem"
    export default {
        data: function () {
            return {
                applyDiscountOnBlueray: false,
                applyDiscountOnDVD: false,

            }
        },
        methods:{
            checkout:function(){
                let validCheckout = false;
                validCheckout = this.$store.state.cart.forEach(item=>{
                    if(item.quantity>=0){
                        return true;
                    }
                })

                if(this.$store.state.products.blueraysCount>0 || this.$store.state.products.DVDsCount>0){
                    alert("Thanks for Shopping With DarkSide Discs. Hope you enjoy your DSD's");
                }
                else{
                    alert("Your cart is currently empty.Please add an item and try again");
                }
                 
                
                
                
                
            }
        },
        components: {
            "app-cart-item": CartItem
        },
        computed: {
            totalPrice: function () {
                let total = 0;

                this.$store.state.cart.forEach(item => {
                    total += item.totalPrice;
                });

                if (this.$store.state.products.applyBulkDiscount) {
                    total = total - (total * 0.05);
                }

                return parseFloat(total).toFixed(2);
            },

            applyDiscountOnBluerays: function () {
                let vm = this;
                if (vm.$store.state.products.blueraysCount === 3) {
                    if (!vm.applyDiscountOnBlueray) {
                        let blueRayItems = this.$store.state.cart.filter(item => (item.type == "BlueRay"));
                        blueRayItems.forEach(item => (item.totalPrice = item.totalPrice - (0.15 * item
                        .totalPrice)));
                    }
                    vm.applyDiscountOnBlueray = true;
                } else if (this.$store.state.products.blueraysCount < 3) {
                    if (this.applyDiscountOnBlueray == true) {
                        let blueRayItems = this.$store.state.cart.filter(item => (item.type == "BlueRay"));
                        blueRayItems.forEach(item => (item.totalPrice = item.price * item.quantity));
                    }
                    vm.applyDiscountOnBlueray = false;
                }
                return vm.applyDiscountOnBlueray;
            },

            applyDiscountOnDVDs: function () {
                let vm = this;
                if (vm.$store.state.products.DVDsCount === 3) {
                    if (!this.applyDiscountOnDVD) {
                        let dvdItems = this.$store.state.cart.filter(item => (item.type == "DVD"));
                        dvdItems.forEach(item => (item.totalPrice = item.totalPrice - (0.10 * item.totalPrice)));

                    }
                    vm.applyDiscountOnDVD = true;
                } else if (this.$store.state.products.DVDsCount < 3) {
                    if (this.applyDiscountOnDVD == true) {
                        let dvdItems = this.$store.state.cart.filter(item => (item.type == "DVD"));
                        dvdItems.forEach(item => (item.totalPrice = item.price * item.quantity));
                    }
                    vm.applyDiscountOnDVD = false;
                }
                return vm.applyDiscountOnDVD;
            },
            applyBulkDiscount: function () {
                let vm = this;
                let totalQuantity = 0;
                vm.$store.state.cart.forEach(item => {
                    totalQuantity += item.quantity;
                })
                if (vm.$store.state.products.blueraysCount == 3 && this.$store.state.products.DVDsCount == 3) {
                    if (totalQuantity >= 100) {
                        vm.$store.state.products.applyBulkDiscount = true;

                    } else {
                        vm.$store.state.products.applyBulkDiscount = false;
                    }
                } else {
                    vm.$store.state.products.applyBulkDiscount = false;
                }

                return vm.$store.state.products.applyBulkDiscount;


            }
        }
    }
</script>

<style>
.list-group-item{
    background:  rgb(218, 218, 218);
}
.checkout{
    color: rgb(218, 218, 218);
    background: rgb(32, 32, 32);
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.btn:hover{
    background: rgb(0, 0, 0);
    color: rgb(218, 218, 218);
}
 
 
</style>