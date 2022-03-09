<script setup lang="ts">
import MainPage from '@/views/MainPage.vue';
</script>

<template>
  <div class="layout">
    <main class="container">
      <header>
      </header>
      <MainPage/>
    </main>
  </div>
</template>

<style lang="scss">
@import 'assets/css/colors';
@import "assets/css/mixin";
main {
  background-color: $dark;
  @include box-shadow(0px 0px 30px 0px $D-dark-purple);
  min-height: 1360px; /*TODO: replace 100%*/
  padding: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 1800px; /*TODO: replace 100%*/
  background-color: $dark-background;
}
</style>
