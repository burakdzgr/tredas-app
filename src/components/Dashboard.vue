<template>
    <v-app>
        <Sidebar></Sidebar>
        <Footer></Footer>
    </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default {
    components: {
        Sidebar,
        Footer
    },
data () {
    return {
        username:this.$route.params.username
    }
},
methods: {
    logout() {
    this.$router.replace({name:'login'})
    }
}
}
</script>