<template>
  <div class="v-catalog">
    <h2 class="v-catalog__title">Каталог товаров:</h2>
    <div class="v-catalog__container">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToBasket="addToBasket"
      />
    </div>
  </div>
</template>
  <script>

import vCatalogItem from "../components/v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "vCatalog",
  components: {
    vCatalogItem
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_BASKET"]),

    addToBasket(data) {
      this.ADD_TO_BASKET(data);
    },
  },

  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log(`success`);
      }
    });
  },
};
</script>    
  <style lang="scss">
.v-catalog {
  margin-top: 32px;
  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
  }
}
</style>