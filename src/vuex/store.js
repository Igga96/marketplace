import { createStore } from 'vuex'
import axios from 'axios'

let store = createStore({
    state: {
        products: [],
        basket: [],
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
                        item.qantity++
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
        INCREASE_QANTITY: (state, idx) => {
            state.basket[idx].qantity++
        },
        DECREASE_QANTITY: (state, idx) => {
            if (state.basket[idx].qantity > 1) {
                state.basket[idx].qantity--
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
        INCREASE_QANTITY({ commit }, idx) {
            commit('INCREASE_QANTITY', idx)
        },
        DECREASE_QANTITY({ commit }, idx) {
            commit('DECREASE_QANTITY', idx)
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
        },
    }
})
export default store;