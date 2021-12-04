<template>
    <div class="main-wrapper">
        <h1>Hello {{user}}</h1>
    </div>
</template>

<script>
import useAuth from '../../composables/useAuth'
export default {
    name: 'StudentProfile',
    setup(){
        const { user } = useAuth()

        return { user }
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