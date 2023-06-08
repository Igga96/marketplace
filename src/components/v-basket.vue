<template>
  <div class="v-basket">
    <h2 class="v-basket__title">Корзина:</h2>
    <p class="v-basket__text" v-if="!BASKET.length">Ваша корзина пуста.</p>
    <vBasketItem
      v-for="(item, idx) in BASKET"
      :key="item.article"
      :basket_item_data="item"
      @deleteFromBasket="deleteFromBasket(idx)"
      @increaseQantity="increaseQantity(idx)"
      @decreaseQantity="decreaseQantity(idx)"
    />
    <div class="v-basket__order" v-if="BASKET.length">
      <p>Общая стоимость: {{basketTotalCoast}} Р</p>
      <router-link :to="{ name: 'order' }">
        <a class="waves-effect waves-light btn"> оформить заказ</a>
      </router-link>
    </div>
  </div>
</template>

    <script>
import vBasketItem from "./v-basket-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "vBasket",
  components: {
    vBasketItem,
  },
  props: {
    basket_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_BASKET",
      "INCREASE_QANTITY",
      "DECREASE_QANTITY",
    ]),
    deleteFromBasket(idx) {
      this.DELETE_FROM_BASKET(idx);
    },
    increaseQantity(idx) {
      this.INCREASE_QANTITY(idx);
    },
    decreaseQantity(idx) {
      this.DECREASE_QANTITY(idx);
    },
   
    
  },
  computed: {
    ...mapGetters(["BASKET"]),
basketTotalCoast(){
  let result = [];
  if(this.BASKET.length){
    for(let item of this.BASKET){
      result.push(item.priceNew * item.qantity);
    }
    result = result.reduce(function(sum, el){
      return sum+el
    })
  }
  return result
}
  },

};
</script>    
    <style lang="scss">
.v-basket {
  &__title {
    border-bottom: 1px solid #363636;
  }
  &__text {
    font-size: 20px;
  }
  &__order {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;
    padding: 40px 0;
  }
}
</style>