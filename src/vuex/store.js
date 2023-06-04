import { createStore } from 'vuex'
import axios from 'axios'

let store = createStore({
    state: {
        products: [],
        basket: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_BASKET: (state, product) => {
            if (state.basket.length) {
                let isProductExists = false
                state.basket.map(function (item) {
                    if (item.article == product.article) {
                        isProductExists = true
                        item.count++
                    }
                })

                if (!isProductExists) {
                    state.basket.push(product)
                }
            }
            else {
                state.basket.push(product)
            }
        },
        REMOVE_ITEM_FROM_BASKET: (state, idx) => {
            state.basket.splice(idx, 1)
        },
        SET_ADD_COUNT:(state, idx)=>{
            state.basket[idx].count++
        },
        SET_DECREASE_COUNT:(state, idx)=>{
            if(state.basket[idx].count>1){
                state.basket[idx].count--
            }
        },


    },
    actions: {
        GET_PRODUCTS_FROM_API({ commit }) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;

                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        ADD_TO_BASKET({ commit }, product) {
            commit('SET_BASKET', product)
        },
        ADD_COUNT({commit}, idx){
            commit('SET_ADD_COUNT', idx)
        },
        DECREASE_COUNT({commit}, idx){
            commit('SET_DECREASE_COUNT', idx)
        },
        DELETE_FROM_BASKET({ commit }, idx) {
            commit('REMOVE_ITEM_FROM_BASKET', idx)
        },
        
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        BASKET(state) {
            return state.basket;
        }
    },
})
export default store;