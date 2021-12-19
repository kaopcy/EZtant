<template>
    <div class="post-wrapper">
        <Loading v-if="isLoading" />
        <div class="post-num" v-if="!isLoading && userPost">
            {{ userPost.length }} {{ userPost.length > 1 ? "Posts" : "Post" }}
        </div>
        <div class="post" v-if="!isLoading && userPost">
            <div class="post-wrapper" v-if="userPost.length > 0">
                <Postz v-for="post in userPost" :key="post" :post="post" :author="user"/>
            </div>
            <div v-else style="margin-bottom:2rem">EMPTY</div>
        </div>
    </div>
</template>

<script>
import { inject, onMounted } from "@vue/runtime-core";

import usePost from "../../composables/usePost";

import Loading from "../../components/Loading/LoadingComponent.vue";
import Postz from "../../components/Post.vue";
export default {
    name: "Post",
    components: {
        Loading,
        Postz,
    },
    props: ['userID'],
    setup(props) {
        const { userPost , isLoading, getPostByTeacherID } = usePost();
        const user = inject("user");

        onMounted(async () => {
            await getPostByTeacherID(props.userID);
            
        });

        onMounted(()=>{
            window.addEventListener('keydown',()=>{
                console.log(userPost);
            })
        })

        return { userPost , isLoading, user };
    },
};
</script>

<style lang="scss" scoped>
.post-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .post {
        display: flex;
        flex-direction: column;
        span {
            margin: 1rem;
        }
    }
}

.post-num {
    font-weight: 600;
    font-size: 1.25rem;
    margin: 1rem;
    border-bottom: 4px solid rgb(187, 187, 187);
    padding-bottom: 0.16rem;
}


</style>
