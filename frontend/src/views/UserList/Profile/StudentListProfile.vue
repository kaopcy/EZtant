<template>
<div class="main-wrapper">
    <span class="line"></span>
    <Loading  :Attr="{ width:'70%' , height: '40vh' }" v-if="isLoading"/>
    <section v-if="!isLoading && user">
        <div class="profile-card">
            <img :src="user.imageURL" alt="">
            <h1>{{user.first_name}} {{user.last_name}}</h1>
            <span>{{user.department}} Engineering</span>
            <span class="email">{{user.email}}</span>
        </div>

        <div class="posts">
            <Post :userID="user.id" />
        </div>

        <span>{{user}}</span>

    </section>
</div>
</template>

<script>
import { useRoute } from 'vue-router'

import useUserData from '../../../composables/useUserData'
import Post from '../../../components/Profile/Post'
import Loading from '../../../components/Loading/LoadingComponent.vue'
import { onMounted, provide } from '@vue/runtime-core'

export default {
    name: 'StudentListProfile',
    components:{
        Loading,
        Post
    },
    setup() {
        const { getUserByID , isLoading , user } = useUserData()
        const route = useRoute()

        onMounted(async ()=>{
            await getUserByID(route.params.id)
        })

        provide('user' , user);
        return { user , isLoading }
    }
}
</script>

<style lang="scss" scoped>
.main-wrapper{
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.line {
    width: 70%;
    height: 2px;
    background-color: rgb(233, 233, 233);
    border-radius: 2px;
    margin: 2rem 0;
}

section{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    margin-bottom: 1rem;
    padding: 2rem 1.5rem; 
    border-radius: 5px;
    border: 1px solid rgb(235, 235, 235);
    img{
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 1rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    h2{
        
    }
    span{
        &.email{
            color: rgb(0, 109, 199);
            text-decoration: underline;
        }
    }
}

</style>