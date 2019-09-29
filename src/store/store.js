import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products : {
            bluerays :[
                {id:1, title: "Star Wars IV",subtitle:"A NEW HOPE", price:20,quantity:0, img:'SW_IV_BR.png'},
                {id:2,title: "Star Wars V", subtitle:"EMPIRE STRIKES BACK",price:20,quantity:0, img:'SW_V_BR.png'} ,
                {id:3,title: "Star Wars VI",subtitle:"RETURN OF THE JEDI", price:20,quantity:0, img:'SW_VI_BR.png'} 
                
            ],
            DVDs : [
                {id:4, title: "Star Wars IV",subtitle:"A NEW HOPE", price:20, quantity:0, img:'SW_IV_DVD.png'},
                {id:5,title: "Star Wars V", subtitle:"EMPIRE STRIKES BACK",price:20,quantity:0, img:'SW_V_DVD.png'} ,
                {id:6, title: "Star Wars VI",subtitle:"RETURN OF THE JEDI", price:20,quantity:0, img:'SW_VI_DVD.png'} 
            ]
        },
        cart:[]
    }
})