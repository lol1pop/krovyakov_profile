<template>
  <div class="container">
    <div class="menu">
      <div class="menu__logo"></div>
      <div class="menu__items"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Header'
})
</script>

<style scoped lang="scss">
@import "./src/assets/css/colors";
.menu {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 75px;
}
.menu__logo {
  width: 75px;
  margin-left: 16px;
  margin-right: 16px;
}
.menu__items {
  box-sizing: border-box;
  border-bottom: solid $D-dark-gray 1px;
  margin-left: 16px;
  margin-right: 16px;
  
  flex-grow: 1;
  max-width: 100%;
  align-self: stretch;
}
</style>