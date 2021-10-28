<template>
    <div class="home">
        
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
    .wrapper{

    }
}
</style>


