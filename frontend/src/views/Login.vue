<template>
    <div class="hero">
        <Loading :Attr="{width:'100%',height:'100%'}" v-if="isLoading"/>
        <div class="form-box">
            <div>
                <img class="teachericon" src="../../src/assets/teacherlogo.png" alt="">
                <img class="logoicon" src="../../src/assets/logo.svg" alt="">
            </div>
            <form id="login" class="input-group" @submit.prevent="login(user.email , user.password )" v-if="!isLoading">
                <div class="n-input">User</div>
                <input
                    type="text"
                    class="input-field"
                    name="email"
                    id="email"
                    v-model="user.email"
                    autofocus
                />
                <div class="n-field">Password</div>
                <input
                    type="password"
                    class="input-field"
                    name="password"
                    id="password"
                    v-model="user.password"
                />
                <input type="checkbox" class="check-box"><span>Remember Password</span>
                <button type="submit" class="submit-btn">Login</button>
                <router-link type="submit" class="register-btn link" to="/register">Register</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import useAuth from '../composables/useAuth'
import Loading from '../components/Loading/LoadingComponent.vue'

export default {
    name: "Login",
    components:{
        Loading,
    },
    setup() {
        const { login , username , isLoading } = useAuth()
        const user = reactive({
            email: "",
            password: "",
        });
        return {
            user,
            login,
            username,
            isLoading
        };
    },
};
</script>

<style lang="scss" scoped>
.hero{
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom ,rgb(60,92,164),rgb(248, 248, 248));
    background-position: center;
    background-size: 100%;
    position: absolute;
    border-radius: 0% 0% 70% 0%;
    @media (max-width:640px){
    border-radius: 0% 0% 0% 0%;
    }
    margin-top:-1%;
    
}
.form-box{
    background:whitesmoke;
    width: 370px;
    height: 500px;
    position: relative;
    margin: 6% auto;
    padding: 5px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 10px 10px 20px #8888;
    @media (max-width:640px) {
    margin-top: 25%
    }
}
.n-input{
    margin: 4px 0;
}
.logo{
    right: 500px;
    background-position: center;
    max-width: 180px;
    border-radius: 78% 38% 25% 14% / 52% 50% 53% 48% ;
    margin: 30px 10px 30px 95px;
}
.logo h1{
    color: white;
    font-size: 50px;
    text-align: center;
    font-style:oblique;
}
.input-group{
    font-family: 'Inter', sans-serif;
    top: 210px;
    position: absolute;
    width: 280px;
    transition: .5s;
}
.input-field{
    width: 100%;
    padding: .5rem .5rem;
    margin: 0px 0px 15px 0px;
    outline: none;
    border: none;
    background: transparent;
    border-bottom: 1px solid #000000;
    &:focus{
        border: 1px solid rgb(219, 219, 219);
        border-bottom: 1px solid #000000;
    }
}
.submit-btn{
    color: white;
    font-size: 13px;
    width: 50%;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    margin: 10px 25%;
    background:#3c5ca4;
    border: 0;
    outline: none;
    border-radius: 30px;
    box-shadow: 4px 2px 5px rgba(112, 112, 112, 0.533);
}
.register-btn{
    color: white;
    font-size: 13px;
    width: 50%;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    margin: auto;
    background:#3c5ca4;
    border: 0;
    outline: none;
    border-radius: 30px;
    box-shadow: 4px 2px 5px rgba(112, 112, 112, 0.533);
    font-family: var(--primary-font);
    text-align: center;
}
.check-box{
    margin: 7px 0px 10px 143px;
    color: #946474;
}
span{
    color: #946474;
    font-size: 12px;
    bottom: 100.5px;
    left: 159px;
    position: absolute;
}
#login{
    left: 50px
}
.usericon{
    color: var(--primarydark);
}
.teachericon{
    padding: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 40%;
    height: auto;
}
.logoicon{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 45%;
    height: auto;
}
</style>
