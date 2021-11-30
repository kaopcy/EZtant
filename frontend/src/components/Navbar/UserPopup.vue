<template>
    <transition name="fade">
        <div class="container" v-if="isClose">
            <CloseButton
                :attr="{ height: '3px', width: '20px', color: '#303030' }"
                @click="toggleClose()"
            />
            <div class="wrapper" v-if="isLoggedIn">
                <router-link class="head link" to="/student-profile/1" >
                    <img
                        :src="
                            user.imageURL ??
                            'https://th.jobsdb.com/th-th/cms/employer/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
                        "
                    />
                    <span class="role"
                        >{{ role }}
                        <fa
                            class="icon"
                            style="margin-left:.5rem"
                            :icon="[
                                'fas',
                                `${
                                    role === 'teacher'
                                        ? 'university'
                                        : 'graduation-cap'
                                }`,
                            ]"
                        ></fa>
                    </span>
                    <h1>{{ getFullName }}</h1>
                    <span>{{ user.email }}</span>
                </router-link>
                <div class="body"></div>
                <div class="footer">
                    <div class="button" @click="handleLogout">
                        Logout
                        <fa class="icon" :icon="['fas', 'sign-out-alt']"></fa>
                    </div>
                </div>
            </div>
            <div class="wrapper" v-if="!isLoggedIn">
                <router-link to="/Login">Login</router-link>
            </div>
        </div>
    </transition>
</template>

<script>
import useAuth from "../../composables/useAuth";
import CloseButton from "../../components/Accessory/CloseButton.vue";
import { ref } from "@vue/reactivity";
export default {
    name: "UserPopup",
    components: {
        CloseButton,
    },
    setup() {
        const { getFullName, user, isLoggedIn, logout, role } = useAuth();
        const isClose = ref(false);
        const handleLogout = () => {
            logout();
            window.location.reload();
        };

        const toggleClose = () => {
            isClose.value = !isClose.value;
        };

        return {
            getFullName,
            user,
            isLoggedIn,
            handleLogout,
            isClose,
            toggleClose,
            role,
        };
    },
};
</script>

<style lang="scss" scoped>
@keyframes spin {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
.container {
    position: absolute;
    min-width: 220px;
    top: 50px;
    right: -13px;
    background-color: #fff;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 10px;
    font-family: var(--primary-font);
    color: var(--primary-font-color);
}
.wrapper {
    display: flex;
    margin: 1rem;
    flex-direction: column;
    align-items: center;
    .head {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgb(231, 231, 231);
        img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 50%;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            margin-bottom: 1rem;
        }
        h1 {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--primary-font-color);
            white-space: nowrap;
            margin-bottom: 0.5rem;
        }
        span {
            font-size: 0.8rem;
            font-weight: 500;
            color: rgb(134, 134, 134);
        }
        .role {
            padding: 0.5rem 1rem;
            background-color: rgb(247, 247, 247);
            border: 1px dashed rgb(240, 240, 240);
            margin-bottom: 0.5rem;
        }
    }
    .body {
    }
    .footer {
        margin: 1rem;
        margin-bottom: 0rem;
        .button {
            padding: 0.5rem 1rem;
            color: #fff;
            border-radius: 4px;
            text-transform: uppercase;
            font-size: 0.85rem;
            font-weight: 700;
            background-color: var(--secondary-color-dark);
            outline: none;
            border: none;
            cursor: pointer;
            transition: background-color 0.25s ease-in-out;
            box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
            &:hover {
                background-color: var(--secondary-color-normal);
            }
            .icon {
                margin-left: 0.25rem;
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: 0.25s ease;
    transform-origin: top;
}

.fade-enter-from,
.fade-leave-to {
    transform: scaleY(0);
}
</style>
