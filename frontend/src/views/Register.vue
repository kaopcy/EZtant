<template>
    <div class="register">
        <div class="card-wrapper">
            <Card :user="role == 'student' ? student : teacher " :role="role" />
        </div>
        <div class="register-wrapper">
            <h1>Register</h1>
            <div class="radio-container">
                <h2>Role: </h2>
                <input type="radio" name="role" id="teacher" value="teacher" v-model="role" >
                <input type="radio" name="role" id="student" value="student" v-model="role" >
                    <label for="teacher" class="wrapper teacher-wrapper">
                        <span>teacher</span>
                        <img src="../../public/image/image/teacherlogo.png" alt="">
                    </label>
                    <label for="student" class="wrapper student-wrapper">
                        <span>student</span>
                        <img src="../../public/image/image/student.png" alt="">
                    </label>
            </div>
            <form v-if="role == 'student'" class="student-form">
                <div class="input">
                    <input
                        type="tel"
                        v-model="student.studentID"
                        placeholder="StudentID"
                        maxlength="8"
                    />
                </div>
                <div class="input">
                    <input
                        type="text"
                        v-model="student.firstName"
                        placeholder="Firstname"
                    />
                </div>
                <div class="input">
                    <input
                        type="text"
                        v-model="student.lastName"
                        placeholder="LastName"
                    />
                </div>
                <div class="input">
                    <input
                        type="email"
                        v-model="student.email"
                        placeholder="Email"
                    />
                </div>
                <div class="input">
                    <input
                        type="password"
                        v-model="student.password"
                        placeholder="Password"
                    />
                </div>
                <div class="faculty-year">
                        <input
                            class="faculty"
                            list="faculty"
                            v-model="student.faculty"
                            placeholder="Faculty"
                        />
                        <datalist id="faculty">
                            <option value="Edge"></option>
                            <option value="Firefox"></option>
                            <option value="Chrome"></option>
                            <option value="Opera"></option>
                            <option value="Safari"></option>
                        </datalist>

                        <input
                            class="year"
                            list="year"
                            v-model="student.year"
                            placeholder="year"
                        />
                        <datalist id="year">
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option value="4"></option>
                        </datalist>
                </div>
                <div class="btn-wrapper">
                    <router-link class="login-btn" :to="{name: 'Home'}">
                        already have account?
                    </router-link>
                    <div class="register-btn" @click="register">
                        REGISTER
                    </div>
                </div>
                
            </form>
            <form v-if="role == 'teacher'" class="teacher-form">
                <div class="input">
                    <input
                        type="text"
                        v-model="teacher.username"
                        placeholder="Username"
                        maxlength="8"
                    />
                </div>
                <div class="input">
                    <input
                        type="text"
                        v-model="teacher.firstName"
                        placeholder="Firstname"
                    />
                </div>
                <div class="input">
                    <input
                        type="text"
                        v-model="teacher.lastName"
                        placeholder="LastName"
                    />
                </div>
                <div class="input">
                    <input
                        type="email"
                        v-model="teacher.email"
                        placeholder="Email"
                    />
                </div>
                <div class="input">
                    <input
                        type="password"
                        v-model="teacher.password"
                        placeholder="Password"
                    />
                </div>
                <div class="faculty-year">
                        <input
                            class="faculty"
                            list="faculty"
                            v-model="teacher.faculty"
                            placeholder="Faculty"
                        />
                        <datalist id="faculty">
                            <option value="Edge"></option>
                            <option value="Firefox"></option>
                            <option value="Chrome"></option>
                            <option value="Opera"></option>
                            <option value="Safari"></option>
                        </datalist>
                </div>
                <div class="btn-wrapper">
                    <router-link class="login-btn" :to="{name: 'Home'}">
                        already have account?
                    </router-link>
                    <div class="register-btn" @click="register">
                        REGISTER
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive , ref } from "vue";
import { useRouter } from 'vue-router'

import Card from "../components/Card.vue";

export default {
    name: "Register",
    components: {
        Card,
    },
    setup() {
        const router = useRouter()

        const role = ref(null)

        const student = reactive({
            studentID: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            faculty: "",
            year: "",
        });

        const teacher = reactive({
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            faculty: "",
        })

        const register = ()=> {
            alert('Registered')
            router.replace({ name: 'Home' })
        }
        
        return { role , student , teacher , register };
    },
};
</script>

