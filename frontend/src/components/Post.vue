<template>
    <div class="post" ref="postRef" :class="{ hovered: isHover }">
        <transition name="fade">
            <router-link
                class="see-more-wrapper"
                v-if="isHover"
                :to="`/focus-post/${post.id}`"
            >
                <h1>{{ post.subject_name }}</h1>
                <div class="see-more-btn">See more</div>
            </router-link>
        </transition>

        <div class="banner">
            <div class="author-info-wrapper">
                <img :src="author.imageURL" alt="" />
                <div class="author-info">
                    <h1>
                        {{ author.first_name || author.firstName }}
                        {{ author.last_name || author.lastName }}
                    </h1>
                    <span>{{ post.timestamp }}</span>
                </div>
            </div>
            <div class="interact-info-wrapper">
                <div class="wrapper">
                    <fa class="icon" :icon="['fas', 'heart']" />
                    <span>15</span>
                </div>
                <div class="wrapper">
                    <fa class="icon" :icon="['fas', 'user-friends']" />
                    <span>25</span>
                </div>
            </div>
        </div>
        <slot></slot>
        <div class="content">
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
                        {{ post.wage || 600 }} $
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
import { onMounted, ref } from "@vue/runtime-core";

import Table from "../components/Table.vue";

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
        onMounted(() => {
            postRef.value.onmouseenter = () => {
                isHover.value = true;
            };

            postRef.value.onmouseleave = () => {
                isHover.value = false;
            };

            console.log(props.post);
        });

        return { isHover, postRef };
    },
};
</script>

<style lang="scss" scoped>
$primary-font-color: #303030;
$primary-font-color-light: #464646;
$banner-height: 6rem;

.fade-enter-active,
.fade-leave-active {
    transition: .25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(100%);
}

.see-more-wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.616);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    text-decoration: none;
    z-index: 2;
    gap: 1rem;
    h1{
        color: #fff;
    }
    .see-more-btn {
        color: #fff;
        font-size: 1.25rem;
        padding: 0.5rem 3rem;
        font-weight: 700;
        border: 3px solid white;
        border-radius: 40px;
        background-color: transparent;
        cursor: pointer;
        &:hover{
            
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
    &.hovered{
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
        &::before{
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: .7px;
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

                @media (max-width:600px) {
                    h1{
                        font-size: 1rem;
                    }
                    span{
                        font-size: .65rem;
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
                &:nth-child(1){
                    color: rgb(238, 54, 54);
                }
                &:nth-child(2){
                    color: var(--secondary-color-dark);
                }
            }

            @media (max-width:600px) {
                margin-right: .5rem;
                .icon{
                    font-size: 1rem;
                }
                span{
                    font-size: .65rem;
                }
                .wrapper{
                    margin: 0 .5rem;
                }
            }
        }
    }
    .content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
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
            .text{
                color: rgb(114, 114, 114);
                display: flex;
                flex-direction: column;
                @media (max-width:600px) {
                    min-width: 310px;
                }
                span{
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
