<template>
    <div class="post-wrapper">
        <Loading v-if="isLoading" />
        <div
            class="post-num"
            v-if="(!isLoading && userPost) && (!isLoading && postData)"
        >
            {{ userPost.length || postData.length }} {{ user.role === 'teacher' ? 'Created' : 'Requested' }}  {{ userPost.length > 1  || postData.length > 1 ? "Posts" : "Post" }}
        </div>
        <div
            class="post"
            v-if="(!isLoading && userPost) || (!isLoading && postData)"
        >
            <div
                class="post-wrapper"
                v-if="postLength"
            >
                <Postz
                    v-for="post in postData ? postData : userPost"
                    :key="post"
                    :post="post"
                    :author="typeof post.author == 'number' ? user : post.author"
                />
            </div>
            <div v-else style="margin-bottom: 2rem">EMPTY</div>
            <router-link class="create link" to="/create" v-if="userID === currentUser.id && currentUser.role === 'teacher'">
                <fa :icon="['fas' , 'plus-circle']" class="icon"></fa>
            </router-link>
        </div>
    </div>
</template>

<script>
import { computed, inject, onMounted } from "@vue/runtime-core";

import usePost from "../../composables/usePost";

import Loading from "../../components/Loading/LoadingComponent.vue";
import Postz from "../../components/Post.vue";
import useAuth from '../../composables/useAuth';
export default {
    name: "Post",
    components: {
        Loading,
        Postz,
    },
    props: ["userID", "postData" , "postLoading"],
    setup(props) {
        const { userPost, isLoading:anotherPostLoading , getPostByTeacherID } = usePost();
        const user = inject("user");
        const { user: currentUser } = useAuth()
        onMounted(async () => {
            await getPostByTeacherID(props.userID);

            // window.addEventListener('keyup' , ()=>{
            //     console.log();
            // })

        });
        
        const postLength = computed(()=>{
            if (props.postData) return props.postData.length > 0
            else if (userPost.value ) return userPost.value.length > 0
        })

        const isLoading = computed(()=> anotherPostLoading.value || props.postLoading )

        return { currentUser, userPost, isLoading, user , postLength };
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

.create{
    width: 100%;
    height: 70px;
    background-color: rgb(255, 255, 255);
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .25s;
    outline: 1px solid rgb(228, 228, 228);
    .icon{
        font-size: 2rem;
        color: rgb(172, 172, 172);
    }
    &:hover{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;   
    }
    &:active{
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
}
</style>
