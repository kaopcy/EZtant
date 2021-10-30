<template>
    <div class="nav-bar">
        <div class="wrapper">
            <div class="content-wrapper">
                <div class="logo-wrapper">
                    <img src="../../public/logo.svg" alt="" @click="homeNav()" />
                </div>
                <router-link class="link" to="/">About</router-link>
                <div class="link" id="department-selector" @click="toggleDropDown()" >
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
                <router-link class="link" to="/">Post</router-link>
                <div class="user-wrapper">
                    <img src="../../public/image/profile.svg" alt="" />
                </div>
            </div>
        </div>

        <div class="drop-down" id="drop-down">
            <div class="department-wrapper" v-for="item in department" :key="item">
                <div class="img-wrapper">
                    <img :src="require(`../../public/image/department/${item.src}`)" alt="">
                </div>
                <div class="text">
                    <span class="span-1">{{item.name}}</span>
                    <span class="span-2">{{item.instrument}}</span>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from "vue-router";
export default {
    name: "NavBar",
    setup() {
        const router = useRouter();

        const department = ref([
            {
                name: 'Computer Engineer',
                instrument: 'Lorem ipsum dolor sit amet consectetur.',
                src: 'computer.svg'
            },
            {
                name: 'Bio Engineer',
                instrument: 'Lorem ipsum dolor sit amet consectetur.',
                src: 'bio.svg'
            },
            {
                name: 'Chemistry Engineer',
                instrument: 'Lorem ipsum dolor sit amet consectetur.',
                src: 'chemistry.svg'
            },
            {
                name: 'Food Engineer',
                instrument: 'Lorem ipsum dolor sit amet consectetur.',
                src: 'food.svg'
            },
            {
                name: 'Industial Engineer',
                instrument: 'Lorem ipsum dolor sit amet consectetur.',
                src: 'industial.svg'
            },
            {
                name: 'Music Engineer',
                instrument: 'Lorem ipsum dolor sit amet consectetur.',
                src: 'music.svg'
            },
            {
                name: 'Telecom Engineer',
                instrument: 'Lorem ipsum dolor sit amet consectetur.',
                src: 'telecom.svg'
            },

        ])

        const homeNav = () => {
            router.replace({ name: "Home" });
        };

        const toggleDropDown = ()=>{
            const dropDown = document.getElementById('drop-down')
            const departmentWrapper = document.getElementById('department-selector')
            departmentWrapper.classList.toggle('visible')
            dropDown.classList.toggle('visible')
        }

        return { homeNav , toggleDropDown , department };
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    font-family: var(--primary-font);
    width: 100%;
    height: 70px;
    background-color: #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .content-wrapper {
        justify-content: center;
        height: 100%;
        display: flex;
        align-items: center;
        .logo-wrapper {
            margin-left: 5%;
            margin-right: 3rem;
            height: 30%;
            cursor: pointer;
            @media (max-width: 835px) {
                height: 30%;
            }
            @media (max-width: 740px) {
                display: none;
            }
            img {
                height: 100%;
            }
        }
        .link {
            span{
                margin-right: .25rem;
            }
            &:last-of-type {
                color: #000;
                font-weight: 500;
                background-color: #fff;
                &:hover {
                    background-color: rgb(204, 204, 204);
                }
            }
            .svg{
                transition: .25s;
            }
            &.visible{
                color: #646464;
                .svg{
                    transform: rotate(180deg);
                }
            }
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #fff;
            font-weight: 400;
            font-size: 16px;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            margin-right: 2rem;
            transition: 0.25s;
            &:hover {
                color: #646464;
            }
        }
        .user-wrapper {
            height: 25px;
            width: 25px;
            background-color: #fff;
            img {
                display: none;
                height: 100%;
                width: 100%;
            }
        }
    }


}
@keyframes fade {
    
    0%{
        transform-origin: top;
        opacity: 0;
        transform: scaleY(0);
    }
    100%{
        transform-origin: top;
        opacity: 100%;
        transform: scaleY(100%);
    }
}
.drop-down{
    width: 100%;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    padding: 1rem 0;
    display: none;
    animation: fade .25s ;
    &.visible{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .department-wrapper{
        display: flex;
        align-items: center;
        padding: 1rem 2rem;
        cursor: pointer;
        &:hover{
            border-radius: 5px;
            outline: 1px solid #e2e2e2;
            background-color: rgb(252, 252, 252);
        }
        .text {
            display: flex;
            flex-direction: column;
            font-family: var(--primary-font);
            .span-1{
                font-weight: 800;
                font-size: .875rem;
                margin-bottom: .5rem;
            }
            .span-2{
                font-size: .875rem;
                color: rgb(102, 102, 102);
            }

        }
        .img-wrapper{
            margin-right: 1rem;
            width: 50px;
            height: 50px;
            background-color: #000;
            clip-path: circle(50% at 50% 50%);
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 50%;
                height: 50%;
            }

        }
    }
}
</style>
