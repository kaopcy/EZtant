<template>
    <div class="main-wrapper">
        <h1>Hello {{getFullName}}</h1>
    </div>
</template>

<script>
import useAuth from '../../composables/useAuth'
export default {
    name: 'TeacherProfile',
    setup(){
        const { getFullName } = useAuth()

        return { getFullName }
    } 
}
</script>

<style lang="scss" scoped>
.main-wrapper{
    font-family: var(--primary-font);
    color: var(--primary-font-color);
    width: 100%;
    min-height: 100vh;
}
</style>