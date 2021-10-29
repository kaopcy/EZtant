<template>
<div>
    <NavBar class="navbar" v-if="route.name !== 'Register'"/>
    <div class="link-wrapper">
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import { useRoute } from 'vue-router'

export default {
    components:{
        NavBar,
    },
    setup() {
        const route = useRoute()
        return { route }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Rubik:wght@300&display=swap');
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
.navbar{
    position: fixed;
    top: 0;
    left: 0;
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
