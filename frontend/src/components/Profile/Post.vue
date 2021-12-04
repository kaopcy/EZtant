<template>
<div class="post-wrapper" >
    <div class="post" v-if="!isLoading">
        <Postz v-for="post in allPost" :key="post" :post="post" />
    </div>
    <div class="loading" v-if="isLoading">
        <Loading :Attr="{ width: '100px' , height: '100px' }" />
    </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { inject, onMounted } from '@vue/runtime-core'

import usePost from '../../composables/usePost'
import Loading from '../../components/Loading/LoadingComponent.vue'
import Postz from '../../components/Post.vue'
export default {
    name: 'Post',
    components:{
        Loading,
        Postz,
    },
    setup() {
        const { isLoading , getPostByTeacherID } = usePost()
        const user = inject('user')
        const allPost = ref(null)

        onMounted(async ()=>{
            allPost.value = await getPostByTeacherID(user.value.firstName)
        })

        return { allPost , isLoading , user }
    },
}
</script>

<style lang="scss" scoped>
.post-wrapper{
    display: flex;
    align-items: center;
    .post{
        display: flex;
        flex-direction: column;
        span{
            margin: 1rem;
        }
    }
    .loading{

    }
}
</style>