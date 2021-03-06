<template>
    <div class="post" :class="[{ hovered: isHover } , { fulled: isFullRequest }]">
        <div class="banner">
            <div class="author-info-wrapper">
                <img :src="author.imageURL" alt="" />
                <div class="author-info">
                    <h1>
                        {{ author.first_name || author.firstName }}
                        {{ author.last_name || author.lastName }}
                    </h1>
                    <span>{{ post.timestamp.slice(0 , post.timestamp.length -3) }}</span>
                </div>
            </div>
            <div class="interact-info-wrapper">
                <div class="wrapper">
                    <fa class="icon" :icon="[isFavorite? 'fas':'far', 'heart']" @click="handleFavorite()" :class="{favorite:isFavorite}" />
                    <span>{{favoriteNumber}}</span>
                </div>
                <div class="wrapper">
                    <fa class="icon" :icon="['fas', 'user-friends']" />
                    <span>{{post.requested.length}}</span>
                </div>
            </div>
        </div>

        <div class="content" ref="postRef" >
            <transition name="fade">
                <router-link
                    class="see-more-wrapper"
                    v-if="isHover"
                    :to="`/focus-post/${post.id}`"
                >
                    <h1>
                        {{ post.subject_name }}
                        <span class="line"></span>
                    </h1>
                    
                    <div class="see-more-btn">See more</div>
                </router-link>
            </transition>
            <div class="detail-wrapper">
                <div class="text">
                    <div>
                        <span style="font-weight: 700; line-height: 1.5rem"
                            >Subject:</span
                        >
                        {{ post.subject_name }}
                    </div>
                    <div>
                        <span style="font-weight: 700; line-height: 1.5rem"
                            >Subject ID:</span
                        >
                        {{ post.subject_id || "01067007" }}
                    </div>
                    <div>
                        <span style="font-weight: 700; line-height: 1.5rem"
                            >Number/Group:</span
                        >
                        {{ post.max_requested || 1 }}
                    </div>
                    <div>
                        <span style="font-weight: 700; line-height: 1.5rem"
                            >Payment:</span
                        >
                        {{ post.wage || 600 }} ฿
                    </div>
                </div>
            </div>
            <div class="table-wrapper">
                <Table :schedule="post.schedules" />
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";

import Table from "../components/Table.vue";
import useAuth from '../composables/useAuth';
import usePost from '../composables/usePost';

export default {
    name: "Post",

    components: {
        Table,
    },

    props: {
        post: {
            type: Object,
        },
        author: {
            type: Object,
        },
    },
    setup(props) {
        const isHover = ref(false);
        const postRef = ref(null);
        const { user } = useAuth()
        const { favorite } = usePost()
        const toggleFavorite = ref(true);
        // onmounted hook
        onMounted(() => {
            postRef.value.onmouseenter = () => {
                isHover.value = true;
            };

            postRef.value.onmouseleave = () => {
                isHover.value = false;
            };

            console.log(props.post);
        });

        const handleFavorite = ()=>{
            toggleFavorite.value = !toggleFavorite.value
            favorite(props.post.id)
        }

        const favoriteNumber = computed(()=>{
            const favorite = props.post.favourite.some((e) =>  e.id == user.value.id )
            if (favorite && toggleFavorite.value) return props.post.favourite.length
            if (!favorite && toggleFavorite.value) return props.post.favourite.length
            if ( !favorite && !toggleFavorite.value ) return props.post.favourite.length + 1
            if ( favorite && !toggleFavorite.value ) return props.post.favourite.length - 1
        })
        
        const isFavorite = computed(()=> toggleFavorite.value ? props.post.favourite.some((e) =>  e.id == user.value.id ) : !props.post.favourite.some((e) =>  e.id == user.value.id))

        const isFullRequest = computed(()=> props.post.requested.length == props.post.max_requested )
        
        return { isHover, postRef , isFullRequest , handleFavorite , isFavorite , user , favoriteNumber , toggleFavorite};
    },
};
</script>

