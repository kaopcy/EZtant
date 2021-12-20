<template>
<div class="slide-show">
    <fa class="icon" :icon="['fas' , 'chevron-left']" @click="current--"></fa>
    <transition-group >
        <div v-for="post in getPostbyCurrent" :key="post" class="card" >
            <div class="head">
                <img :src="post.author.imageURL" alt="">
                <div class="text">
                    <h1>{{post.author.first_name}} {{post.author.last_name}}</h1>
                    <span>{{post.timestamp}}</span>
                </div>
            </div>
            <section>
                <h1>Subject: <span style="color: rgb(145, 145, 145); font-weight:400">{{post.subject_name}}</span></h1>
                <h1>SubjectID: <span style="color: rgb(145, 145, 145); font-weight:400">{{post.subject_id}}</span></h1>
                <h1>Number/Group: <span style="color: rgb(145, 145, 145); font-weight:400">{{post.max_requested}}</span></h1>
            </section>

            <div class="btn">View Post -></div>

        </div>
    </transition-group>
    <fa class="icon" :icon="['fas' , 'chevron-right']" @click="current--"></fa>

</div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import gsap from "gsap";

export default {
    props:{
        posts: {
            type: Array,
            require: true,
        }
    },
    setup(props) {
        const current = ref(100)
        const getPostbyCurrent = computed(()=> {
            if (!props.posts) return null
            const cur = current.value
            let pool = [ props.posts[(cur)%6] , props.posts[(cur+1)%6] , props.posts[(cur+2)%6] ] ;
            return pool
        });
        
        // animation
        const beforeEnter = (el) => {
            el.style.opacity = 0;
            el.style.transform = "translateX(100px)";
        };
        const enter = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 0.7,
                onComplete: done,
                delay: el.dataset.index * 0.1,
            });
        };

        return { current , getPostbyCurrent , beforeEnter, enter, }  
    }
}
</script>
<style lang="scss" scoped>
.slide-show{
    width: 70%;
    height: 330px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    gap: 1rem;
}
.card{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: .5s all ;
    border-radius: 5px;
    min-height: 270px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 30px 0;
    .head{
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: .5rem;
        }
        .text{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h1{
                font-size: 1.5rem;
                font-weight: 600;
                color: #303030;
            }
            span{

            }
        }
    }
    section{
        h1{
            font-size: 1rem;
            font-weight: 500;
            color: #303030;
        }
    }
}

.icon{
    font-size: 1.5rem;
    color: #303030;
    cursor: pointer;
    margin: 1rem;
}

.btn{
    margin-top: 2rem;
    padding: .5rem;
    width: 70%;
    outline: 1px solid rgb(71, 71, 71);
    text-align: center;
    border-radius: 5px;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        inset: 0;
        background-color: #000;
        transition: .5s all ;
        transform: scaleX(0);
        transform-origin: left;
    }
    &::after{
        content: 'View Post ->';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        color: #000;
        transform: translate(-50% , -50%);
    }
    &:hover{
        &::before{
            transform: scaleX(100%);
        }
        &::after{
            color: #fff;
        }
    }

}

</style>