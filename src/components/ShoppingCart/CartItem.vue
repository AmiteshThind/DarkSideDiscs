  <template>
  
      <li class="list-group-item d-flex justify-content-between align-items-center align">
          <div class="container-fluid" >
              <div class="container-fluid">
                  <div class="row">
                      <div class="col">
                          <button type="button" @click="removeCartItem(cartItem)"  
                              class="close is-pulled-right no-padding-margin" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                  </div>
                  <div class="row">
                      <img :src="require(`../../assets/movieImages/${cartItem.img}`)" class="movie-image">
                      <div class="media-body"  >
                          <div>
                              <strong>{{cartItem.title}}</strong>
                          </div>
                          <p>{{cartItem.subtitle}}</p>
                          <p>({{cartItem.type}})</p>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      <div class="mt-1">
                          <p class="qauntity-item"> <strong>Quantity</strong> </p>
                          <div class="input-group" >
                              <input type="button" value="-" @click="decrementQuantity(cartItem)" class="button-minus"
                                  data-field="quantity">
                              <input type="number" disabled step="1" max=""
                                  :value="cartItem.quantity" name="quantity" class="quantity-field">
                              <input type="button" value="+" @click="incrementQuantity(cartItem)" class="button-plus"
                                  data-field="quantity">
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="align-cart-summary">
                          <p> <strong>Price</strong> </p>
                          <div class="input-group price">
                              ${{cartItem.totalPrice}}
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </li>

  </template>


  <script>

      export default {
          props:['cartItem'],
          methods:{
              incrementQuantity:function(cartItem){
                  this.$store.commit('incrementQuantity',cartItem);
              },
              decrementQuantity:function(cartItem){
                  this.$store.commit('decrementQuantity',cartItem);
              },
              removeCartItem:function(cartItem){
                  this.$store.commit('removeCartItem',cartItem);
              },
              modifyQuantity: function(cartItem,e){
                  this.$store.commit('modifyQuantity',cartItem,e);
              }
              
          }
      }

  </script>

  <style>

  button:focus {
      outline: 0;
  }

  .align-cart-summary{
       text-align:left;
       margin-top:5px;
  }
  .price{
      justify-content:left;
      margin-left:5px;
      padding-top:0.3rem
  }
  .movie-image {
      height: 80px;
      width: 100px;
      border-radius: 5px;
      background-size: 100px;
      margin-top: 0.3rem;
  }

  .media-body {
      height: 100%;
      margin-left:1.2rem
  }

  .form-control {
      width: 25%;
      height: 25px;
      font-size: 12px;
      text-align: center;
      padding: 2px;
  }

  input,
  textarea {
      border: 1px solid #eeeeee;
      box-sizing: border-box;
      margin: 0;
      outline: none;

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
      margin: 0px 0;
      position: relative;
  }

  .input-group input[type='button'] {
      background-color: #eeeeee;
      min-width: 25px;
      width: auto;
      transition: all 300ms ease;
  }

  .input-group .button-minus,
  .input-group .button-plus {
      font-weight: bold;
      height: 30px;
      padding: 0;
      margin-right: 0.2rem;
      width: 20px;
      position: relative;
  }

  .input-group .quantity-field {
      position: relative;
      height: 30px;
      left: -5px;
      text-align: center;
      width: 55px;
      display: inline-block;
      font-size: 13px;
      margin: 0 0 5px;
      resize: vertical;
  }

  .button-plus {
      left: -5px;
  }

  input[type="number"] {
      -moz-appearance: textfield;
      -webkit-appearance: none;
  }

  .col {
      margin: 0;
      padding: 0;
  }

  .align{
      padding-right:1rem;
      padding-top:0;
  }

  .container-fluid{
       padding:0;
  }

  .no-padding-margin{
      margin:0px;padding:0px
  }
  .qauntity-item{
      margin-left:1.1rem;
  }
  </style>