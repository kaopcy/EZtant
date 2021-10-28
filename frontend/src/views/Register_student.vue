<template>
    <div class="register">
        <div class="card-wrapper">
            <Card/>
            <div class="card">
                <div class="tab-color"></div>
                <div class="block-1">
                    <div class="img">
                        <div class="img-wrapper">
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.53753 48.25533">
                            <defs>
                            </defs>
                            <title>profile</title>
                            <circle class="cls-1" cx="21.1061" cy="12.92553" r="12.92553"/>
                            <path class="cls-1" d="M99,301.40427h42.383a18.61963,18.61963,0,0,0-2.04256-9.44681c-5.31183-10.05683-18.39745-10.57749-19.14893-10.59577-9.03847.00364-16.85483,4.225-19.91489,10.97873A17.03329,17.03329,0,0,0,99,301.40427Z" transform="translate(-98.86199 -253.14894)"/>
                            </svg>
                        </div>
                    </div>
                    <div class="text">
                        <span class="label">NAME</span>
                        <span class="info">{{user.firstName ? user.firstName:'firstname' }}</span>
                        <span class="info">{{user.lastName ? user.lastName:'lastname' }}</span>
                        <span class="label">STUDENTID</span>
                        <span class="info">{{user.username ? user.username:'-' }}</span>
                    </div>
                </div>
                <div class="block-2">
                    <span class="label">Faculty</span>
                    <span class="info">{{user.username ? user.username:'-' }}</span>
                </div>
            </div>
        </div>
        <div class="register-wrapper">
            <h1>Register</h1>
            <form>
                <div class="input">
                    <div class="label">Username: </div>
                    <input type="number" v-model="user.username" >
                </div>
                <div class="input">
                    <div class="label">Firstname: </div>
                    <input type="text" v-model="user.firstName" >
                </div>
                <div class="input">
                    <div class="label">Lastname: </div>
                    <input type="text" v-model="user.lastName" >
                </div>
                <div class="input">
                    <div class="label">Email: </div>
                    <input type="text" v-model="user.email" >
                </div>
                <div class="input">
                    <div class="label">Password: </div>
                    <input type="text" v-model="user.password" >
                </div>
                <div class="input">
                    <div class="label">Faculty: </div>
                    <input list="browsers" v-model="user.faculty" >
                    <datalist id="browsers">
                        <option value="Edge"></option>
                        <option value="Firefox"></option>
                        <option value="Chrome"></option>
                        <option value="Opera"></option>
                        <option value="Safari"></option>
                    </datalist>
                    <div class="label">Years: </div>
                    <input type="button" v-model="user.faculty" >
                </div>
            </form>
        </div>
    </div>

</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import Card from '../components/Card.vue'

export default {
    name: 'Register_student',
    components:{
        Card,
    },
    setup(){
        const user = reactive({
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            faculty: '',
        })
        onMounted(()=>{
            console.log(screen.width);
            console.log(screen.height);
        })

        return { user }
    }
}
</script>

<style lang="scss" scoped>
:root{
    --card-height-normal: 810px;
    --card-width-normal: 571px;

    --card-height-s: 486px;
    --card-width-s: 343px;
    
}
.register{
    width: 100vw;
    height: 100vh;
    font-family: var(--primary-font);
    display: flex;
    flex-direction: row;
    @media (max-width: 1400px) {
        flex-direction: column;
    }
    .card-wrapper{
        @media (max-width: 850px) {
            display: none;
        }
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        .card{
            height: var(--card-height-normal);
            width: var(--card-width-normal);
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            border-radius: 1.5rem;
            position: relative;
            background-color: var(--secondary-color-normal);
            display: flex;
            flex-direction: column;
            @media (max-width: 850px) {
                height: var(--card-height-s);
                width: var(--card-width-s);
            }   
            &::before{
                border-radius: 1.4rem;
                content: '';
                position: absolute;
                inset: 0;
                background-color: var(--primary-color-normal);
                clip-path: ellipse(99% 60% at 53% 10%);
                z-index: 1;
            }
            &::after{
                border-radius: 1.5rem;
                content: '';
                position: absolute;
                inset: 0;
                background-color: var(--secondary-color-dark);
                clip-path: ellipse(99% 65% at 53% 10%);
                z-index: 0;
            }
            .label{
                font-weight: 300;
                font-size: 1rem;
                margin-top: 1rem;
                margin-bottom: 1rem;
            }
            .info{
                text-transform: uppercase;
                font-weight: 400;
                font-size: 2rem;
                line-height: 1.7rem;
            }
            .tab-color{
                width: 100%;
                height: 30px;
                background-color: var(--secondary-color-dark);
                z-index: 2;
                border-top-left-radius: 1.5rem;
                border-top-right-radius: 1.5rem;
            }
            .block-1{
                z-index: 2;
                display: flex;
                padding-top: 3rem;
                margin-bottom: 3rem;
                .img{
                    flex: 4;
                    padding-top: 2.8rem;
                    .img-wrapper{
                        margin: 0 auto;
                        padding: 2rem 1.5rem .2rem 1.5rem;
                        width: 60%;
                        background-color: var(--secondary-color-dark);
                        border-radius: 10px;
                    }
                    .cls-1 {
                        fill: #fff;
                    }
                }
                .text{
                    flex: 5;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    margin-left: 1rem;
                }
            }
            .block-2{
                display: flex;
                align-items: center;
                z-index: 2;
                margin-left: 3rem;
                .info{
                    margin-left: 2rem;
                }
            }

        }
    }
    .register-wrapper{
        flex: 3;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
            font-size: 5rem;
            font-weight: 700;
            color: var(--primary-font-color);
            margin-bottom: 4rem;
        }
        form{
            display: flex;
            flex-direction: column;
            @media (max-width: 850px) {
                
            }
            .input{
                display: flex;
                margin-bottom: 2rem;
                .label{
                    padding: .5rem 0rem;
                    font-size: 2.25rem;
                    flex: 1;                    
                    margin-right: 3rem;
                    font-weight: 300;
                    @media (max-width: 850px) {
                        font-size: 1rem;
                    }
                }
                input{
                    font-size: 2.25rem;
                    @media (max-width: 850px) {
                        font-size: 1rem;
                    }
                    padding: .5rem 1rem;
                    font-weight: 300;
                    font-family: var(--primary-font);
                    border: none;
                    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
                    &:focus{
                        box-shadow: rgba(49, 51, 53, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
                        outline: none;
                    }
                }
            }
        }
    }
}
</style>