<style lang="scss" scoped>
:root {
}
.register {
    font-family: var(--primary-font);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    @media (max-width: 676px) {
        flex-direction: column;
    }

    .card-wrapper {
        @media (max-width: 676px) {
            display: none;
        }
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .register-wrapper {
        overflow: hidden;
        padding-left: 1rem;
        flex: 4;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: var(--primary-font-color);
        @media (max-width: 900px) {
            flex: 3;
        }
        @media (max-width: 676px) {
            padding-left: 3rem;
        }

        h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            @media (max-width: 1200px) {
                font-size: 3.4rem;
            }
            @media (max-width: 1000px) {
                font-size: 3.3rem;
            }
        }

        .radio-container{
            display: flex;
            align-items: center;
            h2{
                font-size: 1.5rem;
                margin-right: .5rem ;
                @media (max-width: 860px) {
                    font-size: 1rem;
                }
            }
            input[type="radio"]{
                display: none;
            }
            #teacher:checked ~ .teacher-wrapper{
                color: #fff;
                &::before{
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-color: var(--secondary-color-normal);
                    transition: .5s;
                    z-index: -1;
                    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px;

                }
                &:hover{
                    outline: none;
                }
            }
            #student:checked ~ .student-wrapper{
                color: #fff;
                box-shadow: none;
                &:hover{
                    outline: none;
                }
            }
            #student:checked ~ .teacher-wrapper{
                &::before{
                    z-index: -1;
                    transition: .5s ;
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-color: var(--secondary-color-normal);
                    transform: translateX(110%);
                    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px;
                }
            }
            .wrapper{
                transition: .5s;
                position: relative;
                text-transform: uppercase;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: .5rem 1rem;
                margin-right: 1rem;
                cursor: pointer;
                font-size: 1.5rem;
                font-weight: 900;
                
                &:hover{

                    outline: 1px solid #303030;
                }

                @media (max-width: 860px) {
                    font-size: 1rem;
                }
            }
            .student-wrapper{
                background-color: transparent;
            }
            .teacher-wrapper{
                background-color: transparent;
            }
            img{
                width: 40px;
                height: 40px;
                object-fit: cover;
                @media (max-width: 800px) {
                    width: 30px;
                    height: 30px;
                }
            }
        }
        .teacher-form{
            animation: .5s appear2;
        }
        .student-form{
            animation: .5s appear;
        }
        @keyframes appear {
            0%{
                transform: translateX(-100%);
            }
            100%{
                transform: translateX(0);
            }
        }
        @keyframes appear2 {
            0%{
                transform: translateX(100%);
            }
            100%{
                transform: translateX(0);
            }
        }
        form {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            .faculty-year{
                display: flex;
                .faculty{
                    width: 40%;
                    margin-right: 5%;
                    @media (max-width: 1000px) {
                        width: 60%;
                        margin-right: 5%;
                    }
                }
                .year{
                    @media (max-width: 1000px) {
                        width: 25%;
                    }
                    width: 25%;
                }

            }
            input {
                &::placeholder {
                    font-size: 1rem;
                    color: var(--primary-font-color);
                }
                margin: 0.6rem 0;
                font-size: 1rem;
                width: 70%;
                border: none;
                padding: 0.9rem 1rem;
                color: rgb(134, 134, 134);
                font-family: var(--primary-font);
                font-weight: 300;
                box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
                &:focus {
                    box-shadow: rgba(69, 83, 95, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
                    outline: none;
                    &::placeholder {
                        font-size: 1rem;
                        color: var(--secondary-font-color);
                    }
                }
                @media (max-width: 1000px) {
                    width: 90%;
                    font-size: 1rem;
                }
                @media (max-width: 676px) {
                    }
            }
            .btn-wrapper{
                display: flex;
                width: 70%;
                @media (max-width: 1000px) {
                    width: 90%;
                }
                justify-content: space-between;
                align-items: center;
                .login-btn{
                    text-decoration: underline;
                    color: blue;
                    cursor: pointer;
                }
                .register-btn{
                    padding: .8rem 1.3rem;
                    color: #fff;
                    background-color: var(--secondary-color-normal);
                    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
                    font-weight: 900;
                    cursor: pointer;
                    transition: .5s ;
                    &:hover{
                        background-color: var(--secondary-color-dark);
                    }
                }
            }

        }
    }
}
</style>
