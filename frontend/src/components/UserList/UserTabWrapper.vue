<template>
    <div class="main-wrapper">
        <div class="tab-wrapper">
            <div
                v-for="tab in tabTitles"
                :key="tab"
                @click="selectedTitle = tab"
                :class="{ select: selectedTitle == tab }"
                class="tab"
            >
                {{ tab }}
            </div>
        </div>
        <span class="line"></span>

        <slot />
    </div>
</template>

<script>
import { provide, ref } from "vue";
export default {
    name: "StudentTabWrapper",
    setup(_, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title));
        const selectedTitle = ref(tabTitles.value[0]);

        provide("selectedTitle", selectedTitle);

        return { tabTitles, selectedTitle };
    },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.line {
    width: 70%;
    height: 2px;
    background-color: rgb(233, 233, 233);
    border-radius: 2px;
    margin: 2rem 0;
}

.tab-wrapper {
    margin-top: 1rem;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .tab {
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        margin: .25rem .5rem;
        outline: 1px solid rgb(236, 236, 236) ;
        transition: .25s background-color;
        &:hover{
            background-color: rgb(245, 245, 245);
            outline: 1px solid rgb(230, 230, 230) ;
        }

        &.select {
            background-color: #000;
            color: #fff;
        }
    }
}
</style>
