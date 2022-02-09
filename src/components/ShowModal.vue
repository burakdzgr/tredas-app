<template class="modal">
    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Eldiven Kullanılmamış Görsel
        </v-card-title>

        <v-img
            src="https://toptankece.com/image/cache/data/urunler/figur/hayvanlar/keceden-inek-figuru-susu-1500x1500.jpg"
        >

        </v-img>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>