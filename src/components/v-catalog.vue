<template>
  <div class="v-catalog">
    <vCatalogItem
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @addToBasket="addToBasket"
    />
  </div>
</template>
  <script>
import vCatalogItem from "../components/v-catalog-item.vue";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "vCatalog",
  components: {
    vCatalogItem,
  },
  data() {
    return {
      
    };
  },
  props: {},
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_BASKET'
    ]),

    addToBasket(data){
        this.ADD_TO_BASKET(data)
    }},
    
    mounted(){
        this.GET_PRODUCTS_FROM_API()
        .then((response) =>{
          if (response.data){
            console.log(`responce`)
          }
        })
    }
  }
  
</script>    
  <style>
.v-catalog {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 32px;
  gap: 50px 30px;
}
</style>