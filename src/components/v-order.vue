<template>
    <div class="v-order">
      <h2>Оформить заказ</h2>
    </div>
  </template>
    <script>
  import { mapGetters } from "vuex";
  
  export default {
    name: "vHeader",
    components: {},
    props: {},
    computed: {
      ...mapGetters(["BASKET"])
    },
    methods: {},
    watch: {},
  };
  </script>    
    <style lang="scss"></style>