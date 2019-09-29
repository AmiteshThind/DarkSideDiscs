import Vue from 'vue';
import Vuex from 'vuex';
 

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products : {
            bluerays :[
                {id:1, title: "Star Wars IV",subtitle:"A New Hope", price:25,quantity:0, totalPrice:0,img:'SW_IV_BR.png',type:"DVD"},
                {id:2,title: "Star Wars V", subtitle:"Empire Strikes Back",price:25,quantity:0,totalPrice:0, img:'SW_V_BR.png',type:"DVD"} ,
                {id:3,title: "Star Wars VI",subtitle:"Return of the Jedi", price:25,quantity:0, totalPrice:0,img:'SW_VI_BR.png',type:"DVD"} 
                
            ],
            DVDs : [
                {id:4, title: "Star Wars IV",subtitle:"A New Hope", price:20, quantity:0, totalPrice:0,img:'SW_IV_DVD.png',type:"BlueRay"},
                {id:5,title: "Star Wars V", subtitle:"Empire Strikes Back",price:20,quantity:0,totalPrice:0, img:'SW_V_DVD.png',type:"BlueRay"} ,
                {id:6, title: "Star Wars VI",subtitle:"Return of the Jedi", price:20,quantity:0,totalPrice:0, img:'SW_VI_DVD.png',type:"BlueRay"} 
            ],
            blueraysCount:0,
            DVDsCount:0
        },
        cart:[]
    },
    mutations:{
        addItemToCart: (state,item)=>{
            let found = state.cart.find(product => product.id == item.id);
          //  console.log(found);
            if(found){
                found.quantity++;
                found.totalPrice = found.price*found.quantity; 
            }
            else{
                state.cart.push(item);
                Vue.set(item, 'quantity',1);
                Vue.set(item,'totalPrice',item.price);
                if(item.type == "BlueRay"){
                    state.products.blueraysCount++;
                }
                else{
                    state.products.DVDsCount++;
                
                }
                console.log(state.products.blueraysCount);
                console.log(state.products.DVDsCount);
            }
           console.log(state.cart);
        },
        incrementQuantity:(state,cartItem)=>{
            let cartItemIndex = state.cart.indexOf(cartItem);
            let item = state.cart[cartItemIndex];
            item.quantity++;
            item.totalPrice+=item.price;
        },
        decrementQuantity:(state,cartItem)=>{
            let cartItemIndex = state.cart.indexOf(cartItem);
            let item = state.cart[cartItemIndex];
            if(item.quantity!=0){
                item.quantity--;
                item.totalPrice-=item.price;
            }
            
        },
        removeCartItem:(state,cartItem) => {
            let cartItemIndex = state.cart.indexOf(cartItem);
           
            if(state.cart[cartItemIndex].type=="BlueRay"){
                state.products.blueraysCount--;
            }
            else{
                state.products.DVDsCount--;
            }
            console.log(cartItem.DVDsCount);
            state.cart.splice(cartItemIndex,1);
            
        },
        modifyQuantity:(state,cartItem,e) => {
            let cartItemIndex = state.cart.indexOf(cartItem);
            let item = state.cart[cartItemIndex];
            item.quantity=e.target.value;
        }
    }
})