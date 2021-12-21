<template>
    <div class="main-post">
        <Popup id="popup" />
        <div class="greeting">
            <div class="greeting-img" :class="{ hovered: isHover }">
                <div
                    class="btn"
                    id="btn-post"
                    @click="store.commit('toggleIsPopup')"
                >
                    POST 
                </div>
                <div class="wrapper" :class="{ hovered: isHover }">
                    <h1>Find your Right teacher assistant!</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { store } from "../../store";

import Popup from "../../components/MainPost/PostPopup.vue";

export default {
    name: "MainPost",
    components: {
        Popup,
    },
    setup() {
        const isHover = ref(false);

        const onHoverAnimation = () => {
            const posBtn = document.getElementById("btn-post");
            posBtn.onmouseover = () => {
                isHover.value = true;
            };
            posBtn.onmouseout = () => {
                isHover.value = false;
            };
        };

        onMounted(async ()=> {
            if (!store.state.isMobile) onHoverAnimation();
        });

        return {
            isHover,
            store,
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

#popup {
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
</style>
