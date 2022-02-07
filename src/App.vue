<template>
  <v-app>
    <div class="wrapper">
    <Header></Header>
    <v-main class="wrapper-content">
      <router-view/>
    </v-main>
  </div>
  </v-app>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    //
  }),
};
</script>
<style scoped>
.wrapper{
  display: flex !important;
  flex-direction: row !important;
}
.wrapper-content{
  padding: 100px !important;
}
</style>