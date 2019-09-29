import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: {
      bluerays: [
        {
          id: 1,
          title: "Star Wars IV",
          subtitle: "A New Hope",
          price: 25,
          quantity: 0,
          totalPrice: 0,
          img: "SW_IV_BR.png",
          type: "BluRay"
        },
        {
          id: 2,
          title: "Star Wars V",
          subtitle: "Empire Strikes Back",
          price: 25,
          quantity: 0,
          totalPrice: 0,
          img: "SW_V_BR.png",
          type: "BluRay"
        },
        {
          id: 3,
          title: "Star Wars VI",
          subtitle: "Return of the Jedi",
          price: 25,
          quantity: 0,
          totalPrice: 0,
          img: "SW_VI_BR.png",
          type: "BluRay"
        }
      ],
      DVDs: [
        {
          id: 4,
          title: "Star Wars IV",
          subtitle: "A New Hope",
          price: 20,
          quantity: 0,
          totalPrice: 0,
          img: "SW_IV_DVD.png",
          type: "DVD"
        },
        {
          id: 5,
          title: "Star Wars V",
          subtitle: "Empire Strikes Back",
          price: 20,
          quantity: 0,
          totalPrice: 0,
          img: "SW_V_DVD.png",
          type: "DVD"
        },
        {
          id: 6,
          title: "Star Wars VI",
          subtitle: "Return of the Jedi",
          price: 20,
          quantity: 0,
          totalPrice: 0,
          img: "SW_VI_DVD.png",
          type: "DVD"
        }
      ],
      blueraysCount: 0,
      DVDsCount: 0,
      applyBulkDiscount: false,
      applyDiscountOnBlueray: false,
      applyDiscountOnDVD: false
    },
    cart: []
  },
  mutations: {
    addItemToCart: (state, item) => {
      let found = state.cart.find(product => product.id == item.id);
      if (found) {
        found.quantity++;
        if (found.type == "BlueRay") {
          if (state.products.blueraysCount == 3) {
            found.totalPrice =
              found.totalPrice + item.price - found.price * 0.15;
          } else {
            found.totalPrice = found.price * found.quantity;
          }
        } else if (found.type == "DVD") {
          if (state.products.DVDsCount == 3) {
            found.totalPrice =
              found.totalPrice + item.price - found.price * 0.1;
          } else {
            found.totalPrice = found.price * found.quantity;
          }
        }
      } else {
        state.cart.push(item);
        Vue.set(item, "quantity", 1);
        Vue.set(item, "totalPrice", item.price);
        if (item.type == "BlueRay") {
          state.products.blueraysCount++;
          if (state.products.blueraysCount === 3) {
            state.applyBlueRaysDiscount = true;
          } else {
            state.applyBlueRaysDiscount = false;
            item.totalPrice = item.price * item.quantity;
          }
        } else if (item.type == "DVD") {
          state.products.DVDsCount++;
          if (state.products.DVDsCount === 3) {
            state.applyDVDsDiscount = true;
          } else {
            state.applyDVDsDiscount = false;
            item.totalPrice = item.price * item.quantity;
          }
        }
      }
    },
    incrementQuantity: (state, cartItem) => {
      let cartItemIndex = state.cart.indexOf(cartItem);
      let item = state.cart[cartItemIndex];
      item.quantity++;
      if (item.type == "DVD") {
        if (state.products.DVDsCount == 3) {
          item.totalPrice += item.price - item.price * 0.1;
        } else {
            state.products.DVDsCount++;
          item.totalPrice += item.price;
        }
      } else if (item.type == "BlueRay") {
        if (state.products.blueraysCount == 3) {
          item.totalPrice += item.price - item.price * 0.15;
        } else {
            state.products.blueraysCount++;
          item.totalPrice += item.price;
        }
      }
    },
    decrementQuantity: (state, cartItem) => {
      let cartItemIndex = state.cart.indexOf(cartItem);
      let item = state.cart[cartItemIndex];
      if (item.quantity > 1) {
        item.quantity--;
        if (item.type == "BlueRay") {
          if (state.products.blueraysCount == 3) {
            item.totalPrice -= item.price - 0.15 * item.price;
          } else {
            item.totalPrice -= item.price;
          }
        } else if (item.type == "DVD") {
          if (state.products.DVDsCount == 3) {
            item.totalPrice -= item.price - 0.1 * item.price;
          } else {
            item.totalPrice -= item.price;
          }
        }
      } else {
          item.quantity=0;
        item.totalPrice = 0;
        if(item.type=="BlueRay"){
            state.products.blueraysCount--;
        }
        else{
            state.products.DVDsCount--;
        }
      }
    },
    removeCartItem: (state, cartItem) => {
      let cartItemIndex = state.cart.indexOf(cartItem);

      if (state.cart[cartItemIndex].type == "BlueRay") {
        state.products.blueraysCount--;
      } else {
        state.products.DVDsCount--;
      }
      state.cart.splice(cartItemIndex, 1);
    }
  }
});
