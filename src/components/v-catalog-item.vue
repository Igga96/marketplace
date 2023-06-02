<template>
  <div class="v-catalog-item">
    <h3 class="v-catalog-item__title">{{ product_data.name }}</h3>
    <div class="v-catalog-item__image">
      <img
        :src="require(`../assets/images/` + product_data.image)"
        alt="image"
      />
    </div>
    <div class="v-catalog-item__price">
      <p class="v-catalog-item__price_price-old">
        Старая цена: <br />
        <span> {{ product_data.priceOld }} Р </span>
      </p>
      <p class="v-catalog-item__price_price-new">
        Цена сегодня:<br />
        <span> {{ product_data.priceNew }} Р</span>
      </p>
    </div>
    <button class="v-catalog-item__btn waves-effect waves-light btn"
    @click="addToBasket">
    
      <span>В корзину</span>
    </button>
  </div>
</template>
  <script>
export default {
  name: "vCatalogItem",
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {},
  methods: {
    addToBasket() {
      this.$emit('addToBasket', this.product_data)
    }
  },
  watch: {},
};
</script>    
  <style lang="scss">
.v-catalog-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #d9d9d9;
  border-radius: 12px;
  width: 350px;
  .v-catalog-item__title {
    font-size: 26px;
    margin: 25px 0 20px;
    text-align: center;
  }
  .v-catalog-item__image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    img {
      max-width: 200px;
      max-height: 200px;
    }
  }
  .v-catalog-item__price {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    padding: 0 36px;
    text-align: center;
    font-size: 20px;
    margin: 0 auto;
    .v-catalog-item__price_price-old {
      color: #a3a3a3;
      span {
        font-size: 32px;
        padding: 0;
      }
    }
    .v-catalog-item__price_price-new {
      span {
        font-size: 48px;
      }
    }
  }
  .v-catalog-item__btn {
    margin-bottom: 32px;
    padding: 24px 113px;
    border-radius: 59px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
}
</style>