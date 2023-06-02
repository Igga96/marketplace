<template>
  <div class="v-basket">
    <h1>Basket</h1>
    <vBasketItem
      v-for="(item, idx) in basket_data"
      :key="item.article"
      :basket_item_data="item"
      @deleteFromBasket="deleteFromBasket(idx)"
    />
  </div>
</template>
    <script>
import vBasketItem from "./v-basket-item.vue";
import { mapActions } from "vuex";
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
    ...mapActions(["DELETE_FROM_BASKET"]),
    deleteFromBasket(idx) {
      this.DELETE_FROM_BASKET(idx);
    },
  },
};
</script>    
    <style lang="scss"></style>