<template>
    <div class="wrapper">
        <div class="info-wrapper">
            <div class="h1-wrapper">
                <span>Username</span>
                <span>First name</span>
                <span>Last name</span>
                <span>Email</span>
                <span>Faculty</span>
                <span>ImageURL</span>
            </div>
            <div class="colon-wrapper">
                <span>:</span>
                <span>:</span>
                <span>:</span>
                <span>:</span>
                <span>:</span>
                <span>:</span>
            </div>
            <div class="span-wrapper">
                <input type="text" v-model="user.email" :disabled="!isEdit" />
                <input
                    type="text"
                    v-model="user.firstName"
                    :disabled="!isEdit"
                />
                <input
                    type="text"
                    v-model="user.lastName"
                    :disabled="!isEdit"
                />
                <input type="text" v-model="user.email" :disabled="!isEdit" />
                <input
                    type="text"
                    v-model="user.department"
                    :disabled="!isEdit"
                />
                <input
                    type="text"
                    v-model="user.imageURL"
                    :disabled="!isEdit"
                />
            </div>
            <div class="span-wrapper" v-if="isEdit">
                <span>
                    <fa
                        class="icon"
                        :icon="['fas', 'trash-alt']"
                        style="color: rgb(197, 42, 42)"
                        @click="user.email = ''"
                    ></fa>
                </span>
                <span>
                    <fa
                        class="icon"
                        :icon="['fas', 'trash-alt']"
                        style="color: rgb(197, 42, 42)"
                        @click="user.firstName = ''"
                    ></fa>
                </span>
                <span>
                    <fa
                        class="icon"
                        :icon="['fas', 'trash-alt']"
                        style="color: rgb(197, 42, 42)"
                        @click="user.lastName = ''"

                    ></fa>
                </span>
                <span>
                    <fa
                        class="icon"
                        :icon="['fas', 'trash-alt']"
                        style="color: rgb(197, 42, 42)"
                        @click="user.email = ''"

                    ></fa>
                </span>
                <span>
                    <fa
                        class="icon"
                        :icon="['fas', 'trash-alt']"
                        style="color: rgb(197, 42, 42)"
                        @click="user.department = ''"
                    ></fa>
                </span>
                <span>
                    <fa
                        class="icon"
                        :icon="['fas', 'trash-alt']"
                        style="color: rgb(197, 42, 42)"
                        @click="user.imageURL = ''"
                    ></fa>
                </span>
                
            </div>
        </div>

        <div class="btn-wrapper">
            <div class="btn" @click="isEdit = !isEdit">
                <span>Edit</span>
                <fa class="icon" :icon="['fas', 'edit']" />
            </div>
            <div class="btn" @click="changePassword()">
                <span>Change Password</span>
                <fa class="icon" :icon="['fas', 'key']" />
            </div>
            <button class="btn" @click="updateUser(user)" :disabled="!isEdit">
                <span>Save</span>
                <fa class="icon" :icon="['fas', 'save']" />
            </button>
        </div>
    </div>
</template>

<script>
import { inject, ref } from "@vue/runtime-core";
import useAuth from "../../composables/useAuth";
export default {
    name: "Info",
    setup() {
        const { updateUser , changePassword } = useAuth();
        const user = inject("user");
        const isEdit = ref(false);
        return { user, isEdit, updateUser , changePassword };
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (max-width: 630px) {
        width: 100%;
    }
}
.info-wrapper {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    margin-bottom: 2rem;
    white-space: nowrap;
    @media (max-width: 700px) {
        margin-left: 0;
    }
    span,
    input {
        font-size: 1.25rem;
        font-weight: 800;
        margin: 0.5rem 0;
        @media (max-width: 600px) {
            font-size: 1rem;
        }
    }
    input {
        padding: 0.25rem;
        padding-left: 0.5rem;
        border-radius: 5px;
        margin: 0.25rem;
        border: none;
        color: rgb(134, 134, 134);
        outline: 1px solid rgb(224, 224, 224);
    }
    .h1-wrapper {
        display: flex;
        flex-direction: column;
    }
    .colon-wrapper {
        display: flex;
        flex-direction: column;
        margin: 0 0.45rem;
    }
    .span-wrapper {
        font-size: 1rem;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        span,
        input {
            font-weight: 400;
            &:disabled {
                outline: none;
            }
        }
        .icon {
            margin-left: 0.5rem;
            &:hover {
                animation: cutie 0.5s infinite linear;
                @keyframes cutie {
                    0% {
                        transform: rotate(20deg);
                    }
                    50% {
                        transform: rotate(-20deg);
                    }
                    100% {
                        transform: rotate(20deg);
                    }
                }
            }
        }
    }
}
.btn-wrapper {
    display: flex;
    align-self: flex-end;
    @media (max-width: 630px) {
        flex-direction: column;
        gap: 0.5rem;
    }
    .btn {
        display: flex;
        padding: 0.5rem 1rem;
        border: 1px solid rgb(214, 214, 214);
        border-radius: 5px;
        margin-right: 1rem;
        transition: 0.25s background-color, color;
        span {
            margin-right: 0.5rem;
        }
        &:hover:not([disabled]) {
            cursor: pointer;
            background-color: var(--primary-font-color);
            color: #fff;
        }
    }
}
.input-password{
    padding: 1rem;
    
}
</style>
