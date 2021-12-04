<template>
    <div class="main-wrapper" v-if="selectedTitle == title">
        <div class="search-bar-wrapper">
            <input
                type="text"
                class="search-bar"
                placeholder="Search"
                v-model="searchValue"
            />
            <fa class="icon" :icon="['fas', 'search']" />
            <fa class="icon" :icon="['fas', 'sort-alpha-down']" />
        </div>
        
        <Loading v-if="isLoading" :Attr="{ width: '500px', height: '500px' }" />

        <div class="student-list-wrapper" v-if="!isLoading">
            <transition-group appear @before-enter="beforeEnter" @enter="enter">
                <router-link
                    class="student-list link"
                    v-for="(student, index) in filteredStudent"
                    :key="student"
                    :to="`/student-list/profile/${student.id}`"
                    :data-index="index"
                >
                    <div class="left">
                        <div class="img-wrapper">
                            <img :src="student.imageURL" alt="" />
                        </div>
                        <div class="text-wrapper">
                            <h1>
                                {{ student.first_name }}
                                {{ student.last_name }}
                            </h1>
                            <span
                                >{{ student.student_id }}
                                {{ student.student_year }}D</span
                            >
                        </div>
                    </div>
                    <div class="right">
                        <fa class="icon" :icon="['fas', 'star']"></fa>
                        <span>{{ getRandomStar() }}</span>
                    </div>
                </router-link>
            </transition-group>
        </div>
    </div>
</template>

<script>
import useUserData from "../../composables/useUserData";
import { ref } from "vue";
import { computed, inject } from "@vue/runtime-core";
import gsap from "gsap";
import Loading from "../../components/Loading/LoadingComponent.vue";

export default {
    name: "StudentTabWrapper",
    props: {
        title: {
            require: true,
            type: String,
        },
    },
    components: {
        Loading,
    },
    setup(props) {
        const { getAllStudent, isLoading, allStudent } = useUserData();
        const searchValue = ref("");
        const selectedTitle = inject("selectedTitle");

        // onmounted hook
        getAllStudent();

        // random star
        const getRandomStar = () => parseInt(Math.random() * 30);

        // filtered profile
        const filteredStudent = computed(() => {
            if (!allStudent.value) return "";
            const filterByDepartment = allStudent.value.filter(
                (student) =>
                    student.department.toLowerCase() ===
                    props.title.toLowerCase() || props.title.toLowerCase() === 'all'

            );
            const filtered = filterByDepartment.filter((student) =>
                `${student.first_name}${student.last_name}`
                    .toLowerCase()
                    .includes(searchValue.value.toLowerCase())
            );
            return filtered;
        });
        // animation
        const beforeEnter = (el) => {
            el.style.opacity = 0;
            el.style.transform = "translateX(100px)";
        };
        const enter = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                onComplete: done,
                delay: el.dataset.index * 0.1,
            });
        };

        return {
            isLoading,
            allStudent,
            getRandomStar,
            searchValue,
            filteredStudent,
            beforeEnter,
            enter,
            selectedTitle,
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
    overflow-x: hidden;
    

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
        margin-bottom: 4rem;

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
            transition: 0.25s background-color;
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
                        font-size: 1.25rem;
                        font-weight: 600;
                    }
                    span {
                        font-size: 1rem;
                        font-weight: 400;
                        color: rgb(134, 134, 134);
                    }
                }
            }
            .right {
                display: flex;
                flex-direction: column;
                align-items: center;
                .icon {
                    color: var(--primary-font-color);
                }
                span {
                    font-size: 0.8rem;
                    color: rgb(172, 172, 172);
                }
            }
        }
    }
}
</style>
