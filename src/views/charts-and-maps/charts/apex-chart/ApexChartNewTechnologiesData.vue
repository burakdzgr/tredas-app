<template> 
<div>
   <div>
    <vue-apex-charts
      type="scatter"
      height="400"
      :options="scatterChart.chartOptions"
      :series="scatterChart.series"
  />
 </div>
 <div>
    <ShowModal v-model="dialog" class="modal"></ShowModal>
 </div>
</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import ShowModal from '@/components/ShowModal'

export default {
  components: {
    VueApexCharts,
    ShowModal
  },
  data() {
    return {
      ShowModal: true,
      scatterChart: {
        series: [
          {
            name: 'Angular',
            data: [
              [5.4, 170],
              [5.4, 100],
              [6.3, 170],
              [5.7, 140],
              [5.9, 130],
              [7.0, 150],
              [8.0, 120],
              [9.0, 170],
              [10.0, 190],
              [11.0, 220],
              [12.0, 170],
              [13.0, 230],
            ],
          },
          {
            name: 'Vue',
            data: [
              [14.0, 220],
              [15.0, 280],
              [16.0, 230],
              [18.0, 320],
              [17.5, 280],
              [19.0, 250],
              [20.0, 350],
              [20.5, 320],
              [20.0, 320],
              [19.0, 280],
              [17.0, 280],
              [22.0, 300],
              [18.0, 120],
            ],
          },
          {
            name: 'React',
            data: [
              [14.0, 290],
              [13.0, 190],
              [20.0, 220],
              [21.0, 350],
              [21.5, 290],
              [22.0, 220],
              [23.0, 140],
              [19.0, 400],
              [20.0, 200],
              [22.0, 90],
              [20.0, 120],
            ],
          },
        ],
        chartOptions: {
          chart: {
            events: {
              markerClick: function(a, b, c) {
                console.info(c);
                alert(c.w.globals.seriesNames[c.seriesIndex])
              },
            },
            zoom: {
              enabled: false,
              type: 'xy',
            },
            toolbar: {
              show: false,
            },
          },
          grid: {
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          colors: ['#FFB400', '#9155FD', '#56CA00'],
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
          },
          xaxis: {
            tickAmount: 10,
            labels: {
              formatter(val) {
                return parseFloat(val).toFixed(1)
              },
            },
          },
          yaxis: {
            // opposite: isRtl,
          },
        },
      }
    }
  },
}
</script>
<style scoped>
.modal{
    display: none !important;
}
</style>