<template>
  <v-card class="color-picker-content">
    <v-row>
      <v-col
      cols="12"
      md="6"
      lg="3"
    >
    <div class="object-sidebar">
      <ul>
        <li>
          <span>Nesne Oluştur</span>
        </li>
      </ul>
    </div>
    </v-col>
    <v-col
      cols="12"
      md="6"
      lg="9"
    >
    <div class="object-content">
      <h1 class="user-add-form-content-head">
        Nesne Adı ve Rengini Belirtin
      </h1>
      <div class="form-group">
        <div class="form-element">
          <label for="name">Nesne Adını Girin</label>
          <input type="text" name="name" autocomplete="given.name" class="required">
        </div>
        <div class="form-element">
          <div class="color-picker">
          <div class="form__field">
            <div class="form__label">
              <strong>Lütfen nesneye ait renk seçin:</strong>
            </div>
            <div class="form__input">
              <swatches v-model="color" colors="text-advanced" popover-to="left"></swatches>
            </div>
          </div>
        </div>
        </div>
        <div class="action">
          <a href="#bitir" role="menuItem" @click="save"> Nesne Ekle</a>
        </div>
      </div>
    </div>
    </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <ObjectList></ObjectList>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import Swatches from 'vue-swatches'
import ObjectList from "@/components/ObjectList";
 export default {
    components: {ObjectList, Swatches }, // window.VueSwatches.default - from CDN
    data () {
      return {
        color: '#1CA085'
      }
    },
    methods: {
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    }
  }
</script>
<style scoped>
.color-picker-content{
  margin: 152px 0 0;
}
.object-sidebar{
  padding: 40px 30px;
}
.vue-swatches__container:not(.vue-swatches--inline)>.vue-swatches__wrapper{
  display: flex !important;
  flex-wrap: wrap !important;
}
.object-sidebar ul li{
  padding: 20px 0 20px 42px;
  position: relative;
  counter-increment: steps-counter;
  list-style: none;
}
.object-sidebar ul li span::before{
    content: counter(steps-counter);
    top: 50%;
    left: 0;
    width: 32px;
    height: 32px;
    display: flex;
    font-size: .9em;
    color: #607192;
    font-weight: 700;
    line-height: 100%;
    position: absolute;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    border: 1px solid #D5D9E1;
    transform: translate(0, -50%);
    color: #fff;
    background: #0f5ef7;
    border-color: #0f5ef7;
}
.object-sidebar span{
  color: #0f5ef7;
  font-size: .9em;
  font-weight: 700;
  text-transform: uppercase;
}
.user-add-form-content{
    padding: 40px 30px;
  border-left: 1px solid #D5D9E1;

}
.object-content{
  padding: 45px 0;
}
.object-content-head{
  margin: 0 0 30px;
  color: #121925;
  font-size: 1.3em;
  font-weight: 700;
}
.form-group{
  margin: -15px;
}
.form-element{
  position: relative;
  padding: 15px 50px 15px 15px;
  width: 100%;
}
.form-element label:first-child{
  margin: 0 0 10px;
  color: #607192;
  font-size: .7em;
  font-weight: 700;
  text-transform: uppercase;
}
.form-element input{
  padding: 11px 20px;
    width: 100%;
    outline: none;
    color: #121925;
    font-size: .9em;
    font-weight: 400;
    border-radius: 4px;
    border: 1px solid #D5D9E1;
    transition: border .2s ease-in-out;
}
.action{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding:11px 50px;

}
.action a{
  color: #fff !important;
  outline: none;
  padding: 13px 20px;
  font-size: .9em;
  font-weight: 700;
  border-radius: 4px;
  background: #42BC8B;
  display: inline-block !important;
  width: auto;
  text-align: end;
  text-decoration: none;
}
.vue-swatches__wrapper{
  display: flex !important;
  flex-wrap: wrap !important;
}
.form-label{
  margin: 0 0 10px 0 !important;
}
</style>