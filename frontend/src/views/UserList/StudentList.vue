<template>
<div class="studentlist-wrapper">
    <UserTabWrapper>
        <StudentTab  title="All"/>
        <StudentTab  :title="options[0]"/>
        <StudentTab  :title="options[1]"/>
        <StudentTab  :title="options[2]"/>
        <StudentTab  :title="options[3]"/>
        <StudentTab  :title="options[4]"/>
        <StudentTab  :title="options[5]"/>
        <StudentTab  :title="options[6]"/>
    </UserTabWrapper>
</div>
</template>

<script>
import UserTabWrapper from '../../components/UserList/UserTabWrapper.vue'
import StudentTab from '../../components/UserList/StudentTab'
import { ref } from 'vue'
export default {
    name: "StudentList",
    components:{
        StudentTab,
        UserTabWrapper,
    },
    setup() {
        const options = ref([
            'Computer', 'Chemistry' , 'Bio' , 'Food' , 'Industial' , 'Music' , 'Telecom'
        ])
        return { options }
    }
};
</script>

<style lang="scss" scoped>
</style>
