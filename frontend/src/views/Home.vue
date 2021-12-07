<template>
<div class="home">
    <h1>HOMEPAGE</h1>
</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name: 'Home',
    setup(){
        const user = reactive({
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            faculty: '',
        })

        return { user }
    }
}
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>


