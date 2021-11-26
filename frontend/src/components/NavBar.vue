<template>
    <div class="nav-bar">
        <div class="wrapper">
            <div class="content-wrapper-desktop" v-if="!store.state.isMobile">
                <div class="logo-wrapper">
                    <img
                        src="../../public/logo_color.svg"
                        alt=""
                        @click="homeNav()"
                    />
                </div>
                <router-link class="link" to="/boom">About</router-link>
                <div
                    class="link"
                    id="department-selector"
                    @click="toggleDropDown()"
                >
                    <span>Department</span>
                    <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        shape-rendering="geometricPrecision"
                        style="color: currentColor"
                        class="svg"
                    >
                        <path d="M6 9l6 6 6-6"></path>
                    </svg>
                </div>
                <router-link class="link" to="/">Teacher</router-link>
                <router-link class="link" to="/">TA</router-link>
                <router-link class="link" to="/register">Contact</router-link>
                <router-link class="link last" to="/main-post"
                    >Post</router-link
                >
                <img
                    class="user-img"
                    src="../../public/image/profile.svg"
                    alt=""
                />
            </div>
            <div class="content-wrapper-mobile" v-if="store.state.isMobile">
                <div class="logo-wrapper">
                    <img
                        src="../../public/logo_color.svg"
                        alt=""
                        @click="homeNav()"
                    />
                </div>
                <div class="nav-icon">
                    <router-link class="link last" to="/main-post"
                        >Post</router-link
                    >
                    <div id="nav-btn" class="thing" @click="toggleNavBar()">
                        <span class="span1"></span>
                        <span class="span2"></span>
                        <span class="span3"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="nav-mobile" id="nav-mobile">
            <router-link class="link login" to="/">Login</router-link>
            <router-link class="link signup" to="/register"
                >Sign up</router-link
            >
            <router-link class="link" to="/boom">About</router-link>
            <div
                class="link"
                id="department-selector"
                @click="toggleDropDownMobile()"
            >
                <span>Department</span>
                <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    shape-rendering="geometricPrecision"
                    style="color: currentColor"
                    class="svg"
                >
                    <path d="M6 9l6 6 6-6"></path>
                </svg>
            </div>
            <div class="drop-down-mobile" id="drop-down-mobile">
                <div
                    class="department-wrapper"
                    v-for="item in department"
                    :key="item"
                >
                    <div class="img-wrapper">
                        <img
                            :src="
                                require(`../../public/image/department/${item.src}`)
                            "
                            alt=""
                        />
                    </div>
                    <div class="text">
                        <span class="span-1">{{ item.name }}</span>
                        <span class="span-2">{{ item.instrument }}</span>
                    </div>
                </div>
            </div>
            <router-link class="link" to="/">Teacher</router-link>
            <router-link class="link" to="/">TA</router-link>
            <router-link class="link" to="/register">Contact</router-link>
            <router-link class="link last" to="/main-post">Post</router-link>
        </div>

        <div class="drop-down" id="drop-down">
            <div
                class="department-wrapper"
                v-for="item in department"
                :key="item"
            >
                <div class="img-wrapper">
                    <img
                        :src="
                            require(`../../public/image/department/${item.src}`)
                        "
                        alt=""
                    />
                </div>
                <div class="text">
                    <span class="span-1">{{ item.name }}</span>
                    <span class="span-2">{{ item.instrument }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

import { store } from "../store";
import { watch } from '@vue/runtime-core';

export default {
    name: "NavBar",
    setup() {
        const router = useRouter();

        const department = ref([
            {
                name: "Computer Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "computer.svg",
            },
            {
                name: "Bio Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "bio.svg",
            },
            {
                name: "Chemistry Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "chemistry.svg",
            },
            {
                name: "Food Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "food.svg",
            },
            {
                name: "Industial Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "industial.svg",
            },
            {
                name: "Music Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "music.svg",
            },
            {
                name: "Telecom Engineer",
                instrument: "Lorem ipsum dolor sit amet consectetur.",
                src: "telecom.svg",
            },
        ]);

        const homeNav = () => {
            router.replace({ name: "Home" });
        };

        const toggleDropDown = () => {
            const dropDown = document.getElementById("drop-down");
            const departmentWrapper = document.getElementById(
                "department-selector"
            );
            departmentWrapper.classList.toggle("visible");
            dropDown.classList.toggle("visible");
        };

        const toggleDropDownMobile = () => {
            const dropDown = document.getElementById("drop-down-mobile");
            dropDown.classList.toggle("visible");
            console.log("clicked");
        };

        const toggleNavBar = () => {
            const navBar = document.getElementById("nav-mobile");
            const navBtn = document.getElementById("nav-btn")
            const dropDown = document.getElementById("drop-down-mobile");
            dropDown.classList.remove("visible");
            navBtn.classList.toggle("active")
            navBar.classList.toggle("visible");
        };

        watch(()=>store.state.isMobile , ()=>{
            if (store.state.isMobile){
                const dropDown = document.getElementById("drop-down");
                dropDown.classList.remove("visible");
            }
            else {
                const navMobile = document.getElementById("nav-mobile");
                navMobile.classList.remove("visible");
            }
        })

        return {
            homeNav,
            toggleDropDown,
            toggleDropDownMobile,
            toggleNavBar,
            department,
            store,
        };
    },
};
</script>

<style lang="scss" scoped>
$link-color: #696969;
$link-color-hover: #000;

$button-color: rgba(0, 118, 255, 0.9);

.wrapper {
    font-family: var(--primary-font);
    width: 100%;
    height: var(--navbar-height);
    background-color: var(--primary-color-normal);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    .content-wrapper-desktop {
        justify-content: center;
        height: 100%;
        display: flex;
        align-items: center;
        .logo-wrapper {
            margin-left: 5%;
            margin-right: 3rem;
            height: 30%;
            cursor: pointer;
            @media (max-width: 912px) {
                margin-right: 1rem;
                margin-left: 0.5rem;
            }
            @media (max-width: 740px) {
                display: none;
            }

            img {
                height: 100%;
            }
        }
        .link {
            span {
                margin-right: 0.25rem;
            }
            &.last {
                padding: 0.45rem 1rem;
                color: rgb(255, 255, 255);
                font-weight: 500;
                background-color: $button-color;

                &:hover {
                    color: $button-color;
                    background-color: rgb(255, 255, 255);
                    outline: 1px solid $button-color;
                }
                @media (max-width: 840px) {
                    margin-right: 1rem;
                }
            }
            .svg {
                transition: 0.25s;
            }
            &.visible {
                color: #646464;
                .svg {
                    transform: rotate(180deg);
                }
            }
            display: flex;
            align-items: center;
            cursor: pointer;
            color: $link-color;
            font-weight: 400;
            font-size: 16px;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 7px;
            margin-right: 2rem;
            @media (max-width: 990px) {
                margin-right: 1rem;
            }
            @media (max-width: 840px) {
                margin-right: 0;
            }
            transition: 0.25s;
            &:hover {
                color: $link-color-hover;
            }
        }
        .user-img {
            width: 35px;
            height: 35px;
            color: #fff;
        }
    }

    .content-wrapper-mobile {
        width: 100%;
        height: 100%;
        justify-content: space-between;
        display: flex;
        align-items: center;
        .logo-wrapper {
            margin-left: 5%;
            margin-right: 3rem;
            height: 24%;
            cursor: pointer;
            img {
                height: 100%;
            }
        }
        .nav-icon {
            display: flex;
            align-items: center;
            .link {
                text-decoration: none;
                border-radius: 10px;
                padding: 0.45rem 1rem;
                color: #000;
                font-weight: 500;
                background-color: #fff;

                &.last {
                    padding: 0.45rem 1rem;
                    color: rgb(255, 255, 255);
                    font-weight: 500;
                    background-color: $button-color;

                    &:hover {
                        color: $button-color;
                        background-color: rgb(255, 255, 255);
                        outline: 1px solid $button-color;
                    }
                    @media (max-width: 840px) {
                        margin-right: 1rem;
                    }
                }
            }
            .thing {
                display: flex;
                flex-direction: column;
                width: 20px;
                height: 20px;
                background-color: transparent;
                margin-right: 2rem;
                overflow: hidden;
                cursor: pointer;
                span {
                    width: 100%;
                    height: 19px;
                    margin-bottom: 7px;
                    border-top: 2px solid rgb(5, 5, 5);
                    border-radius: 20px;
                    transition: .25s;
                    transform-origin: left;
                }

                &.active{
                    span{
                        border-width: 2px;
                        &:nth-child(1){
                            transform: rotate(45deg) scaleX(130%);
                        }
                        &:nth-child(2){
                            transform: translate(100% , 0);
                        }
                        &:nth-child(3){
                            transform: rotate(-45deg) scaleX(130%);
                        }
                        
                    }
                }

            }
        }
    }
}

@keyframes fade {
    0% {
        transform-origin: top;
        transform: scaleY(0);
    }
    100% {
        transform-origin: top;
        transform: scaleY(100%);
    }
}

.nav-mobile {
    display: none;
    background-color: #fff;
    width: 100%;
    max-height: 70vh;
    overflow-y: scroll;
    &.visible {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .link {
        cursor: pointer;
        font-family: var(--primary-font);
        text-decoration: none;
        width: 92%;
        display: flex;
        justify-content: flex-start;
        font-size: 16px;
        font-weight: 500;
        padding: 1.1rem 0;
        transition: 0.25s;
        span {
            margin-right: 1rem;
        }
        border-radius: 5px;
        color: #000;
        border-bottom: 1px solid #eaeaea;
        align-items: center;
        &.login {
            margin: 0.4rem 0;
            font-size: 14px;
            border: 1px solid #eaeaea;
            justify-content: center;
            color: #666666;
            &:hover{
                background-color: rgb(201, 201, 201);
            }
        }
        &.signup {
            font-size: 14px;
            margin: 0.4rem 0;
            justify-content: center;
            border: 1px solid #eaeaea;
            color: #fff;
            background-color: var(--secondary-color-dark);
            transition: 0.25s;
            &:hover {
                background-color: #fff;
                border: 1px solid var(--secondary-color-dark);
                color: var(--secondary-color-dark);
            }
        }
        &:hover {
            background-color: rgb(247, 247, 247);
        }
    }
    .drop-down-mobile {
        display: none;
        &.visible {
            display: initial;
            position: relative;
        }
        .department-wrapper {
            align-items: center;
            padding: 1rem 2rem;
            cursor: pointer;
            display: flex;
            &:hover {
                border-radius: 5px;
                outline: 1px solid #e2e2e2;
                background-color: rgb(252, 252, 252);
            }
            .text {
                display: flex;
                flex-direction: column;
                font-family: var(--primary-font);
                .span-1 {
                    font-weight: 800;
                    font-size: 0.875rem;
                    margin-bottom: 0.5rem;
                }
                .span-2 {
                    font-size: 0.875rem;
                    color: rgb(102, 102, 102);
                }
            }
            .img-wrapper {
                margin-right: 1rem;
                width: 50px;
                height: 50px;
                background-color: #000;
                clip-path: circle(50% at 50% 50%);
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 50%;
                    height: 50%;
                }
            }
        }
    }
}

.drop-down {
    position: absolute;
    width: 100%;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    padding: 1rem 0;
    display: none;
    animation: fade 0.25s;
    &.visible {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .department-wrapper {
        display: flex;
        align-items: center;
        padding: 1rem 2rem;
        cursor: pointer;
        &:hover {
            border-radius: 5px;
            outline: 1px solid #e2e2e2;
            background-color: rgb(252, 252, 252);
        }
        .text {
            display: flex;
            flex-direction: column;
            font-family: var(--primary-font);
            .span-1 {
                font-weight: 800;
                font-size: 0.875rem;
                margin-bottom: 0.5rem;
            }
            .span-2 {
                font-size: 0.875rem;
                color: rgb(102, 102, 102);
            }
        }
        .img-wrapper {
            margin-right: 1rem;
            width: 50px;
            height: 50px;
            background-color: #000;
            clip-path: circle(50% at 50% 50%);
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 50%;
                height: 50%;
            }
        }
    }
}
</style>
