<template>
    <transition name="fade">
        <div class="popup-wrapper" v-if="isPopup">
            <div class="post">
                <!-- close btn -->
                <button id="close-btn" @click="store.commit('toggleIsPopup')">
                    <span></span>
                    <span></span>
                </button>

                <!-- main -->
                <div class="main-wrapper">
                    <!-- header -->
                    <h1>Course detail</h1>
                    <!-- input -->
                    <div class="input-wrapper">
                        <input type="text" placeholder="Subject" />
                        <input type="text" placeholder="Subject ID" />
                        <input type="text" placeholder="Person per group" />
                        <input type="text" placeholder="Payment" />
                    </div>
                    <!-- Add btn -->
                    <div class="add-schedule-wrapper">
                        <div class="add-schedule-btn">
                            Add schedule
                        </div>
                    </div>
                    <!-- table -->
                    <div class="table-wrapper">
                        <Table />
                    </div>
                </div>
                <!-- detail -->
                <div class="detail-wrapper">
                    <!-- header -->
                    <h1>Detail</h1>
                    <!-- input -->
                    <div class="input-wrapper">
                        <input type="text" placeholder="Fill your detail" >
                    </div>
                    <!-- post btn -->
                    <div class="post-btn">
                        Post
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { computed } from "@vue/reactivity";
import { store } from "../../store";

import Table from "../../components/MainPost/AddTable.vue";

export default {
    name: "PostPopup",
    components: {
        Table,
    },
    setup() {
        const isPopup = computed(() => store.state.isPopup);
        
        return { store, isPopup };
    },
};
</script>

<style lang="scss" scoped>

$main-color: #083672;

.popup-wrapper {
    font-family: var(--primary-font);
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.527);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    #close-btn {
        width: 30px;
        height: 30px;
        padding: 5px;
        border: none;
        background-color: transparent;
        position: absolute;
        right: 0;
        margin: 1rem;
        z-index: 101;
        cursor: pointer;
        top: 0;
        span {
            transition: 0.25s;
            position: absolute;
            top: 50%;
            left: 0;
            height: 5px;
            width: 100%;
            background-color: #000;
            transform-origin: center;
            &:nth-child(1) {
                transform: rotate(45deg);
            }
            &:nth-child(2) {
                transform: rotate(-45deg);
            }
        }

        &:hover {
            span {
                background-color: rgb(59, 59, 59);
                &:nth-child(1) {
                    transform: rotate(135deg);
                }
                &:nth-child(2) {
                    transform: rotate(-135deg);
                }
            }
        }
    }
}

.post {
    width: 70%;
    height: 80%;
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: row;

    input{
        font-family: var(--primary-font);
        border: none;
        outline: none;
    }

    h1{
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-font-color);
        align-self: start;
        position: relative;
        padding: 2rem 2rem .8rem 2rem;
        &::after{
            content: '';
            position: absolute;
            inset: 0;
            border-bottom: 5px solid var(--primary-font-color);
        }
    }
    @media (max-width: 800px) {
        flex-direction: column;
        max-width: 90%;
        min-width: 200px;
    }
}

.main-wrapper{
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    .input-wrapper{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        width: 70%;
        input{
            margin-top: 1rem;
            padding: .5rem;
            border: .5px solid rgb(233, 233, 233);
            width: 100%;
            outline: none;

            &:focus{
                outline: none;
                border: .5px solid rgb(184, 184, 184);
            }

            &::placeholder{
                color: rgb(192, 192, 192);
            }

        }
    }
    .add-schedule-wrapper{
        .add-schedule-btn{
            color: var(--primary-font-color);
            font-weight: 600;
            padding: .5rem 1rem;
            margin: 1rem;
            border: 2px solid rgb(223, 223, 223);
            border-radius: 20px;
            cursor: pointer;
            transition: .25s;
            &:hover{
                border: 2px solid $main-color;
            }
        }
        
    }
    .table-wrapper{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.detail-wrapper{
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $main-color;
    h1{
        color: #fff;
        &::after{
            border-bottom: 5px solid #fff;
        }
    }
    .input-wrapper{
        input{
            height: 300px;
        }
    }
    .post-btn{

    }

}



.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
