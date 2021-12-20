<template>
    <button
        id="close-btn"
        :style="`width:${attr.width ?? ''};height:${attr.width ?? ''};top:${attr.top ?? ''};right:${attr.right ?? ''}`"
    >
        <span :style="`height:${attr.height ?? ''};background-color:${attr.color ?? ''}`"></span>
        <span :style="`height:${attr.height ?? ''};background-color:${attr.color ?? ''}`"></span>
    </button>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
    props: {
        attr: {
            type: Object,
        },
    },
    setup(props) {
        onMounted(() => {
            console.log(props.attr.width);
        });
    },
};
</script>

<style lang="scss" scoped>
$button-color: #fff;
$button-color-hover: rgb(214, 54, 33);

#close-btn {
    width: 30px;
    height: 30px;
    padding: 5px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 0;
    margin: 1rem;
    z-index: 101;
    cursor: pointer;
    top: 0;

    span {
        transition: 0.25s;
        position: absolute;
        top: 50%;
        left: 0;
        height: 5px;
        width: 100%;
        background-color: $button-color;
        transform-origin: center;
        &:nth-child(1) {
            transform: rotate(45deg);
        }
        &:nth-child(2) {
            transform: rotate(-45deg);
        }
    }

    @media (max-width: 800px) {
        span {
            background-color: rgb(0, 0, 0);
        }
    }

    &:hover {
        span {
            background-color: $button-color-hover !important;
            &:nth-child(1) {
                transform: rotate(135deg);
            }
            &:nth-child(2) {
                transform: rotate(-135deg);
            }
        }
    }
}
</style>
