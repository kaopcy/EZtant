<template>
    <div class="wrapper">
        <div class="logo-wrapper">
            <img src="../../public/logo.svg"  alt="" @click="homeNav()">
        </div>
        <div class="content-wrapper">
            <router-link class="link" to="/">About</router-link> 
            <router-link class="link" to="/">Post</router-link> 
            <router-link class="link" to="/">Department</router-link> 
            <router-link class="link" to="/">Teacher</router-link> 
            <router-link class="link" to="/">TA</router-link> 
            <router-link class="link" to="/register">Contact</router-link> 
            <div class="logo-wrapper">
                <img src="../../public/image/profile.svg" alt="">
            </div>
        </div>

    </div>
</template>

<script>
import { useRouter  } from 'vue-router'
export default {
    name: 'NavBar',
    setup() {
        const router = useRouter()
        
        const homeNav = ()=>{
            router.replace( { name: 'Home' } )
        }
        return { homeNav }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    font-family: var(--primary-font);
    width: 100vw;
    height: 70px;
    background-color: #1f1f1f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-wrapper{
        margin-left: 5%;
        height: 40%;
        img{
            height: 100%;
        }
    }
    .content-wrapper{
        display: flex;
        .link{
            color: #fff;
            font-weight: 600;
            font-size: 1.1rem;
            text-decoration: none;
            padding: .5rem 1rem;
            border-radius: 5px;
            margin-right: 1rem;
            transition: .5s;
            &:hover{
                background-color: #fff;
                color: #1b1b1b;

            }
        }
        .logo-wrapper{

        }
    }

    .content-wrapper{

    }
}
</style>