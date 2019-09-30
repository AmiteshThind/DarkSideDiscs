<template>

    <div>
        <app-header></app-header>
        <div class="container">
            <div class="row">
                <div class="col-sm-8 center-content">
                    <app-product-list></app-product-list>
                </div>
                <div class="col-sm-4">
                    <h1 class="cart-title">
                        <b>Cart</b></h1>
                    <div class="row">
                        <app-shopping-cart></app-shopping-cart>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import Header from "./Header";
    import ProductList from "./Products/ProductList";
    import ShoppingCart from "./ShoppingCart/ShoppingCart"

    export default {
        components: {
            "app-header": Header,
            "app-product-list": ProductList,
            "app-shopping-cart": ShoppingCart
        }
    }

</script>

<style>

    .center-content {
        justify-content: center;
    }

    .body {
        background: #BAE0B8;

    }

    .cart-title {
        text-align: left;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
        color: #000;
    }

</style>