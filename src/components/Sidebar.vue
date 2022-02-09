<template>
  <v-card
    class="sidebar"
    :class="radius"
    width="300px"
    elevation="12"
    
  >
    <v-navigation-drawer
    >
    <div class="sidebar-logo">
        <router-link to="/">
          <img src="@/assets/logo/tredas-logo.png" alt="">
        </router-link>
    </div>
     <ul class="sidebar-menu">
        <li link class="sidebar-menu-item">
            <div>
              <v-dialog
                  v-model="dialog"
                  width="500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="red lighten-2"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Analiz Başlat
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                      İş Adı Girin
                    </v-card-title>

                    <v-text-field
                      label="İş tanımı"
                      :rules="rules"
                      hide-details="auto"
                      class="job-input"
                    >
                    </v-text-field>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                      >
                        İş Başlat
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
            </div>
        </li>
        <li>
          <router-link to="analizler">
            Analizler
          </router-link>
        </li>
        <li>
          <router-link to="nesne-turleri">
            Nesne Türleri
          </router-link>
        </li>
        <li>
          <button class="submenu-link" v-on:click="isHidden = !isHidden">
            Kullanıcı Yönetimi
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <ul v-if="isHidden" class="sidebar-submenu">
              <li>
                <router-link to="kullanici-listesi" class="sidebar-submenu-item">
                  Kullanıcı Listesi
                </router-link>
              </li>
              <li>
                <router-link to="kullanici-ekle" class="sidebar-submenu-item">
                  Kullanıcı Ekle
                </router-link>
              </li>
            </ul>
        </li>
     </ul>
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
          isHidden: false,
          rules: [
          value => !!value || 'Required.',
        ],
      }
    },
    methods(){

    }
  }
</script>
<style>
.sidebar{
    position:fixed;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #fff !important;
    z-index: 50;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;

}
.sidebar-logo{
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sidebar-logo a{
  padding: 0 !important;

}
.sidebar-logo a:hover{
  background-color: #fff !important;
}
.sidebar-logo img{
  width: 100%;
  height: 75px;
  object-fit: contain;
}
.sidebar-menu-item{
  list-style: none;
}
.header-item-link{
  color: #161616 !important;
  text-decoration: none;
  width: 100%;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 0 10px 24px;
  transition: 200ms all;
  border-radius: 12px;
}
.header-item-link:hover {
  background-color: #eee;
}
.job-input{
  padding: 0 20px;
}
.sidebar-menu {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  width: 100%;
  padding: 20px;
}
.sidebar-menu li{
  padding: 10px 0 !important;
  list-style: none;
  width: 100%;
}
.v-application a, .submenu-link{
  width: 100%;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  color: #161616 !important;
  background-color: #fff;
  padding: 10px 15px;
  display: block;
  text-align: left;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  border-radius: 4px;

}
.v-application a:hover, .submenu-link:hover{
  background-color: #87c9e8;
  color: #fff !important;
}
.sidebar-submenu{
  margin: 10px 0 0;
  padding-left: 0 !important;
  background-color: #eee;
  border-radius: 4px;
}
.sidebar-submenu-item{
  font-size: .85rem;
  text-transform: inherit;
  text-decoration: none;
}
.sidebar-submenu li a{
  background-color: #eee !important;
}
.sidebar-submenu li a:hover{
  background-color: #eee !important;
  color: #161616 !important;
}
.submenu-link svg{
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
.theme--light.v-navigation-drawer{
  width: 300px !important
}
</style>