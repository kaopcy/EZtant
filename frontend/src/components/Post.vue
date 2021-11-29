<template>
    <div class="post" ref="postRef">
        <transition name="fade">
            <router-link class="see-more-wrapper" v-if="isHover" :to="`/focus-post/${post.subject}`">
                <div class="see-more-btn">
                    See more
                </div>
            </router-link>
        </transition>

        <div class="banner">
            <div class="author-info-wrapper">
                <img src="" alt="">
                <div class="author-info">
                    <h1>{{post.author}}</h1>
                    <span>{{post.timeStamp}}</span>
                </div>
            </div>
            <div class="interact-info-wrapper">
                <div class="wrapper">
                    <fa class="icon" :icon="['fas' , 'heart']" />
                    <span>15</span>
                </div>
                <div class="wrapper">
                    <fa class="icon" :icon="['fas' , 'user-friends']" />
                    <span>25</span>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="detail-wrapper">
                <span>{{post.detail}}</span>
            </div>
            <div class="table-wrapper">
                <Table :schedule="post.schedule" />
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted , ref } from '@vue/runtime-core'

import Table from '../components/Table.vue'

export default {
    name: 'Post',

    components:{
        Table,
    },

    props: {
        post: {
            type: Object,
        }
    },
    setup(props) {
        const isHover = ref(false)
        const postRef = ref(null)
        onMounted(()=>{
            postRef.value.onmouseenter = ()=>{
                isHover.value = true
            }

            postRef.value.onmouseleave = ()=>{
                isHover.value = false
            }

            console.log(props.post);
        })

        return { isHover , postRef }
    }

}
</script>

<style lang="scss" scoped>
$primary-font-color: #303030;
$primary-font-color-light: #464646;
$banner-height: 6rem;


.fade-enter-active,
.fade-leave-active {
  transition: 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(100%);
}

.see-more-wrapper{
    width: 100%;
    height: 40%;
    background-image: linear-gradient(to top, rgb(82, 82, 82), rgba(255,0,0,0));
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    text-decoration: none;
    
    .see-more-btn{
        color: #fff;
        font-size: 1.25rem;
        padding: .5rem 3rem;
        font-weight: 700;
        border: 3px solid white;
        border-radius: 40px;
        background-color: transparent;
    }
}

.post{
    position: relative;
    font-family: var(--primary-font);
    width: 70%;
    margin: 0 auto;
    min-height: 400px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 2rem;
    cursor: pointer;
    overflow: hidden;
    @media (max-width: 648px) {
        width: 90%;
    }
    .banner{
        width: 100%;
            height: 100px;
        // height: $banner-height;
        @media (max-width: 500px) {
            height: 100px;
        }
        background-color: var(--secondary-color-normal);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .author-info-wrapper{
            display: flex;
            margin-left: 2rem;
            align-items: center;
            img{
                border-radius: 50%;
                height: 50px;
                width: 50px;
                margin-right: 1rem;
            }
            .author-info{   
                display: flex;
                flex-direction: column;
                h1{
                    font-size: 1.5rem;
                    color: $primary-font-color;
                }
                span{
                    color: $primary-font-color-light;
                    font-weight: 500;
                }
            }
        }

        .interact-info-wrapper{
            display: flex;
            color: #fff;
            margin-right: 2rem;
            .icon{
                font-size: 1.3rem;
            }
            span{
                font-size: 1rem;
                color: $primary-font-color-light;
                font-weight: 500;
            }
            .wrapper{
                align-items: center;
                display: flex;
                flex-direction: column;
                margin: 0 1rem;
            }
        }
    }
    .content{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        @media (max-width: 800px) {
            flex-direction: column;
        }
        .detail-wrapper{
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3rem;
            @media (max-width: 800px) {
                width: 100%;
            }
            span{
                
                }
        }
        .table-wrapper{
            margin-top: 2rem;
            height: 100%;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: 800px) {
                width: 100%;
                margin: 0rem 0 2rem 0;
            }
        }
    }

}
</style>