<template>
<div class="main-wrapper">
    <span class="line"></span>
    <Loading  :Attr="{ width:'70%' , height: '40vh' }" v-if="isLoading"/>
    <section v-if="!isLoading && user">
        <div class="profile-card">
            <div class="left">
                <img :src="user.imageURL" alt="">

            </div>
            <div class="right">
                <h1>{{user.first_name}} {{user.last_name}}</h1>
                <span class="year">{{user.student_id}} {{user.student_year}}D</span>
                <span>{{user.department}} Engineering</span>
                <span class="email">{{user.email}}</span>
            </div>
        </div>

        <div class="posts">
            <Post :userID="user.id" :postData="requestedPost" :postLoading="postLoading" />
        </div>
    </section>
</div>
</template>

<script>
import { onMounted, provide } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

import useUserData from '../../../composables/useUserData'
import usePost from '../../../composables/usePost'

import Post from '../../../components/Profile/Post'
import Loading from '../../../components/Loading/LoadingComponent.vue'


export default {
    name: 'StudentListProfile',
    components:{
        Loading,
        Post
    },
    setup() {
        const { getUserByID , isLoading , user } = useUserData()
        const {requestedPost , isLoading:postLoading , getRequestedPostbyID } = usePost();
        const route = useRoute()

        onMounted(async ()=>{
            await getUserByID(route.params.id)
            await getRequestedPostbyID(route.params.id)
        })

        provide('user' , user);
        return { user , requestedPost , isLoading , postLoading }
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
    align-items: center;
    background-color: #fff;
    margin-bottom: 1rem;
    padding: 2rem 3rem; 
    border-radius: 5px;
    border: 1px solid rgb(235, 235, 235);
    gap: 1.5rem;
    .left{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: 1rem;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }

    }
    .right{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h1{
            font-size: 1.65rem;
            margin-bottom: .5rem;
        }
        span{
            color: rgb(117, 117, 117);
            &.year{
                color: rgb(59, 59, 59);
                font-weight: 600;
            }
            &.email{
                color: rgb(0, 109, 199);
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
}

</style>