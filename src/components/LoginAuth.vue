<template>
 <div class="login-page">
  <div class="login-page-items">
    <div class="login-page-img">
      <img src="../assets/logo/tredas-logo.png">
    </div>
   <form class="login" @submit.prevent="login">
     <h1>Hoşgeldiniz</h1>
     <input required v-model="email" type="email" placeholder="E-posta adresi"/>
     <input required v-model="password" type="password" placeholder="Şifre"/>
     <div class="remember-me">
        <div class="remember-box">
            <input type="checkbox" class="checkbox">
            <label class="remember">Beni Hatırla</label>
            <input type="hidden">
        </div>
     </div>
     <button type="submit" class="loginButton">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        Giriş Yap
     </button>
   </form>
   </div>
 </div>
</template>
<script>
  export default {
    data() {
      return {
        email: 'burak@gmail.com',
        password: '123123'
      }
    },
    methods: {
      login() {
        let email = this.email
        let password = this.password

        this.$store.dispatch('login', { email, password })
          .then(() => this.$router.push('/dashboard'))
          .catch(err => console.log(err))
      }
    }
  }
</script>
<style scoped="">
  .login-page{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    min-height: 100vh;
  }
  .login-page-items{
    max-width: 28rem;
  }
  .login h1{
    text-align: center;
    margin: 20px 0;
    color: #161616;
    line-height: 2.25rem;
    font-weight: 800;
    font-size: 1.875rem;
  }
  .login{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .login input{
    width: 100%;
    display: block;
    border: 1px solid #eee;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 4px;
    margin:0 0 10px 0;
  }
  .login input:last-child(){
    margin-top: 10px;
  }
  .login input:focus{
    outline: none;
  }
  .remember-me{
    margin-top: 20px;
  }
  .remember-box{
    display: flex;
    align-items:center;
  }
  .remember-me label{
    white-space: nowrap;
    margin: 0 0 0 5px;
    line-height: 1.25rem;
  }
  .remember-box input{
    display: inline-block;
    width: 1rem;
  }
  .loginButton{
    position: relative;
    width: 100%;
    padding: 10px 30px;
    color: #fff;
    background-color: #87c9e8;
    border-radius: 4px;
    margin: 20px 0 0 0;
  }
  .loginButton svg{
    width: 1rem;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translate(-0px, -50%)
  }
  .checkbox{
    margin: 0 !important;
  }
</style>