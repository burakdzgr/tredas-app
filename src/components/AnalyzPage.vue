<!--suppress ALL -->
<template>
 <div class="analiz-content">
   <v-card class="card-content">
    <v-container>
      <div class="analyz-head">
        <span>Analiz Listesi</span>
      </div>
      <v-row class="tabs-content">
        <v-col md="5" lg="4" cols="12" class="tab-list">
          <v-tabs
              v-model="tab"
              vertical
          >
            <v-tab
                v-for="(item, i) in AnalyzFilter"
                :key="i"
                class="analyz-filter-tab-menu-item"
            >
              {{ item.name }}
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col md="7" lg="8" cols="12" class="tab-charts-content">
          <v-tabs-items v-model="tab">
            <v-tab-item class="bg-transparent">
              <v-card-text>
                <apex-chart-new-technologies-data></apex-chart-new-technologies-data>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <router-view></router-view>
 </div>
</template>

<script>

import { mdiCalendarBlankOutline } from '@mdi/js'
import ApexChartNewTechnologiesData from '@/views/charts-and-maps/charts/apex-chart/ApexChartNewTechnologiesData.vue'

export default {
  components: {
    ApexChartNewTechnologiesData,
  },
  data() {
    return {
      tab: 0,
      AnalyzFilter: [
        { id: '1', name: 'Bolu Tüneli 2.Etap Kayıt', desc: 'Lorem impsum dolor sit amet' },
        { id: '2', name: '15 Temmuz Şehitler Köprüsü Asya Giriş Kaydı', desc: 'Lorem impsum dolor sit amet' },
        { id: '3', name: '15 Temmuz Şehitler Köprüsü Avrupa Giriş Kaydı', desc: 'Lorem impsum dolor sit amet' },
        { id: '4', name: 'İstanbul Taksim Meydan Kaydı', desc: 'Lorem impsum dolor sit amet' },
        { id: '5', name: 'İstanbul Beşiktaş Sahil Kaydı', desc: 'Lorem impsum dolor sit amet' },
      ],
    }
  },
  setup() {
    return {
      icons: {
        mdiCalendarBlankOutline,
      },
    }
  },
}
</script>
<style>
.tabs-content{
  display:flex;
  flex-wrap: nowrap !important;
}
.theme--light.v-tabs > .v-tabs-bar{
  background:none !important;
}
.card-content{
  background: none !important;
  box-shadow: none !important;
  padding: 100px 0 0 0;
}
.analyz-filter-tab-menu-item{
  width: 100% !important;
  max-width: 100% !important;
  text-transform: none !important;
  text-align: left;
  justify-content: flex-start !important;
}
.charts-tab-item{
  background-color: #ffF;
}
.charst-content{
  background-color: #fff;
  margin-left: 50px;
}
.theme--light.v-tabs.v-tabs--vertical .v-slide-group__wrapper{
  border-left: thin solid rgba(94, 86, 105, 0.14);
  border-right: none;
}
.v-tabs.v-tabs--vertical .v-tabs-slider-wrapper{
  left: 0 !important;
}
.tab-list, .tab-charts-content{
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
.tab-list{
  margin: 0 50px 0 0;
  border-radius: 4px !important;
}
.tab-charts-content{
  border-radius: 4px !important;
}
.analyz-head{
  padding: 0 0 50px 0 !important;
}
.analyz-head span{
  font-size: 20px;
  font-weight: 500;
  color: #444;
  margin-bottom: 0;
}
</style>