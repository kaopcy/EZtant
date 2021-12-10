<template>
    <div class="post" ref="postRef">
        <transition name="fade">
            <router-link
                class="see-more-wrapper"
                v-if="isHover"
                :to="`/focus-post/${post.id}`"
            >
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
    transition: 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(100%);
}

.see-more-wrapper {
    width: 100%;
    height: 20%;
    background-color: rgba(102, 102, 102, 0.288);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    text-decoration: none;

    .see-more-btn {
        color: #fff;
        font-size: 1.25rem;
        padding: 0.5rem 3rem;
        font-weight: 700;
        border: 3px solid white;
        border-radius: 40px;
        background-color: transparent;
        cursor: pointer;
    }
}

.post {
    position: relative;
    font-family: var(--primary-font);
    margin: 0 auto;
    width: 700px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 2rem;
    overflow: hidden;
    @media (max-width: 720px) {
        width: 100%;
    }
    .banner {
        width: 100%;
        height: 100px;
        // height: $banner-height;
        @media (max-width: 600px) {
            height: 70px;
        }
        background-color: var(--secondary-color-normal);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .author-info-wrapper {
            display: flex;
            margin-left: 2rem;
            align-items: center;
            img {
                border-radius: 50%;
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
                    color: $primary-font-color-light;
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
                color: $primary-font-color-light;
                font-weight: 500;
            }
            .wrapper {
                align-items: center;
                display: flex;
                flex-direction: column;
                margin: 0 1rem;
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
            @media (max-width: 800px) {
                width: 100%;
            }
            .text{
                display: flex;
                flex-direction: column;
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
