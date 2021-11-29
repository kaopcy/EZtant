<template>
    <div class="main-wrapper">
        <div class="search-bar-wrapper">
            <input type="text" class="search-bar" placeholder="Search" />
            <fa class="icon" :icon="['fas', 'search']" />
            <fa class="icon" :icon="['fas', 'sort-alpha-down']" />
        </div>
        <Loading v-if="isLoading" :Attr="{ width: '500px', height: '500px' }" />
        <div class="student-list-wrapper" v-if="!isLoading">
            <div
                class="student-list"
                v-for="student in allStudent"
                :key="student"
            >
                <div class="left">
                    <div class="img-wrapper">
                        <img :src="student.image" alt="" />
                    </div>
                    <div class="text-wrapper">
                        <h1>{{ student.firstName }} {{ student.lastName }}</h1>
                        <span>{{ student.studentID }} {{ student.year }}D</span>
                    </div>
                </div>
                <div class="right">
                    <fa class="icon" :icon="['fas','star']" ></fa>
                    <span>{{getRandomStar()}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
import useUserData from "../../composables/useUserData";
import Loading from "../../components/Loading/LoadingComponent.vue";

export default {
    name: "StudentList",
    components: {
        Loading,
    },
    setup() {
        const { getAllStudent, isLoading } = useUserData();
        const allStudent = ref(null);
        onMounted(async () => {
            allStudent.value = await getAllStudent();
        });

        // random star
        const getRandomStar = ()=> parseInt((Math.random() * 30))

        return {
            isLoading,
            allStudent,
            getRandomStar
        };
    },
};
</script>

<style lang="scss" scoped>
$search-width: 500px;

.main-wrapper {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--primary-font-color);
    .search-bar-wrapper {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        @media (max-width: 600px) {
            width: 90%;
        }
        input {
            border: 1px solid rgb(230, 230, 230);
            outline: none;
            padding: 0.75rem 1rem;
            width: $search-width;
            border-radius: 4px;
            @media (max-width: 600px) {
                width: 90%;
            }
            &:focus {
            }
            &::placeholder {
                color: rgb(204, 204, 204);
            }
        }
        .icon {
            margin: 0.5rem;
            color: var(--primary-font-color);
        }
    }
    .student-list-wrapper {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 560px;
        max-width: 60%;
        @media (max-width: 600px) {
            min-width: 90%;
            max-width: 90%;
        }

        .student-list {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 1rem;
            border: 1px solid rgb(238, 238, 238);
            cursor: pointer;
            transition: 0.25s;
            justify-content: space-between;

            &:hover {
                background-color: rgb(238, 238, 238);
                border: 1px solid rgb(218, 218, 218);
            }

            .left {
                display: flex;
                align-items: center;
                .img-wrapper {
                    width: 50px;
                    height: 50px;
                    margin-right: 1rem;
                    img {
                        width: 50px;
                        height: 50px;
                        object-fit: cover;
                        border-radius: 50%;
                        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    }
                }
                .text-wrapper {
                    display: flex;
                    flex-direction: column;
                    h1 {
                        font-size: 1.5rem;
                        font-weight: 600;
                    }
                    span {
                        font-size: 1rem;
                        font-weight: 400;
                    }
                }
            }
            .right {
                display: flex;
                flex-direction: column;
                align-items: center;
                .icon{
                    color: var(--primary-font-color);
                }
                span{
                    font-size: .8rem;
                    color: rgb(172, 172, 172);
                }
            }
        }
    }
}
</style>
