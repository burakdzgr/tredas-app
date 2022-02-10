<template>
    <div class="header">
        <div class="header-items">
            <div class="hamburger-icon">
                <button type="button">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
            <div class="header-user-action">
                <ul>
                    <li class="user-action">
                        <button type="button" v-on:click="isHidden = !isHidden">
                            <img src="../assets/img/admin.jpg" alt="">
                        </button>
                        <ul v-if="isHidden" class="user-action-sub">
                            <li>
                                <button  type="button" class="logout">Çıkış Yap</button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            isHidden: false,
        }
    },
    methods: {
      logout: function() {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
}
</script>
<style scoped>
.header{
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    padding: 0 25px 0 325px;
    width: 100%;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    z-index: 40;
}
.header-items{
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header-user-action ul li{
    list-style: none;
}
.header-user-action ul li img{
    width: 32px;
    height: 32px;
    border-radius: 100%;
    object-fit: cover;
}
.user-action{
    position: relative;
}
.user-action-sub{
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #fff;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding: 0 !important;
}
.user-action-sub::before{
    content: '';
    position: absolute;
    top: -7px;
    right: 10px;
    display: inline-block !important;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #eee;
    border-left: 7px solid transparent;
    border-bottom-color: rgba(0, 0, 0, 0.2);
}
.user-action-sub li{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #eee;
}
.user-action-sub li button{
    line-height: 24px;
    color: #333333;
    display: inline-flex;
    white-space: nowrap;
    padding: 11px 30px;
    text-decoration: none;
    transition: 0.5s;
    margin-bottom: 2px;
}
</style>