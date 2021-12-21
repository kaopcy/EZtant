<template>
    <div class="main" v-if="toggle">
        
        <div class="password-wrapper">
            <CloseButton
                :attr="{ height: '3px', width: '20px', color: 'red' }"
                @click="toggleClose()"
            />  
            <h1>Change Password</h1>
            <div class="text-group">
                <label for="password">Password</label>
                <input id="password" type="password" v-model="password" >
            </div>
            <div class="text-group">
                <label for="new-password">NewPassword</label>
                <input id="new-password" type="password" v-model="newPassword"  >
            </div>
            <div class="btn">Save</div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import CloseButton from '../../components/Accessory/CloseButton.vue'
import useAuth from '../../composables/useAuth'

export default {
    components:{
        CloseButton,
    },
    setup() {
        const { changePassword } = useAuth()
        const password = ref(null)
        const newPassword = ref(null)
        const toggle = ref(false)
        const toggleClose = ()=>{
            toggle.value = !toggle.value
        }
        return { password , newPassword , toggleClose , toggle , changePassword }
    }
}
</script>

<style lang="scss" scoped>
.main{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.39);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.password-wrapper{
    position: relative;
    padding: 2rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    h1{ 
        margin-bottom: 2rem;
    }
    .text-group{
        margin-bottom: 1rem;
        label{
            margin-right: .5rem;
        }
        input{
            border: none;
            outline: 1px solid #c9c9c9;
            border-radius: 3px;
            padding: .2rem .3rem;
        }
    }
    .btn{
        padding: .5rem 1rem;
        align-self: flex-end;
        border-radius: 5px;
        background-color: rgb(36, 175, 255);
        color: #fff;
    }
}
</style>