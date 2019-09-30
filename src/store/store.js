import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: {
      bluerays: [{
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
      DVDs: [{
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
      uniqueBluRaysCount: 0,
      uniqueDVDsCount: 0,
      applyBulkDiscount: false
 
    },
    cart: []
  },
  mutations: {
    addItemToCart: (state, item) => {
      let found = state.cart.find(product => product.id == item.id);

      //if item exists in cart incremnts its quanity and update the total price
      if (found) {
        found.quantity++;
        if (found.type == "BluRay") {
          if (state.products.uniqueBluRaysCount == 3) {
            found.totalPrice =
              found.totalPrice + item.price - found.price * 0.15;
          } else {
            found.totalPrice = found.price * found.quantity;
          }
        } else if (found.type == "DVD") {
          if (state.products.uniqueDVDsCount == 3) {
            found.totalPrice =
              found.totalPrice + item.price - found.price * 0.1;
          } else {
            found.totalPrice = found.price * found.quantity;
          }
        }
        // add item to cart and increment either uniqueBlueRayCounter or uniqueDVDCounter
        // depending on type of item being added
      } else {
        state.cart.push(item);
        Vue.set(item, "quantity", 1);
        Vue.set(item, "totalPrice", item.price);
        if (item.type == "BluRay") {
          state.products.uniqueBluRaysCount++;
          if (state.products.uniqueBluRaysCount === 3) {
            found.totalPrice =
              found.totalPrice + item.price - found.price * 0.15;
          } else {

            item.totalPrice = item.price * item.quantity;
          }
        } else if (item.type == "DVD") {
          state.products.uniqueDVDsCount++;
          if (state.products.uniqueDVDsCount === 3) {
            found.totalPrice =
              found.totalPrice + item.price - found.price * 0.1;
          } else {
            item.totalPrice = item.price * item.quantity;
          }
        }
      }
    },
    incrementQuantity: (state, cartItem) => {
      let cartItemIndex = state.cart.indexOf(cartItem);
      let item = state.cart[cartItemIndex];

      item.quantity++;


      //increment quantity and check to see if discount needs to be applied or not for DVD
      if (item.type === "DVD") {
        if (state.products.uniqueDVDsCount == 3) {
          item.totalPrice += item.price - item.price * 0.1;
        } else {
          let found = state.cart.find(product => product.id == item.id);
          if (!found || item.quantity == 1) {
            state.products.uniqueDVDsCount++;
          }
          item.totalPrice += item.price;
        }
        //increment quantity and check to see if discount needs to be applied or not for BluRay
      } else if (item.type === "BluRay") {
        if (state.products.uniqueBluRaysCount == 3) {
          item.totalPrice += item.price - item.price * 0.15;
        } else {
          let found = state.cart.find(product => product.id == item.id);
          if (!found || item.quantity == 1) {
            state.products.uniqueBluRaysCount++;
          }
          item.totalPrice += item.price;
        }
      }
     

    },
    decrementQuantity: (state, cartItem) => {
      let cartItemIndex = state.cart.indexOf(cartItem);
      let item = state.cart[cartItemIndex];
      //increment quantity and check to see if discount needs to be applied or not for DVD
      if (item.quantity > 1) {
        item.quantity--;
        if (item.type == "BluRay") {
          if (state.products.uniqueBluRaysCount === 3) {
            item.totalPrice -= item.price - 0.15 * item.price;
          } else {
            item.totalPrice -= item.price;
          }
        } else if (item.type == "DVD") {
          if (state.products.uniqueDVDsCount == 3) {
            item.totalPrice -= item.price - 0.1 * item.price;

          } else {
            item.totalPrice -= item.price;

          }
        }
      } else if (item.quantity == 1) {
        item.quantity = 0;
        item.totalPrice = 0;
        if (item.type === "BluRay") {
          state.products.uniqueBluRaysCount--;

        } else {
          state.products.uniqueDVDsCount--;
        }
      }
    },
    removeCartItem: (state, cartItem) => {
      let cartItemIndex = state.cart.indexOf(cartItem);

      if (state.cart[cartItemIndex].type === "BluRay") {
        state.products.uniqueBluRaysCount--;
      } else {
        state.products.uniqueDVDsCount--;
      }
      state.cart.splice(cartItemIndex, 1);
    }
  }
});