<template>
    <div class="wrapper">
        <div class="info-wrapper">
            <div class="h1-wrapper">
                <span>Username</span>
                <span>First name</span>
                <span>Last name</span>
                <span>Email</span>
                <span>Faculty</span>
            </div>
            <div class="colon-wrapper">
                <span>:</span>
                <span>:</span>
                <span>:</span>
                <span>:</span>
                <span>:</span>
            </div>
            <div class="span-wrapper">
                <span>{{ user.firstName }} {{ user.lastName }}</span>
                <span>{{ user.firstName }}</span>
                <span>{{ user.lastName }}</span>
                <span>{{ user.email }}</span>
                <span>{{ user.department }} Engineering</span>
            </div>
        </div>

        <div class="btn-wrapper">
            <div class="btn">
                <span>Edit</span> 
                <fa class="icon" :icon="['fas', 'edit']" />
            </div>
            <div class="btn">
                <span>Change Password</span>
                <fa class="icon" :icon="['fas', 'key']" />
            </div>
            <div class="btn">
                <span>Save</span> 
                <fa class="icon" :icon="['fas', 'save']" />
            </div>
        </div>
    </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
    name: "Info",
    setup() {
        const user = inject("user");
        return { user };
    },
};
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (max-width:630px) {
        width: 100%;
    }
}
.info-wrapper {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    margin-bottom: 2rem;
    span {
        font-size: 1.25rem;
        font-weight: 800;
        margin: 0.5rem 0;
        @media (max-width: 600px) {
            font-size: 1rem;
        }
    }
    .h1-wrapper {
        display: flex;
        flex-direction: column;
    }
    .colon-wrapper {
        display: flex;
        flex-direction: column;
        margin: 0 0.45rem;
    }
    .span-wrapper {
        font-size: 1rem;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        span {
            font-weight: 500;
        }
    }
}
.btn-wrapper{
    display: flex;
    align-self: flex-end;
    .btn{
        display: flex;
        padding: .5rem 1rem;
        border: 1px solid rgb(214, 214, 214);
        border-radius: 5px;
        margin-right: 1rem;
        transition: .25s background-color , color;
        cursor: pointer;
        span{
            margin-right: .5rem;
        }
        &:hover{
            background-color: var(--primary-font-color);
            color: #fff;
        }
    }
}
</style>
