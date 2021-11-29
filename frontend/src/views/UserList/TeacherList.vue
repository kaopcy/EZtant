<template>
<div class="teacher-wrapper">
    <h1>Hello from teacher</h1>
    <Loading v-if="isLoading" />
    <span v-if="!isLoading">
        {{allTeacher}}
    </span>
</div>
</template>

<script>
import { ref } from 'vue'
import { onMounted } from '@vue/runtime-core'
import useUserData from '../../composables/useUserData'
import Loading from '../../components/Loading/LoadingComponent.vue'

export default {
    name: 'TeacherList',
    components:{
        Loading,
    },
    setup() {   
        const { getAllTeacher , isLoading } = useUserData()
        const allTeacher = ref(null)
        onMounted(async ()=>{
            allTeacher.value = await getAllTeacher()
        })
        return {
            isLoading,
            allTeacher
        }
    }
}
</script>

<style>

</style>