<template>
    <transition name="fade">
        <div class="popup-wrapper" v-if="isPopup && role === 'teacher'">
            <form class="post" @submit.prevent="post">
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
                        <input type="text" placeholder="Subject" v-model="data.subject" required/>
                        <input type="text" placeholder="Subject ID" required/>
                        <input type="number" placeholder="Person per group" required/>
                        <input type="number" placeholder="Payment" required/>
                    </div>
                    <!-- Add btn -->
                    <div class="add-schedule-wrapper">
                        <h1>
                            Schedule
                            <fa class="icon" :icon="['fas' , 'calendar-alt']" style="color:#a1a6ad"></fa>
                        </h1>
                    </div>
                    <!-- table -->
                    <div class="table-wrapper">
                        <Table ref="tableRef"/>
                    </div>
                </div>
                <!-- detail -->
                <div class="detail-wrapper">
                    <!-- header -->
                    <h1>Detail</h1>
                    <!-- input -->
                    <div class="input-wrapper">
                        <textarea placeholder="Enter detail..." v-model="data.detail" required></textarea>
                    </div>
                    <!-- post btn -->
                    <input type="submit" class="post-btn" name="Post">
                </div>
            </form>
        </div>
    </transition>
</template>

<script>
import { computed , ref } from "@vue/reactivity";
import { store } from "../../store";

import Table from "../../components/MainPost/AddTable.vue";
import useAddPost from '../../composables/useAddPost'
import useAuth from '../../composables/useAuth'

export default {
    name: "PostPopup",
    components: {
        Table,
    },
    setup() {
        const { addPost } = useAddPost()
        const { getFullName , role } = useAuth()
        const isPopup = computed(() => store.state.isPopup);
        const tableRef = ref(null)
        
        const data = ref({
            subject: "",
            author: "",
            detail: "",
        })
        const post = ()=>{
            tableRef.value.submitSchedule()
            addPost({
                subject: data.value.subject,
                author: getFullName,
                detail: data.value.detail
            })
            data.value = {
                subject: "",
                author: "",
                detail: "",
            }
            store.commit('toggleIsPopup')
        }

        return { store, isPopup , post , tableRef , data , role };
    },
};
</script>

<style lang="scss" scoped>

$main-color: #083672;
$button-color: #fff;
$button-color-hover: rgb(214, 54, 33);

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
            background-color: $button-color;
            transform-origin: center;
            &:nth-child(1) {
                transform: rotate(45deg);
            }
            &:nth-child(2) {
                transform: rotate(-45deg);
            }
        }

        @media (max-width: 800px) {
            span{
                background-color: rgb(0, 0, 0);
            }
        }

        &:hover {
            span {
                background-color: $button-color-hover;
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
    height: 90%;
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: row;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(219, 219, 219, 0.719);
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #b8b8b8;
        border-radius: 10px;
    }
    input{
        font-family: var(--primary-font);
        border: none;
        outline: none;
    }

    h1{
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-font-color);
        align-self: flex-start;
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
    @media (max-width: 650px) {
        flex-direction: column;
        width: 100%;
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
        h1{
            margin-bottom: 1rem;
            .icon{
                margin-left: .5rem;
            }
            &::after{
                display: none;
            }
        }
        .add-schedule-btn{
            color: var(--primary-font-color);
            font-weight: 600;
            padding: .5rem 1rem;
            margin: 1rem;
            border: 2px solid rgb(223, 223, 223);
            border-radius: 20px;
            cursor: pointer;
            transition: .25s;
            margin-bottom: 1rem;
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
        margin-bottom: 2rem;
        @media (max-width: 670px) {
            width: 100%;
        }
    }
}

.detail-wrapper{
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: $main-color;
    h1{
        color: #fff;
        &::after{
            border-bottom: 5px solid #fff;
        }
        
    }
    .input-wrapper{
        width: 80%;
        textarea{
            font-family: var(--primary-font);
            color: var(--primary-font-color);
            border: none;
            outline: 2px solid rgb(235, 235, 235);
            font-size: 1rem;
            padding: .5rem;
            border-radius: 4px;
            margin-top: 1rem;
            height: 300px;
            width: 100%;
        }
    }
    .post-btn{
        cursor: pointer;
        padding: .25rem 4rem;
        border: 3px solid white;
        border-radius: 40px;
        background-color: transparent;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        margin: 2rem 0;
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
