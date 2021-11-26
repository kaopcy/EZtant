<template>
<div>
    <!-- <div class="banner"  v-if="route.name !== 'Register'"> -->
        <div class="blank" id="blank" v-if="route.name !== 'Register'">
            <span>Want to become part of us?</span><router-link to="/register" class="register-link">Sign up</router-link>
        </div>
        <NavBar class="navbar" v-if="route.name !== 'Register'" />
    <!-- </div> -->
    <div class="link-wrapper">
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import { store } from './store'

import { useRoute } from 'vue-router'
import { onMounted, onUnmounted } from '@vue/runtime-core'

export default {
    components:{
        NavBar,
    },
    setup() {
        const route = useRoute()
        onMounted(()=>{
            onResize()
            window.addEventListener('resize' , onResize )
        })
        
        onUnmounted(()=>{
            window.removeEventListener('resize' , onResize )
        })

        const onResize = ()=>{
            if (window.innerWidth < 600){
                store.commit('setIsMoblie' , true)
            }
            else{
                store.commit('setIsMoblie' , false)
            }
        }

        return { route }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Rubik:wght@300&display=swap');
.test{
    position: fixed;
    top: 400px;
    left: 100px;
}

:root{
    --primary-font: 'Inter', sans-serif;
    --secondary-font: 'Rubik', sans-serif;
    --primary-font-color: #303030;
    --secondary-font-color: #4e4e4e;

    --primary-color-normal: #fff;
    --secondary-color-normal: #79A7E2;
    --secondary-color-dark: #1D4AA6;
    --secondary-color-light: #a9c8f0;
    
    --card-height-normal: 810px;
    --card-width-normal: 571px;

    --card-height-s: 486px;
    --card-width-s: 343px;

    --banner-height: 50px;
    --navbar-height: 85px;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    background-color: #ffffff;
}

.blank {
    justify-content: center;
    height: var(--banner-height);
    background-color: rgb(15, 15, 15);
    width: 100%;
    color: #fff;
    font-family: var(--primary-font);
    display: flex;
    align-items: center;
    span{
        margin-right: 2rem;
    }
    .register-link{
        color: rgb(129, 0, 108);
        font-weight: 700;
        margin-right: 5rem;
    }
}

.navbar{
    position: sticky;
    z-index: 100;
    top: 0;
}

.link-wrapper{
    right: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    font-family: var(--primary-font);
    font-weight: 900;
    .link{
        padding: .5rem 1rem;
        text-decoration: none;
        color: var(--primary-font-color);
        background-color: var(--secondary-color-normal);
    }
}
</style>
