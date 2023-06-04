<template>
  <vMainWrapper/>
</template>

<script>
import vMainWrapper from "../src/components/v-main-wrapper.vue";

export default {
  name: "App",
  components: {
    vMainWrapper
  }
};
</script>

<style>
#app{
  background-color: #e6e6e6;
}

@import url("https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Ubuntu:wght@300;400;500;700&display=swap");
</style>
