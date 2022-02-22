<template>
  <v-card
    class="sidebar"
    width="300px"

  >
    <v-navigation-drawer class="sidebar-bg">
    <div class="sidebar-logo">
        <router-link to="/dashboard">
          <img src="@/assets/logo/tredas-logo.png" alt="">
        </router-link>
    </div>
      <div class="sidebar-menu">
        <ul>
          <li link class="sidebar-menu-item">
            <div>
              <v-dialog
                  width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      class="job-start-btn"
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
                        class="job-btn"
                        color="primary"
                        text
                    >
                      İş Başlat
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </li>
          <li>
            <router-link to="analizler" class="sidebar-nav-link">
              Analizler
            </router-link>
          </li>
          <li>
            <router-link to="nesne-turleri" class="sidebar-nav-link">
              Nesne Türleri
            </router-link>
          </li>
          <li>
            <button class="submenu-link sidebar-nav-link" v-on:click="isHidden = !isHidden" >
              Kullanıcı Yönetimi
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <ul v-if="isHidden" class="sidebar-submenu">
              <li>
                <router-link to="kullanici-listesi" class="sidebar-nav-link">
                  Kullanıcı Listesi
                </router-link>
              </li>
              <li>
                <router-link to="kullanici-ekle" class="sidebar-nav-link">
                  Kullanıcı Ekle
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
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
  position: absolute;
  padding: 0 30px 0 0;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  overflow-y: hidden;
  background: #121925 !important;
}
.sidebar-bg{
  background-color: #121925 !important;
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
.sidebar-logo img{
  width: 100%;
  object-fit: contain;
  padding: 60px 40px 40px;
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
.job-start-btn{
  padding: 13px 20px !important;
  width: 100%;
  display: block;
  background-color: #0f5ef7 !important;
  color: #fff !important;
  justify-content: flex-start !important;
  text-transform: inherit !important;
  -webkit-border-radius: 8px !important;
  -moz-border-radius: 8px !important;
  -ms-border-radius: 8px !important;
  -o-border-radius: 8px !important;
  border-radius: 8px !important;
  font-weight: 500;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  height: auto !important;
}
.job-input{
  padding: 0 20px;
}
.sidebar-menu {
  padding: 20px 20px 17px;
  height: 681px;
  overflow-y: auto;
}
.sidebar-menu ul{
  margin:  20px 0 0;
  padding: 0 !important;
}
.sidebar-menu li{
  padding: 3px 0;
  list-style: none;
  width: 100%;
}
.sidebar-nav-link{
  display: block;
  padding: 13px 20px;
  color: #607192 !important;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 500;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 100%;
  text-align: left;
}
.sidebar-nav-link:hover{
  color: #fff !important;
  background: #0f5ef7;
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