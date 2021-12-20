<template>
<div class="home">
    <div class="home-lander">
        <div class="text-group">
            <h3>Find your</h3>
            <h1>TEACHER ASSISTANT.</h1>
            <h2>HOMEPAGE</h2>
            <span class="faculty">KMITL</span>
            <span class="by">by KIMINOTO!</span>
        </div>

        <div class="text-area">
            <section>
                <fa :icon="['fas','tasks']" class="icon"></fa>
                <h1>Compilation</h1>
                <span>Collect work for the entire faculty of assistant teachers in one place.</span>
            </section>
            <section>
                <fa :icon="['far','address-card']" class="icon"></fa>
                <h1>Easy</h1>
                <span>Help teachers to find teacher assistants easily and quickly just by posting.</span>
            </section>
            <router-link class="explore-btn link" :to="`/main-post/Computer`">
                EXPLORE
            </router-link>
        </div>
    </div>

    <h1 class="support-1">Supported Faculty</h1>
    <h2 class="support-2">We support almost every faculty in KMITL engineering.</h2>

    <div class="department-wrapper">
        <div class="department-card" v-for="department in departments" :key="department" >
            <div class="img-wrapper">
                <img :src="require(`/public/image/department/${department.src}`)" alt="">
            </div>
            <b>{{department.name.split(' ')[0]}}</b>
            <span>{{department.name.split(' ')[1]}}ing</span>
            <div class="icon-wrapper">
                <fa :icon="['fab' , 'facebook']" class="icon"></fa>
                <fa :icon="['fas' , 'globe']" class="icon"></fa>
            </div>
            <router-link class="visit-btn link" :to="`/main-post/${department.name.split(' ')[0]}`">
                Visit ->
            </router-link>
        </div>
    </div>

    <h1 class="support-1">Post Showcase</h1>
    <h2 class="support-2">We support almost every faculty in KMITL engineering.</h2>
    
    <Loading v-if="isLoading" />
    <SlideShow  v-if="!isLoading && allPosts" :posts="filteredPosts" />

    <div class="blank"></div>
</div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { store } from '../store'

import SlideShow from '../components/Home/PostSlideShow.vue'
import usePost from '../composables/usePost'
import Loading from '../components/Loading/LoadingComponent.vue'

export default {
    name: 'Home',
    components:{
        SlideShow,
        Loading,
    },
    setup(){
        const { isLoading , getAllPost } = usePost()
        const allPosts = ref(null);
        const departments = ref(store.state.departmentTemplate)

        onMounted(async ()=>{
            allPosts.value = await getAllPost({ orderBy: 'timestamp' , sortBy: 'asc' })
        })

        const filteredPosts = computed(()=> allPosts.value.slice(0,6) )

        return { departments , allPosts , filteredPosts , isLoading }
    }
}
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;

    .home-lander{
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        height: calc(110vh);
        align-items: center;
        justify-content: center;
    }
}

.text-group{
    padding: 3rem;
    display: flex;
    flex-direction: column;
    h1{
        font-size: 5rem;
        line-height: 3.5rem;
    }
    h2{
        color: #b9b9b9;
    }
    h3{
        font-size: 5rem;
        line-height: 6rem;
        color: rgb(208, 225, 247);
    }
    .faculty{
        align-self: flex-end;
        line-height: -2rem;
        font-size: 3rem;
        font-weight: 200;
        background-color: rgb(241, 222, 222);
        color: #fff;
        padding: 0 1rem;
        margin-top: -1rem;
    }
    .by{
        font-size: .7rem;
        color: rgb(0, 0, 0);
        font-weight: 500;
        // align-self: flex-end;
    }
}

