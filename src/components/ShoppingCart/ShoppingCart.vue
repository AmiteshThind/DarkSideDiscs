<template>

    <ul class="list-group">
        <app-cart-item :cartItem="cartItem" v-for="cartItem in this.$store.state.cart" :key="cartItem.id">
        </app-cart-item>
        <li class="list-group-item d-flex justify-content-between align-items-center"
            v-if="applyDiscountOnBlurays || applyDiscountOnDVDs">
            <div class="row">
                <div class="col-5">
                    <strong class="align-heading">Discount</strong>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12" v-if="applyDiscountOnBlurays">
                    <span>15% OFF All BluRays</span>
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
                <strong class="align-heading">Total</strong>
            </div>
            <div class="col">
                <span class="align-subheading"><b>${{totalPrice}}</b></span>
            </div>
        </li>
        <button class="btn checkout" @click="checkout">Checkout</button>
    </ul>

</template>


<script>
    import CartItem from "./CartItem"
    export default {
        data: function () {
            return {
                applyDiscountOnBluray: false,
                applyDiscountOnDVD: false,
               
            }
        },
        methods: {
            checkout: function () {
               
               //check to see if checkout is valid 
                if (this.$store.state.products.uniqueBluRaysCount > 0 || this.$store.state.products.uniqueDVDsCount > 0) {
                    alert("Thanks for Shopping With DarkSide Discs. Hope you enjoy your DSD's");
                } else {
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

                //sum up value of items in cart
                this.$store.state.cart.forEach(item => {
                    total += item.totalPrice;
                });
                //apply discount if buying over 100 copies and atleast one of each
                if (this.$store.state.products.applyBulkDiscount) {
                    total = total - (total * 0.05);
                }

                return parseFloat(total).toFixed(2);
            },

            applyDiscountOnBlurays: function () {
                let vm = this;
                 //check to see if atleast each type of bluray is in the cart 
                // if true apply discount to each item
                if (vm.$store.state.products.uniqueBluRaysCount == 3) {
                    if (!vm.applyDiscountOnBluray) {
                        let bluRayItems = this.$store.state.cart.filter(item => (item.type == "BluRay"));
                        bluRayItems.forEach(item => (item.totalPrice = item.totalPrice - (0.15 * item.totalPrice)));
                    }
                    vm.applyDiscountOnBluray = true;
            
                } else if (this.$store.state.products.uniqueBluRaysCount < 3) {
                    if (this.applyDiscountOnBluray == true) {
                        let bluRayItems = this.$store.state.cart.filter(item => (item.type == "BluRay"));
                        bluRayItems.forEach(item => (item.totalPrice = item.price * item.quantity));
                    }
                    vm.applyDiscountOnBluray = false;
                }
                return vm.applyDiscountOnBluray;
            },

            applyDiscountOnDVDs: function () {
                let vm = this;
                 //check to see if atleast each type of DVD is in the cart 
                // if true apply discount to each item
                if (vm.$store.state.products.uniqueDVDsCount === 3) {
                    if (!this.applyDiscountOnDVD) {
                        let dvdItems = this.$store.state.cart.filter(item => (item.type == "DVD"));
                        dvdItems.forEach(item => (item.totalPrice = item.totalPrice - (0.10 * item.totalPrice)));

                    }
                    vm.applyDiscountOnDVD = true;
                } else if (this.$store.state.products.uniqueDVDsCount < 3) {
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
                });
                if (vm.$store.state.products.uniqueBluRaysCount == 3 && vm.$store.state.products.uniqueDVDsCount == 3) {
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

.list-group-item {
    background: rgb(218, 218, 218);
}
.list-group{
    width:100%;
    margin-bottom:1rem 
}
.checkout {
    color: rgb(218, 218, 218);
    background: rgb(32, 32, 32);
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.btn:hover {
    background: rgb(0, 0, 0);
    color: rgb(218, 218, 218);
}
.align-heading{
    margin-left:2rem;
}
.align-subheading{
    margin-left:0.2rem;
}
 
</style>