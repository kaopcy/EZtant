<template>
    <div class="main-post">
        <div class="selection-bar-wrapper">
            <div
                class="selection"
                v-for="department in departments"
                :key="department"
                @click="selectedValue = department"
                :class="{ select: selectedValue == department }"
            >
                {{ department }}
            </div>
        </div>
        <span class="line"></span>
        <div class="search-bar">
            <div class="wrapper" :class="isLast ? 'active' : 'inactive'">
                <h1
                    :class="isLast ? 'active' : 'inactive'"
                    @click="toggleIsLast()"
                >
                    Lastest
                </h1>
                <h1
                    :class="!isLast ? 'active' : 'inactive'"
                    @click="toggleIsLast()"
                >
                    Available
                </h1>
            </div>
            <div class="icon-wrapper">
                <fa class="icon" :icon="['fas', 'search']" />
                <fa class="icon" :icon="['fas', 'sort-alpha-down']" />
            </div>
        </div>

        <div class="post-wrapper" v-if="isLoading">
            <Loading :Attr="{ width: '80%', height: '70vh' }" />
        </div>
        <div class="post-wrapper" v-if="!isLoading">
            <transition-group appear @before-enter="beforeEnter" @enter="enter">
                <Post
                    v-for="post in getPostByDepartment"
                    :key="post"
                    :post="post"
                />
            </transition-group>
            <h1 v-if="getPostByDepartment.length == 0 || !getPostByDepartment.length">Empty</h1>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { store } from "../../store";
import gsap from "gsap";

import Post from "../../components/Post.vue";
import Loading from "../../components/Loading/LoadingComponent.vue";

import usePost from "../../composables/usePost";
import { useRoute } from 'vue-router';
export default {
    name: "MainPost",
    components: {
        Post,
        Loading,
    },
    setup() {
        const route = useRoute()

        // get department name
        const departments = store.getters.getDepartmentName;
        const selectedValue = ref(route.params.department);

        // animated is last variable
        const isLast = ref(true);
        const toggleIsLast = async () => {
            isLast.value = !isLast.value;
            if (isLast.value) {
                posts.value = await getLastestPost();
            } else {
                posts.value = await getAllPost();
            }
        };

        // post variable
        const { getAllPost, getLastestPost, isLoading } = usePost();
        const posts = ref(null);
        const getPostByDepartment = computed(() =>
            posts.value
                ? posts.value.filter(
                      (e) =>
                          e.department.toLowerCase() ===
                          selectedValue.value.toLowerCase()
                  )
                : []
        );

        onMounted(async () => {
            posts.value = await getAllPost();
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
            store,
            posts,
            isLoading,
            isLast,
            toggleIsLast,
            departments,
            selectedValue,
            getPostByDepartment,
            beforeEnter,
            enter,
        };
    },
};
</script>

<style lang="scss" scoped>
$searchbar-height: 100px;
$sort-type-color-active: #303030;
$sort-type-color-inactive: #a7a7a7;
$sort-type-height: 5px;

.main-post {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.line {
    width: 70%;
    height: 2px;
    background-color: rgb(233, 233, 233);
    border-radius: 2px;
    margin: 2rem 0;
}

.selection-bar-wrapper {
    margin-top: 1rem;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .selection {
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        margin: 0.25rem 0.5rem;
        outline: 1px solid rgb(236, 236, 236);
        transition: 0.25s background-color;
        &:hover {
            background-color: rgb(245, 245, 245);
            outline: 1px solid rgb(230, 230, 230);
        }

        &.select {
            background-color: #000;
            color: #fff;
        }
    }
}

.search-bar {
    width: 100%;
    height: $searchbar-height;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 800px) {
        margin: 0 auto;
        width: 70%;
        justify-content: space-between;
    }
    @media (max-width: 640px) {
        width: 90%;
    }

    .wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &.inactive {
            &::before {
                transform: translateX(100%);
            }
        }
        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: $sort-type-height;
            background-color: $sort-type-color-inactive;
            z-index: 0;
        }
        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50%;
            height: $sort-type-height;
            z-index: 1;
            background-color: $sort-type-color-active;
            transition: 0.5s;
        }

        h1 {
            cursor: pointer;
            font-family: var(--primary-font);
            margin: 1rem 1rem 1.5rem 1rem;
            position: relative;
            transition: 0.25s;
            @media (max-width: 800px) {
                font-size: 1.25rem;
            }

            &:nth-child(1) {
            }

            &.active {
                color: $sort-type-color-active;
            }
            &.inactive {
                color: $sort-type-color-inactive;
            }
        }
    }

    .icon-wrapper {
        position: absolute;
        bottom: 50%;
        right: 14%;
        transform: translateY(50%);
        @media (max-width: 800px) {
            position: relative;
            right: initial;
            bottom: initial;
            transform: none;
        }
        .icon {
            color: $sort-type-color-inactive;
            font-size: 2rem;
            margin-right: 1rem;
            cursor: pointer;
            &:hover {
                color: $sort-type-color-active;
            }
            @media (max-width: 800px) {
                font-size: 1.5rem;
            }
        }
    }
}

.post-wrapper {
    margin-top: 4rem;
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
