<template>
<div>
    <!-- <div class="banner"  v-if="route.name !== 'Register'"> -->
        <div class="blank" v-if="route.name !== 'Register'"></div>
        <NavBar class="navbar" v-if="route.name !== 'Register'" />
    <!-- </div> -->
    <div class="test">{{width}}</div>
    <div class="link-wrapper">
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted, ref, watch } from '@vue/runtime-core'

export default {
    components:{
        NavBar,
    },
    setup() {
        const route = useRoute()
        const width = ref(0)

        watch(width , ()=>{
            console.log(window.innerWidth );
        })
        
        onMounted(()=>{
            window.addEventListener('resize' , onResize )
        })
        
        onUnmounted(()=>{
            window.removeEventListener('resize' , onResize )
        })

        const onResize = ()=>{
            width.value = window.innerWidth
        }

        return { route , width }
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
    
    --card-height-normal: 810px;
    --card-width-normal: 571px;

    --card-height-s: 486px;
    --card-width-s: 343px;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.blank {
    height: 40px;
    background-color: #000;
    width: 100%;
}

.navbar{
    position: sticky;
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
