<template>
  <v-card
    class="header"
    width="256"
  >
    <v-navigation-drawer
      class="deep-purple accent-4"
      dark
      permanent
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link :to="item.path" class="header-items"> {{ item.name }}</router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { path: '/', name: 'Analiz Başlat', icon: 'mdi-view-dashboard' },
          { path: 'analizler', name: 'Analizler', icon: 'mdi-account-box' },
          { path: 'nesne-turleri', name: 'Nesne Türleri', icon: 'mdi-gavel' },
          { path: 'kullanici-yonetimi', name: 'Kullanıcı Yönetimi', icon: 'mdi-gavel' },
        ],
      }
    },
  }
</script>
<style>
.header{
    position:fixed;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
}

.header-items{
    color: #fff !important;
    text-decoration: none;
}
</style>