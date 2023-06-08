<template>
  <div class="v-select">Фильтрация по:
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="areOptionsVisible || isExpanded">
      <p
        v-for="option in options"
        :key="option.filterType"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>
    <script>
export default {
  name: "vSelect",

  data() {
      return {
        areOptionsVisible: false
      }
    },
  props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: String,
        default: ''
      },
      isExpanded: {
        type: Boolean,
        default: false
      }
    },
  selected: {
    type: String,
    default: "",
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
};
</script>    
    <style lang="scss">
.v-select {
  position: relative;
  width: 200px;
  cursor: pointer;
  text-align: left;
  p {
  margin: 0;}
}
.title {
  border: solid 1px #aeaeae;
  padding: 8px;
}
.options {
  border: solid 1px #aeaeae;
  background: #ffffff;
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  padding: 8px;
}

.options p:hover {
  background: #e7e7e7;
}
</style>