.text-area{
    display: flex;
    align-self: flex-start;
    margin-left: 3rem;
    margin-top: 2rem;
    margin-bottom: 10rem;
    section{
        color: #303030;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
        max-width: 300px;
        transition: .5s ;
        padding: 2rem;
        &:hover{
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            h1{
                &::after{
                    transform: scaleX(100%);
                }
            }
        }
        .icon{
            color: #303030;
            font-size: 1.245rem;
        }
        
        h1{
            cursor: default;
            font-size: 1.35rem;
            position: relative;
            &::after{
                content: '';
                position: absolute;
                width: 100%;
                height: 3px;
                left: 0;
                bottom: -5px;
                background-color: rgb(146, 146, 146);
                transform: scaleX(0);
                transition: .5s;
                transform-origin: left;
            }
        }
        span{
            cursor: default;
            line-height: 1.5rem;
            font-size: .8rem;
            font-weight: 500;
        }
    }

    .explore-btn {
        cursor: pointer;
        align-self: flex-end;
        padding: .5rem 1rem;
        margin-bottom: 2rem;
        margin-left: 2rem;
        outline: 1.5px solid #000;
        transition: .5s;
        position: relative;
        color: transparent;
       
        &::before{
            content: '';
            position: absolute;
            inset: 0;
            background: #303030;
            transform: scaleX(0);
            transform-origin: left;
            transition: .5s;
        }

        &::after{
            content: 'EXPLORE';
            color: #000;
            transition: color .5s;
            transition-delay: .1s;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50% , -50%);
        }

        &:hover{
            outline: 1.5px solid rgb(255, 255, 255);
            
            &::before{
                transform: scaleX(100%);
            }
            
            &::after{
                color: #fff;
            }

        }
    }

}

.support-1{
    font-size: 4rem;
    margin-bottom: 2rem;

}
.support-2{
    color: rgb(146, 146, 146);
    font-weight: 400;
    margin-bottom: 4rem;
}

.department-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    gap: 1.2rem;
    margin-bottom: 4rem;
    .department-card{
        position: relative;
        min-height: 270px;
        width: 270px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem 1rem;
        border-radius: 4px;

        &:nth-child(8n+1){
            .img-wrapper {
                background-color: rgba(0, 118, 255, 0.9);
            }
            .visit-btn{
                background-color: rgba(0, 118, 255, 0.9);
            }
        }
        &:nth-child(8n+2){
            .img-wrapper {
                background-color: #7928ca;
            }
            .visit-btn{
                background-color: #7928ca;
            }
        }
        &:nth-child(8n+3){
            .img-wrapper {
                background-color: #db47bd;
            }
            .visit-btn{
                background-color: #db47bd;
            }
        }
        &:nth-child(8n+4){
            .img-wrapper {
                background-color: #000000;
            }
            .visit-btn{
                background-color: #000000;
            }
        }
        &:nth-child(8n+5){
            .img-wrapper {
                background-color: #000000;
            }
            .visit-btn{
                background-color: #000000;
            }
            
        }
        &:nth-child(8n+6){
            .img-wrapper {
                background-color: rgba(0, 118, 255, 0.9);
            }
            .visit-btn{
                background-color: rgba(0, 118, 255, 0.9);
            }
            
            
        }
        &:nth-child(8n+7){
            .img-wrapper {
                background-color: #7928ca;
            }
            .visit-btn{
                background-color: #7928ca;
            }
        }
        &:nth-child(8n+8){
            .img-wrapper {
                background-color: #db47bd;
            }
            .visit-btn{
                background-color: #db47bd;
            }
        }

        .img-wrapper {
            width: 80px;
            height: 80px;
            background-color: rgba(0, 118, 255, 0.9);
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
            img {
                width: 60%;
                height: 60%;
            }
        }
        
        b{
            font-size: 1.75rem;
            color: #303030;
        }
        
        span{
            color: rgb(170, 170, 170);
        }
        
        .icon-wrapper{
            margin-top: 1rem;
            display: flex;
            gap: .8rem;
            .icon{
                font-size: 1.25rem;
                color: rgb(134, 134, 134);
            }
        }

        .visit-btn{
            width: 80%;
            background-color: rgba(0, 118, 255, 0.9);
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            border-radius: 5px;
            text-align: center;
            color: #fff;
            padding: .8rem;
            margin-top: 2rem;
            cursor: pointer;
        }

    }
}

.blank{
    margin-top: 3rem;
    height: 5rem;
    background-color: #fff;
}

</style>


