<template>
    <div class="login-container">
        <form class="login-wrapper" @submit.prevent="login(user.email , user.password )">
            <h1>Login</h1>
            <div class="input-wrapper">
                <label for="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    v-model="user.email"
                    autofocus
                />
            </div>
            <div class="input-wrapper">
                <label for="password">Password:</label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    v-model="user.password"
                />
            </div>
            <div class="bottom">
                <div class="checkbox-wrapper">
                    <label for="rememberMe">Remember?</label>
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                </div>
                <button class="submit-btn">Login</button>
            </div>
            <div class="error-data">
                <span>{{ errorData ? errorData : "" }}</span>
            </div>
        </form>
    </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";

import useAuth from '../composables/useAuth'

export default {
    name: "Login",
    setup() {

        const { login , username } = useAuth()

        const user = reactive({
            email: "",
            password: "",
        });

        const loginData = ref(null);
        const errorData = ref(null);

        return {
            user,
            login,
            errorData,
            loginData,
            username
        };
    },
};
</script>

<style lang="scss" scoped>
button {
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    text-decoration: none;
    align-self: flex-end;
    background-color: var(--secondary-color-dark);
    color: #fff;
    font-family: var(--primary-font);
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.25s background-color;
    &:hover {
        background-color: var(--secondary-color-normal);
    }
}
.login-container {
    width: 100%;
    height: 100vh;
    font-family: var(--primary-font);
    color: var(--primary-font-color);
    display: flex;
    justify-content: center;
    align-items: center;
    .login-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
        // border: 1px solid rgb(180, 180, 180);
        padding: 2rem 1rem;
        // border-radius: 5px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        h1 {
            margin-bottom: 1rem;
            align-self: center;
        }
        .input-wrapper {
            position: relative;
            margin-bottom: 0.5rem;
            label {
                margin-right: 1rem;
            }
            input {
                border: none;
                outline: 1px solid rgb(235, 235, 235);
                padding: 0.35rem 0.75rem;
            }
        }
        .bottom {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            margin-top: 1rem;
            .checkbox-wrapper {
                display: flex;
                align-items: center;
                label {
                    margin-right: 0.5rem;
                }
            }
            button {
                padding: 0.5rem 1rem;
                border: none;
                outline: none;
                text-decoration: none;
                align-self: flex-end;
                background-color: var(--secondary-color-dark);
                color: #fff;
                font-family: var(--primary-font);
                font-size: 1rem;
                font-weight: 500;
                border-radius: 8px;
                cursor: pointer;
                transition: 0.25s background-color;
                &:hover {
                    background-color: var(--secondary-color-normal);
                }
            }
        }
    }
}
</style>
