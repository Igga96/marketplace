<template>
  <div class="v-catalog">
    <h2 class="v-catalog__title">Каталог товаров:</h2>
    <div class="v-catalog__container">
      <vSelect 
      :selected="selected" 
      :options="options" 
      @select="sortByParams" />
      <div class="v-catalog__container_items">
        <vCatalogItem
          v-for="product in filterProducts"
          :key="product.article"
          :product_data="product"
          @addToBasket="addToBasket"
        />
      </div>
    </div>
  </div>
</template>
  <script>
import vCatalogItem from "../components/v-catalog-item.vue";
import vSelect from "../components/v-select.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "vCatalog",
  components: {
    vCatalogItem,
    vSelect,
  },
  data() {
    return {
      options: [
        { name: "Цене", filterType: "coast" },
        { name: "Наименованию", filterType: "name" },
      ],
      selected: "выбрать",
      sortedProducts: [],
    };
  },
  props: {},
  computed: {
    ...mapGetters(["PRODUCTS"]),

    filterProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_BASKET"]),

    addToBasket(data) {
      this.ADD_TO_BASKET(data);
    },

    sortByParams(options) {
      this.sortedProducts = [...this.PRODUCTS]
      const sortByPrice = (d1, d2) => (d1.priceNew > d2.priceNew ? 1 : -1);
      const sortByName = (d1, d2) => d1.name.toLowerCase() > d2.name.toLowerCase() ? 1 : -1;
      switch (options.filterType) {
        case "coast": return this.sortedProducts.sort(sortByPrice)
        case "name": return this.sortedProducts.sort(sortByName)
        default:
          return this.PRODUCTS;
      }
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
    &_items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 50px;
      padding: 0 20px;
    }
  }
}
</style>