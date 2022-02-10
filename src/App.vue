<template>
  <v-app>
    <div class="wrapper">
    <Sidebar></Sidebar>
    <v-main class="wrapper-content">
      <Header></Header>
      <v-container>
        <router-view/>  
      </v-container>
    </v-main>
  </div>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Sidebar,
    Header
  },
  methods: {

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
  background-color: #ecf0f4;
  height: 100%;
}
.wrapper-content{
  padding: 100px 0 0 25px !important;
}
</style>