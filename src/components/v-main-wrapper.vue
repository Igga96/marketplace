<template>
  <div class="v-main-wrapper">
    <vHeader />
    <vCatalog />
    <vBasket 
    v-if="BASKET.length"
    :basket_data="BASKET"
    
    />
  </div>
</template>
<script>
import vCatalog from "../components/v-catalog.vue";
import vHeader from "../components/v-header.vue";
import vBasket from "../components/v-basket.vue";
import { mapGetters } from "vuex";
export default {
  name: "vMainWrapper",
  components: {
    vCatalog,
    vHeader,
    vBasket,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["BASKET"]),
  },
  methods: {},
  watch: {},
};
</script>    
<style>
.v-main-wrapper {
  margin: 0 auto;
  padding: 0;
  background-color: #e6e6e6;
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  color: #363636;
}
</style>