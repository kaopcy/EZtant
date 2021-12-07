<template>
    <div class="studentlist-wrapper">
        <UserTabWrapper>
            <StudentTab title="All" />
            <StudentTab :title="department[0]" />
            <StudentTab :title="department[1]" />
            <StudentTab :title="department[2]" />
            <StudentTab :title="department[3]" />
            <StudentTab :title="department[4]" />
            <StudentTab :title="department[5]" />
            <StudentTab :title="department[6]" />
        </UserTabWrapper>
    </div>
</template>

<script>
import UserTabWrapper from "../../components/UserList/UserTabWrapper.vue";
import StudentTab from "../../components/UserList/StudentTab";

import { computed } from "vue";
import { store } from "../../store";

export default {
    name: "StudentList",
    components: {
        StudentTab,
        UserTabWrapper,
    },
    setup() {
        const department = computed(() =>
            store.state.departmentTemplate.map((e) => e.name.split(" ")[0])
        );
        return { department };
    },
};
</script>

<style lang="scss" scoped></style>
