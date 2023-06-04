<template>
  <div class="v-header">
    <router-link :to="{name:'catalog'}" class="v-header__logo">
      <span>fonar.shop</span>
    </router-link>
    <router-link :to="{name:'basket'}">
      <a class="v-header__link waves-effect waves-light btn">
      <i class="large material-icons">local_grocery_store</i
      >{{ BASKET.length }}</a>
    </router-link>
  </div>
</template>
  <script>
import { mapGetters } from "vuex";

export default {
  name: "vHeader",
  components: {},
  props: {},
  computed: {
    ...mapGetters(["BASKET"]),
  },
  methods: {},
  watch: {},
};
</script>    
  <style lang="scss">
.v-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  padding: 0 40px;
  span{
    font-size: 40px;
  color: #26A69A;
    
  }
  a{
    display: inline-flex;
    font-size: 20px;
  }
}
</style>