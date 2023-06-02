<template>
  <div class="v-basket-item">
    <img
      class="v-basket-item__img"
      :src="require(`../assets/images/` + basket_item_data.image)"
      alt="image"
    />
    <div class="v-basket-item__info">
      <p>{{ basket_item_data.name }}</p>
      <p>{{ basket_item_data.priceNew }} Р</p>
      <p>{{ basket_item_data.article }}</p>
    </div>
    <div class="v-basket-item__count">
      <p>Количество:</p>
      <p>{{ basket_item_data.count }}шт</p>
    </div>
    <button
      class="v-basket-item__btn waves-effect waves-light btn"
      @click="deleteFromBasket"
    >
      <i class="large material-icons">delete</i>
    </button>
  </div>
</template>
    <script>
export default {
  name: "vBasketItem",
  components: {},
  props: {
    basket_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    const BasketItemData = this.basket_item_data;
    BasketItemData.count = 1;
  },
  methods: {
    deleteFromBasket() {
      this.$emit("deleteFromBasket");
    },
  },
};
</script>    
    <style lang="scss">
.v-basket-item {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  &__img {
    max-width: 120px;
  }
}
</style>