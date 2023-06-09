<template>
  <div class="v-order">
    <h2 class="v-oreder__title">Оформить заказ</h2>
    <form action="post" class="form__output">
      <p>Ваше ФИО</p>
      <input type="text" placeholder="Иванов Иван" maxlength="30" />
      <p>Ваш номер телефона</p>
      <input type="text" maxlength="15" placeholder="+375" />
      <hr>
      <input
        type="button"
        value="Продолжить"
        class="waves-effect waves-light btn"
      />
      <vOrderCard/>
      <p>Город</p>
      <input type="text" placeholder="Минск" maxlength="15" />
      <p>Улица</p>
      <input type="text" placeholder="Победителей" maxlength="15" />
      <p>Номер дома</p>
      <input type="text" placeholder="21" maxlength="7" />
      <hr>
      <input type="submit" value="Отправить" class="waves-effect waves-light btn">

    </form>
  </div>
</template>
    <script>
import { mapGetters } from "vuex";
import vOrderCard from '../components/v-order-card.vue'

export default {
  name: "vOrder",
  components:{
    vOrderCard,
  },
  data() {
    return {
      user: [
        {
          name: "",
          phone: "",
        },
      ],
      card: [
        {
          number: "",
          name: "",
          month: "",
          year: "",
          cvv: "",
        },
      ],
      address: [
        {
          city: "",
          street: "",
          houseNumber: "",
        },
      ],
    };
  },
  props: {},
  computed: {
    ...mapGetters(["BASKET"]),
  },
  methods: {},
  watch: {},
};
</script>    
    <style lang="scss">
.form__output {
  display: flex;
  width: 50%;
  margin: 0 auto;
  flex-direction: column;
  align-content: center;
  padding-bottom: 100px;
  background: #fff;
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
    border-radius: 10px
}
</style>