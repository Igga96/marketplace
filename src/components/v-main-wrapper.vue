<template>
  <vHeader />
    <hr>
  <div class="v-main-wrapper">
    <router-view/>
  </div>
</template>
<script>
import vHeader from "../components/v-header.vue";
export default {
  name: "vMainWrapper",
  components: {
    vHeader,
  },
  props: {},
  data() {
    return {};
  },
  computed: { },
  methods: {},
  watch: {},
};
</script>    
<style>
.v-main-wrapper {
  margin: 0 auto;
  padding: 0 40px;
  background-color: #e6e6e6;
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  color: #363636;
}
</style>