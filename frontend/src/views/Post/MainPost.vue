<template>
    <div class="main-post">

        <Popup id="popup" />
        <div class="greeting">
            <div class="greeting-img" :class="{ hovered: isHover }">
                <div class="btn" id="btn-post" @click="store.commit('toggleIsPopup')">POST</div>
                <div class="wrapper" :class="{ hovered: isHover }">
                    <h1>Find your Right teacher assistant!</h1>
                </div>
            </div>
        </div>

        <div class="search-bar">
            <div class="wrapper" :class="isLast ? 'active' : 'inactive'">
                <h1
                    :class="isLast ? 'active' : 'inactive'"
                    @click="isLast = true"
                >
                    Lastest
                </h1>
                <h1
                    :class="!isLast ? 'active' : 'inactive'"
                    @click="isLast = false"
                >
                    Available
                </h1>
            </div>
            <div class="icon-wrapper">
                <fa class="icon" :icon="['fas', 'search']" />
                <fa class="icon" :icon="['fas', 'sort-alpha-down']" />
            </div>
        </div>

        <div class="post-wrapper">
            <Post v-for="post in posts" :key="post" :post="post" />
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Post from "../../components/Post.vue";
import { onMounted } from "@vue/runtime-core";
import { store } from "../../store";
import Popup from '../../components/MainPost/PostPopup.vue'

export default {
    name: "MainPost",
    components: {
        Post,
        Popup,
    },
    setup() {
        const isHover = ref(false);

        const isLast = ref(true);

        const posts = ref([
            {
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
                requested: [
                    {
                        name: "",
                    },
                ],
                schedule: [
                    {
                        section: "101",
                        day: "TUE",
                        time: "09.00 - 12.00 AM.",
                    },
                    {
                        section: "102",
                        day: "WED",
                        time: "01.00 - 04.00 PM.",
                    },
                    {
                        section: "103",
                        day: "FRI",
                        time: "04.30 - 07.30 PM.",
                    },
                ],
                detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officia doloribus nihil animi reiciendis assumenda cupiditate nostrum commodi facilis optio.",
            },
            {
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
                requested: [
                    {
                        name: "",
                    },
                ],
                schedule: [
                    {
                        section: "101",
                        day: "TUE",
                        time: "09.00 - 12.00 AM.",
                    },
                    {
                        section: "102",
                        day: "WED",
                        time: "01.00 - 04.00 PM.",
                    },
                    {
                        section: "103",
                        day: "FRI",
                        time: "04.30 - 07.30 PM.",
                    },
                ],
                detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officia doloribus nihil animi reiciendis assumenda cupiditate nostrum commodi facilis optio.",
            },
            {
                subject: "Data communication",
                timeStamp: "15 minute ago",
                author: "Jirasak",
                requested: [
                    {
                        name: "",
                    },
                ],
                schedule: [
                    {
                        section: "101",
                        day: "TUE",
                        time: "09.00 - 12.00 AM.",
                    },
                    {
                        section: "102",
                        day: "WED",
                        time: "01.00 - 04.00 PM.",
                    },
                    {
                        section: "103",
                        day: "FRI",
                        time: "04.30 - 07.30 PM.",
                    },
                ],
                detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officia doloribus nihil animi reiciendis assumenda cupiditate nostrum commodi facilis optio.",
            },
        ]);

        const onHoverAnimation = () => {
            const posBtn = document.getElementById("btn-post");
            posBtn.onmouseover = () => {
                isHover.value = true;
            };
            posBtn.onmouseout = () => {
                isHover.value = false;
            };
        };

        const toggleIsLast = () => {
            isLast.value = !isLast.value;
        };

        onMounted(() => {
            if (!store.state.isMobile) onHoverAnimation();
        });

        return {
            posts,
            isHover,
            isLast,
            toggleIsLast,
            store
        };
    },
};
</script>

<style lang="scss" scoped>
$searchbar-height: 100px;
$sort-type-color-active: #303030;
$sort-type-color-inactive: #a7a7a7;
$sort-type-height: 5px;

.main-post {
    position: relative;
}

#popup{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}

