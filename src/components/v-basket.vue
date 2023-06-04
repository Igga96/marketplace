<template>
  <div class="v-basket">
    <h2 class="v-basket__title">Корзина:</h2>
    <p class="v-basket__text" v-if="!BASKET.length">Ваша корзина пуста.</p>
    <vBasketItem
      v-for="(item, idx) in BASKET"
      :key="item.article"
      :basket_item_data="item"
      @deleteFromBasket="deleteFromBasket(idx)"
      @addCount="addCount(idx)"
      @decreaseCount="decreaseCount(idx)"
    />
    <div class="v-basket__order" v-if="BASKET.length">
      <p>Общая стоимость: Р</p>
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
     "ADD_COUNT",
     "DECREASE_COUNT"
    ]),
    deleteFromBasket(idx) {
      this.DELETE_FROM_BASKET(idx);
    },
    addCount(idx){
      this.ADD_COUNT(idx)
    },
    decreaseCount(idx) {
      this.DECREASE_COUNT(idx)
    },
  },
  computed: {
    ...mapGetters(["BASKET"]),
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