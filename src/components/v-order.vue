<template>
    <div class="v-order">
      <h2 class="v-oreder__title">Оформить заказ</h2>
      <form action="post">
        <p>Ваше ФИО</p>
        <input type="name" placeholder="Иванов Иван" maxlength="30" >
        <p>Ваш номер телефона</p>
        <input type="phone" maxlength="15" placeholder="+375">
        <hr>
        <input type="button" value="Продолжить">
        <p>Номер карты</p>
        <input type="text" maxlength="16" >
        <p>Имя носителя</p>
        <input type="text" maxlength="20">
        <p>Срок действия</p>
        
      </form>
      
    </div>
  </template>
    <script>
  import { mapGetters } from "vuex";
  
  export default {
    name: "vOrder",
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