<style lang="scss" scoped>
$primary-font-color: #303030;
$primary-font-color-light: #464646;
$banner-height: 6rem;

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.see-more-wrapper {
    width: 100%;
    height: calc(100% - 100px);
    background-color: rgba(0, 0, 0, 0.616);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    text-decoration: none;
    z-index: 2;
    gap: 2rem;
    @media (max-width: 600px) {
        height: calc(100% - 70px);
    }
    h1 {
        color: #fff;
        transition: all .5s;
        position: relative;
        padding: .5rem;
        transform: translateY(40px);
        span{
            position: absolute;
            width: 100%;
            height: 2px;
            left: 0;
            bottom: 0;
            background-color: rgb(190, 190, 190);
            transition: all .5s;
            transform: scaleX(0%);
            opacity: 0;
            transform-origin: left;
        }
    }
    .see-more-btn {
        color: #303030;
        font-size: 1.25rem;
        opacity: 0;
        padding: 0.5rem 3rem;
        font-weight: 700;
        border: 1px solid white;
        border-radius: 5px;
        background-color: white;
        transition: all 0.7s;
        transform: translateY(40px);
        cursor: pointer;
        &:hover {
        }
    }
    &:hover{
        span{
            transform: scaleX(100%);
            opacity: 100%;
            transition-delay: 0.3s;
        }
        h1{
            transform: translateY(0);
        }
        .see-more-btn {
            transform: translateY(0);
            opacity: 100%;
            transition-delay: 0.4s;
        }
    }
}

.post {
    position: relative;
    font-family: var(--primary-font);
    margin: 0 auto;
    width: 700px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 2rem;
    border-radius: 10px;
    background: #fff;
    overflow: hidden;
    @media (max-width: 720px) {
        width: 95%;
    }
    &.fulled {
        &::after{
            content: '';
            text-align: center;
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.507);
            z-index: 1000;
        }
        &::before{
            content: 'Request is full';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50% , -50%);
            color: #fff;    
            font-size: 2rem;
            font-weight: 700;
            z-index: 1001;
        }
    }
    .banner {
        width: 100%;
        height: 100px;
        @media (max-width: 600px) {
            height: 70px;
        }
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 0.7px;
            background-color: rgb(226, 226, 226);
            z-index: 1;
        }

        .author-info-wrapper {
            display: flex;
            margin-left: 2rem;
            align-items: center;
            img {
                border-radius: 50%;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                height: 50px;
                width: 50px;
                margin-right: 1rem;
            }
            .author-info {
                display: flex;
                flex-direction: column;
                h1 {
                    font-size: 1.5rem;
                    color: $primary-font-color;
                }
                span {
                    color: rgb(179, 179, 179);
                    font-weight: 500;
                }

                @media (max-width: 600px) {
                    h1 {
                        font-size: 1rem;
                    }
                    span {
                        font-size: 0.65rem;
                    }
                }
            }
        }

        .interact-info-wrapper {
            display: flex;
            color: #fff;
            margin-right: 2rem;
            .icon {
                font-size: 1.3rem;
                transition: all .25s linear;
                cursor: pointer;

                &.favorite{
                    color: rgb(238, 54, 54);
                }
                &:hover{
                    transform: scale(1.25);
                }
            }
            span {
                font-size: 1rem;
                color: rgb(179, 179, 179);
                font-weight: 500;
            }
            .wrapper {
                align-items: center;
                display: flex;
                flex-direction: column;
                margin: 0 1rem;
                &:nth-child(1) {
                    color: rgb(77, 77, 77);
                    
                }
                &:nth-child(2) {
                    color: var(--secondary-color-dark);
                }
            }

            @media (max-width: 600px) {
                margin-right: 0.5rem;
                .icon {
                    font-size: 1rem;
                }
                span {
                    font-size: 0.65rem;
                }
                .wrapper {
                    margin: 0 0.5rem;
                }
            }
        }
    }
    .content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
        background: #fff;
        @media (max-width: 600px) {
            flex-direction: column;
        }
        .detail-wrapper {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2rem;
            color: var(--primary-font-color);
            @media (max-width: 800px) {
                width: 100%;
            }
            .text {
                color: rgb(114, 114, 114);
                display: flex;
                flex-direction: column;
                @media (max-width: 600px) {
                    min-width: 310px;
                }
                span {
                    color: var(--primary-font-color);
                }
            }
        }
        .table-wrapper {
            height: 100%;
            width: 50%;
            min-width: 350px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
