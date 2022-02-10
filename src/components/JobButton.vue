<template>
  <div class="text-center">
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
          İşi Başlat
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          İş Adı Girin
        </v-card-title>

           <v-text-field
            label="İş Adı"
            :rules="rules"
            hide-details="auto"
            class="job-input"
          ></v-text-field>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Onayla
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

  export default {
    name: 'Home',

  }
</script>
<style scoped>
.job-input{
  padding: 0 20px !important;
  margin: 20px 0 !important;
}
</style>