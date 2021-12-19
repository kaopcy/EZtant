<template>
    <div class="main-wrapper">
        <span class="line"></span>

        <div class="profile-detail">
            <div class="img-wrapper">
                <img :src="user.imageURL" alt="" />
            </div>
            <div class="text-wrapper">
                <h1>{{ user.firstName }} {{ user.lastName }}</h1>
                <h2>{{ user.department }} Engineering</h2>
                <span>{{ user.email }}</span>
            </div>
        </div>

        <div class="tab-selector-wrapper">
            <h3
                @click="selectedTab = 'information'"
                :class="{ selected: selectedTab === 'information' }"
            >
                INFO
            </h3>
            <h3
                @click="selectedTab = 'post'"
                :class="{ selected: selectedTab === 'post' }"
            >
                POST
            </h3>
        </div>

        <div class="tab" v-if=" selectedTab === 'information'">
            <div class="infomation" >
                <Info />
            </div>
        </div>
        <div class="posts" v-if=" selectedTab === 'post'">
            <Post :userID="user.id" />
            <router-link class="create link" to="/create" >
                <fa :icon="['fas' , 'plus-circle']" class="icon"></fa>
            </router-link>
        </div>

        
    </div>
</template>

<script>
import useAuth from "../../composables/useAuth";
import Info from '../../components/Profile/Info.vue'
import Post from '../../components/Profile/Post'
import { provide, ref } from "vue";
export default {
    name: "TeacherProfile",
    components:{
        Info,
        Post
    },
    setup() {
        const { user } = useAuth();
        const selectedTab = ref("information");
        provide('user' , user)
        
        return { user, selectedTab };
    },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
    font-family: var(--primary-font);
    color: var(--primary-font-color);
    width: 100%;
    min-height: 100vh;
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

.profile-detail {
    display: flex;
    margin-left: 6rem;
    width: 70%;
    @media (max-width:570px) {
        margin-left: unset;
        align-self: center;
        
    }
    .img-wrapper {
        width: 100px;
        height: 100px;
        margin-right: 2rem;
        @media (max-width: 570px) {
            width: 60px;
            height: 60px;
            margin-right: .75rem;
        }
        img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
    }
    .text-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        h1 {
            font-weight: 700;
            font-size: 1.75rem;
            @media (max-width:570px) {
                font-size: 1.25rem;
            }
        }
        h2 {
            font-weight: 500;
            font-size: 1.5rem;
            @media (max-width:570px) {
                font-size: 1rem;
            }
        }
        span {
            font-size: 1rem;
            font-weight: 400;
            color: rgb(20, 114, 255);
            text-decoration: underline;
            @media (max-width:570px) {
                font-size: .75rem;
            }
        }
    }
}

.tab-selector-wrapper {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    margin: 2rem;
    h3{
        padding: .5rem .5rem;
        margin: 0 .5rem;
        // border: 1px solid rgb(226, 226, 226);
        border-radius: 5px;
        position: relative;
        color: rgb(202, 202, 202);
        transition: .5s color;

        &:nth-child(1){
            &::after{
                content: '';
                position: absolute;
                width: 100%;
                height: 4px;
                background-color: rgb(97, 97, 97);
                bottom: 0px;
                left: 0;
                transform: translateX(130%);
                transition: .5s transform;
            }
            &.selected{
                &::after{
                    transform: translateX(0);
                }
            }
        }

        &.selected{
            color: rgb(56, 56, 56);
        }
    }
}

.tab {
    width: 70%;
    .infomation {

    }
    .posts {
    }
}

.create{
    width: 100%;
    height: 70px;
    background-color: rgb(255, 255, 255);
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .25s;
    outline: 1px solid rgb(228, 228, 228);
    .icon{
        font-size: 2rem;
        color: rgb(172, 172, 172);
    }
    &:hover{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;   
    }
    &:active{
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
}

</style>
