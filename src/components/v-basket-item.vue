<template>
  <div class="v-basket-item">
    <div class="v-basket-item__img">
      <img
      :src="require(`../assets/images/` + basket_item_data.image)"
      alt="image"
    />
    </div>
    <div class="v-basket-item__info">
      <p>{{ basket_item_data.name }}</p>
      <p>{{ basket_item_data.priceNew }} Р</p>
      <p>{{ basket_item_data.article }}</p>
    </div>
    <div class="v-basket-item__count">
      <p>Количество:</p>
      <div class="v-basket-item__count_counter">
        <button class=" waves-effect waves-light btn"
        @click="decreaseCount">-</button>
        <p>{{ basket_item_data.count }}шт</p>
        <button class=" waves-effect waves-light btn"
        @click="addCount">+</button>
      </div>
      
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
    let BasketItemData = this.basket_item_data;
    BasketItemData.count = 1;
  },
  methods: {
    deleteFromBasket() {
      this.$emit("deleteFromBasket");
    },
    addCount(){
this.$emit("addCount")
    },
    decreaseCount(){
      this.$emit("decreaseCount")
    }
  },
};
</script>    
    <style lang="scss">
.v-basket-item {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #363636;
  font-size: 16px;
  &__img {
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      max-width: 120px;
    max-height: 120px;
    }
  }
  &__info{
    p{
      max-width: 150px;
      margin: 0;
    }
  }
  &__count{
    text-align: center;
    p{
      margin: 0;
    }
    &_counter{
      display: inline-flex;
      align-items: center;
      gap:10px;
    }
  }
}
</style>