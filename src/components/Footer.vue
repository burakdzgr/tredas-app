<template>
  <footer class="footer">
    <v-container>
      <div class="footer-items">
        <span>Powered by Ayvos | </span>
        <a href="https://www.ayvos.com/">
          <img src="../assets/img/ayvos-white-logo.png">
        </a>
      </div>
    </v-container>
  </footer>
</template>

<style>
.footer{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-top: 1px solid rgb(255 255 255 / 20%);
  background-color: #121925;
}
.footer-items{
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-items span{
  color: #fff;
  font-size: 1rem;
}
.footer-items a{
  display: inline-block;
  width: auto;
  padding:0 0 0 5px !important;
}
.footer-items a:hover{
  background-color: inherit !important;
  color: inherit !important;
}
.footer-items a img{
  width: 100px;
  object-fit: contain;
  background-color: inherit !important;
  background: inherit !important;
}
</style>