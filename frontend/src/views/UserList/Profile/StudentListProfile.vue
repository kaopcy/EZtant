<template>
<div class="main-wrapper">
    <Loading  :Attr="{ width:'70%' , height: '40vh' }" v-if="isLoading"/>
    <section v-if="!isLoading">
        <img :src="user.imageURL" alt="">
        <span >{{user}}</span>   
    </section>
</div>
</template>

<script>
import { useRoute } from 'vue-router'

import useUserData from '../../../composables/useUserData'
import Loading from '../../../components/Loading/LoadingComponent.vue'

export default { 
    name: 'StudentListProfile',
    components:{
        Loading,
    },
    setup() {
        const { getUserByID , isLoading , user } = useUserData()
        const route = useRoute()
        
        getUserByID(route.params.id)

        return { user , isLoading }
    }
}
</script>

<style lang="scss" scoped>
.main-wrapper{
    width: 100%;
    min-height: 100vh;
}
</style>