<template>
  <section>
    <Intro/>
  </section>
</template>

<script lang="ts">
import Intro from '@/components/Intro.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainPage',
  components: { Intro }
})
</script>

<style scoped lang="scss">

</style>