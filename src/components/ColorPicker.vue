<template>
  <v-card>
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
          <label for="name">Adınız</label>
          <input type="text" name="name" autocomplete="given.name" class="required">
        </div>
        <div class="color-picker">
          
        </div>
        <div class="action">
          <a href="#bitir" role="menuItem"> Onayla ve Bitir</a>
        </div>
      </div>
    </div>
    </v-col>

    </v-row>
  </v-card>
</template>

<style scoped>
.object-sidebar{
  padding: 40px 30px;
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
  padding: 15px;
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
  padding:11px 20px;

}
.action a{
  color: #fff !important;
  outline: none;
  display: block;
  font-size: .9em;
  font-weight: 700;
  border-radius: 4px;
  background: #42BC8B;
  display: inline-block !important;
  width: auto;
  text-align: end;
}
</style>