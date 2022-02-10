<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="lastname"
    class="elevation-1 other-list"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      dialog: true,
      dialogDelete: false,
      headers: [
        {
          text: 'Kullanıcı Adı',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Soyadı', value: 'lastname' },
        { text: 'E-Posta Adresi', value: 'email' },
        { text: 'Telefon Numarası', value: 'phone' },
        { text: 'İşlemler', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        lastname: 0,
        email: 0,
        phone: 0,
      },
      defaultItem: {
        name: '',
        lastname: 0,
        email: 0,
        phone: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Kullanıcıyı Düzenle'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Burak Can',
            lastname: 'Diziegri',
            email: 'burak.diziegri@ayvos.com',
            phone: '0541 907 34 18',
          },
          {
            name: 'Umut',
            lastname: 'Bektaş' ,
            email: 'umut.bektas@ayvos.com',
            phone: '0555 555 55 55',
          },
          {
            name: 'Oktay',
            lastname: 'Cennetoğlu',
            email: 'oktaycennetoglu@gmail.com',
            phone: '0555 555 55 55',
          },
          {
            name: 'Emrecan',
            lastname: 'Muslu',
            email: 'emrecanmuslu@gmail.com',
            phone: '0555 555 55 55',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style scoped>
.other-list{
  padding: 20px;
  overflow: auto;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #D5D9E1;
  -webkit-box-shadow: rgb(18 25 37 / 5%) 0px 1px 2px 0px;
  -moz-box-shadow: rgba(18, 25, 37, 0.05) 0px 1px 2px 0px;
  -ms-box-shadow: rgba(18, 25, 37, 0.05) 0px 1px 2px 0px;
  -o-box-shadow: rgba(18, 25, 37, 0.05) 0px 1px 2px 0px;
  box-shadow: rgb(18 25 37 / 5%) 0px 1px 2px 0px;
}
.v-application .text-h5{
  font-size: 1.2rem !important;
  display: flex ;
  align-items: center ;
  justify-content: center ;
}
.v-data-table__wrapper{
  border: 1px solid #D5D9E1 !important;
}
.v-data-table-header{
  background: #f1f2f7 !important;
}
</style>