<template>
  <div class="v-order">
    <h2 class="v-oreder__title">Оформить заказ</h2>
    <form action="post" class="form__output">
      <div class="form__output_container" v-if="visibleStage == 1">
        <p>Ваше ФИО</p>
        <input type="text" placeholder="Иванов Иван" maxlength="30" />
        <p>Ваш номер телефона</p>
        <input type="text" maxlength="15" placeholder="+375" />
      </div>
<vOrderCard v-else-if="visibleStage == 2" />
      <div class="form__output_container" v-else-if="visibleStage == 3">
        <p>Город</p>
        <input type="text" placeholder="Минск" maxlength="15" />
        <p>Улица</p>
        <input type="text" placeholder="Победителей" maxlength="15" />
        <p>Номер дома</p>
        <input type="text" placeholder="21" maxlength="7" />
      </div>
      <input
        type="button"
        value="Продолжить"
        class="waves-effect waves-light btn"
        @click="visibleStage++"
        v-show="visibleStage<=2"
      />
      <input
      v-show="visibleStage==3"
        type="submit"
        value="Отправить"
        class="waves-effect waves-light btn"
      />
    </form>
  </div>
</template>
    <script>
import { mapGetters } from "vuex";
import vOrderCard from "../components/v-order-card.vue";

export default {
  name: "vOrder",
  components: {
    vOrderCard,
  },
  data() {
    return {
      visibleStage: 1,
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
.v-order {
  padding-bottom: 100px;
}
.form__output {
  display: flex;
  width: 50%;
  margin: 0 auto;
  padding: 35px 0;
  flex-direction: column;
  align-content: center;
  background: #fff;
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  border-radius: 10px;
  &_container {
    padding: 35px;
  }
  input[type="button"],[type="submit"] {
    max-width:40%;
    margin: 0 auto;
  }
}
</style>