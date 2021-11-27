<template>
<div class="applicant-wrapper">
    <div class="head">
        <h1>List of applicants</h1>
    </div>
    <section>
        <span v-for="item in requestedStudent" :key="item">{{item.studentID}}{{item.name}} has requested</span>
    </section>
</div>
</template>

<script>
export default {
    name: 'ApplicantPopup',
    props:{
        request:{
            require: true,
            type: Array,
        }
    },
    setup(){
        const requestedStudent = ref([
            {
                name: 'Pitchapa',
                studentID: '63010679',
            },
            {
                name: 'Pitchapa',
                studentID: '63010679',
            },
            {
                name: 'Pitchapa',
                studentID: '63010679',
            },
            {
                name: 'Pitchapa',
                studentID: '63010679',
            },
        ])
        return{
            requestedStudent
        }
    }
}
</script>

<style lang="scss" scoped>
.applicant-wrapper{

}
</style>