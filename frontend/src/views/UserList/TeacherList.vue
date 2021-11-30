<template>
    <div class="main-wrapper">
        <span class="line"></span>

        <div class="search-bar-wrapper">
            <input type="text" class="search-bar" placeholder="Search" v-model="searchValue"/>
            <fa class="icon" :icon="['fas', 'search']" />
            <fa class="icon" :icon="['fas', 'sort-alpha-down']" />
        </div>
        <Loading v-if="isLoading" :Attr="{ width: '100%', height: '100%' }" />

        <div class="teacher-list-wrapper">
            <router-link
                class="teacher-card link"
                v-for="teacher in filteredTeacher"
                :key="teacher"
                :to="`/teacher-list/profile/${teacher.id}`"
            >
                <img :src="teacher.imageURL" alt="" />
                <h2>{{ teacher.first_name }} {{ teacher.last_name }}</h2>
                <h3>{{ teacher.department }} engineering</h3>
                <div class="email">{{ teacher.email }}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref , computed } from "vue";
import { onMounted } from "@vue/runtime-core";
import useUserData from "../../composables/useUserData";
import Loading from "../../components/Loading/LoadingComponent.vue";

export default {
    name: "TeacherList",
    components: {
        Loading,
    },
    setup() {
        const { getAllTeacher, isLoading } = useUserData();
        const allTeacher = ref(null);
        const searchValue = ref('')

        onMounted(async () => {
            allTeacher.value = await getAllTeacher();
        });

        // random star
        const getRandomStar = () => parseInt(Math.random() * 30);
        
        // filtered profile
        const filteredTeacher = computed(() => {
            if (!allTeacher.value) return "";
            const filtered = allTeacher.value.filter((teacher) =>
                `${teacher.first_name}${teacher.last_name}`
                    .toLowerCase()
                    .includes(searchValue.value.toLowerCase())
            );
            return filtered;
        });

        return {
            isLoading,
            allTeacher,
            getRandomStar,
            searchValue,
            filteredTeacher
        };
    },
};
</script>

<style lang="scss" scoped>
$search-width: 500px;
$min-wrapper-width: 580px;
$image-width: 150px;

.main-wrapper {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--primary-font-color);

    .line {
        width: 70%;
        height: 2px;
        background-color: rgb(233, 233, 233);
        border-radius: 2px;
        margin: 2rem 0;
    }

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

    .teacher-list-wrapper {
        min-width: $min-wrapper-width;
        max-width: 60%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 4rem;
        .teacher-card {
            display: flex;
            flex-direction: column;
            min-width: 270px;
            height: 400px;
            align-items: center;
            justify-content: center;
            margin: 1rem 0.5rem;
            padding: 2rem 1rem 1rem 1rem;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            border-radius: 4px;
            img {
                width: $image-width;
                height: $image-width;
                margin-bottom: 2rem;
                border-radius: 50%;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
            h2 {
                font-size: 1.2rem;
                font-weight: 800;
            }
            h3 {
                font-size: 0.9rem;
                font-weight: 500;
                margin-bottom: 1rem;
            }
            .email {
                font-size: 0.7rem;
                padding: 0.5rem 1rem;
                border-radius: 4px;
                background-color: rgba(0, 118, 255, 0.9);
                box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
                font-weight: 400;
                color: #fff;
                cursor: pointer;
                &:hover {
                }
            }
        }
    }
}
</style>
