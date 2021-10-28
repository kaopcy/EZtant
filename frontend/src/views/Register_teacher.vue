<template>
    <div class="register">
        <div class="card-wrapper">
            <Card :user="user"/>
        </div>
        <div class="register-wrapper">
            <h1>Register</h1>
            <form>
                <div class="input">
                    <input
                        type="tel"
                        v-model="user.studentID"
                        placeholder="StudentID"
                        maxlength="8"
                    />
                </div>
                <div class="input">
                    <input
                        type="text"
                        v-model="user.firstName"
                        placeholder="Firstname"
                    />
                </div>
                <div class="input">
                    <input
                        type="text"
                        v-model="user.lastName"
                        placeholder="LastName"
                    />
                </div>
                <div class="input">
                    <input
                        type="email"
                        v-model="user.email"
                        placeholder="Email"
                    />
                </div>
                <div class="input">
                    <input
                        type="password"
                        v-model="user.password"
                        placeholder="Password"
                    />
                </div>
                <div class="faculty-year">
                        <input
                            class="faculty"
                            list="faculty"
                            v-model="user.faculty"
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
                            v-model="user.year"
                            placeholder="year"
                        />
                        <datalist id="year">
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option value="4"></option>
                        </datalist>

                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";

import Card from "../components/Card.vue";

export default {
    name: "Register_teacher",

    components: {
        Card,
    },

    setup() {
        const user = reactive({
            studentID: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            faculty: "",
            year: "",
        });


        return { user };
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
            @media (max-width: 1200px) {
                font-size: 3.4rem;
            }
            @media (max-width: 1000px) {
                font-size: 3.3rem;
            }
        }
        form {
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
                margin: 0.8rem 0;
                font-size: 1rem;
                width: 70%;
                border: none;
                padding: 0.9rem 1rem;
                color: rgb(134, 134, 134);
                font-family: var(--primary-font);
                font-weight: 300;
                box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
                    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
                &:focus {
                    box-shadow: rgba(49, 51, 53, 0.48) 6px 2px 16px 0px,
                        rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
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
        }
    }
}
</style>
