<template>
  <v-app>
    <div class="wrapper">
      <v-main class="wrapper-content">
        <router-view/>

      </v-main>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

*{
  font-family: 'Inter', sans-serif;
}
.wrapper{
  display: flex !important;
  flex-direction: row !important;
  background-color: #ecf0f4;
  height: 100%;
  border-radius: 30px 0 0 30px;
}
.wrapper-content{
  position: relative;
}
.v-main__wrap{
  position: inherit !important;
}
</style>