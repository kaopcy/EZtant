<template>
    <UserTabWrapper>
        <TeacherTab  title="All"/>
        <TeacherTab  :title="options[0]"/>
        <TeacherTab  :title="options[1]"/>
        <TeacherTab  :title="options[2]"/>
        <TeacherTab  :title="options[3]"/>
        <TeacherTab  :title="options[4]"/>
        <TeacherTab  :title="options[5]"/>
        <TeacherTab  :title="options[6]"/>
    </UserTabWrapper>
</template>

<script>
import { ref } from "vue";
import UserTabWrapper from '../../components/UserList/UserTabWrapper.vue'
import TeacherTab from '../../components/UserList/TeacherTab'


export default {
    name: "TeacherList",
    components: {
        UserTabWrapper,
        TeacherTab
    },
    setup() {
        const options = ref([
            'Computer', 'Chemistry' , 'Bio' , 'Food' , 'Industial' , 'Music' , 'Telecom'
        ])
        return { options }
    },
};
</script>

<style lang="scss" scoped>

</style>