.greeting {
    width: 100%;
    height: calc(100vh - var(--navbar-height) - var(--banner-height));
    display: flex;
    justify-content: center;
    align-items: center;
    .greeting-img {
        width: 80%;
        height: 90%;
        background-image: url("../../../public/image/image/blog.jpg");
        background-size: cover;
        background-position: 50% 50%;
        box-shadow: 0px 0px 119px -60px rgba(255, 255, 255, 0.897) inset;
        -webkit-box-shadow: 0px 0px 119px -60px rgba(255, 255, 255, 0.863) inset;
        -moz-box-shadow: 0px 0px 119px -60px rgba(255, 255, 255, 0.87) inset;
        position: relative;
        @media (min-width: 1000px) {
            width: 70%;
        }
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 1;
        }
        &::after {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
        }
        @media (max-width: 480px) {
            width: 100%;
            height: 90%;
        }
        .btn {
            position: absolute;
            right: 0;
            bottom: 14%;
            transform: translate(-100%, 50%);
            font-family: var(--primary-font);
            font-size: 1.5rem;
            font-weight: 800;
            padding: 1rem 4rem;
            border-radius: 30px;
            color: rgb(54, 54, 54);
            background-color: #fff;
            z-index: 1;
            transition: 0.25s;
            cursor: pointer;
            @media (max-width: 1200px) {
                font-size: 1.25rem;
            }
            @media (max-width: 800px) {
                transform: translate(-100%, 70%);
                font-size: 1rem;
            }
            &:hover {
                outline: 1px solid whitesmoke;
            }
            @media (max-width: 450px) {
                bottom: 26%;
                transform: translate(-10%, 50%);
            }
        }

        .wrapper {
            position: absolute;
            width: 80%;
            height: 60%;
            background-color: rgba(0, 0, 0, 0.274);
            right: 0;
            top: 50%;
            transform: translate(5%, -40%);
            display: flex;
            justify-content: flex-start;
            transition: 0.5s;
            &.hovered {
                background-color: rgba(255, 255, 255, 0.582);
                transform: translate(-30%, -40%);
                h1 {
                    transform: translate(40%, 10%);
                    color: rgb(51, 51, 51);
                    text-align: end;
                    @media (max-width: 1200px) {
                        transform: translate(20%, 10%);
                    }
                    @media (max-width: 1000px) {
                        transform: translate(10%, 10%);
                    }
                }
            }

            @media (max-width: 450px) {
                transform: translate(0%, -60%);
            }

            h1 {
                transition: 0.5s;
                text-transform: uppercase;
                max-width: 700px;
                font-family: var(--primary-font);
                color: #fff;
                font-size: 4rem;
                font-weight: 900;
                transform: translate(-10%, 10%);
                @media (max-width: 800px) {
                    font-size: 3.5rem;
                }
                @media (max-width: 450px) {
                    font-size: 3rem;
                }
            }
        }
    }
}

.search-bar {
    margin-top: 3rem;
    width: 100%;
    height: $searchbar-height;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 800px) {
        margin: 0 auto;
        width: 70%;
        justify-content: space-between;
    }
    @media (max-width: 640px) {
        width: 90%;
    }

    .wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &.inactive {
            &::before {
                transform: translateX(100%);
            }
        }
        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: $sort-type-height;
            background-color: $sort-type-color-inactive;
            z-index: 0;
        }
        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50%;
            height: $sort-type-height;
            z-index: 1;
            background-color: $sort-type-color-active;
            transition: 0.5s;
        }

        h1 {
            cursor: pointer;
            font-family: var(--primary-font);
            margin: 1rem 1rem 1.5rem 1rem;
            position: relative;
            transition: 0.25s;
            @media (max-width: 800px) {
                font-size: 1.25rem;
            }

            &:nth-child(1) {
            }

            &.active {
                color: $sort-type-color-active;
            }
            &.inactive {
                color: $sort-type-color-inactive;
            }
        }
    }

    .icon-wrapper {
        position: absolute;
        bottom: 50%;
        right: 14%;
        transform: translateY(50%);
        @media (max-width: 800px) {
            position: relative;
            right: initial;
            bottom: initial;
            transform: none;
        }
        .icon {
            color: $sort-type-color-inactive;
            font-size: 2rem;
            margin-right: 1rem;
            cursor: pointer;
            &:hover {
                color: $sort-type-color-active;
            }
            @media (max-width: 800px) {
                font-size: 1.5rem;
            }
        }
    }
}

.post-wrapper {
    margin-top: 4rem;
    position: relative;
    width: 100%;
    min-height: 100vh;
}
</style>
