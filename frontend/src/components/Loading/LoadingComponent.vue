<template>
    <div class="loading-wrapper">
        <div class="holder">
            <div class="preloader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <span>Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoadingComponent",
    props: {
        Attr: {
            type: Object,
        },
    },
    setup() {},
};
</script>

<style lang="scss" scoped>
$count: 10;
$time: 2; //in seconds
$size: 100;
$color: #303030;

.loading-wrapper {
    background-color: transparent;
    height: $size+px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}


.holder {
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: transparent;

}

span{
    position: absolute;
    left: 50%;
    top: 130%;
    color: rgb(141, 141, 141);
    transform: translateX(-50%) translateY(-50%);
    font-weight: 400;
}

.preloader {
    /* size */
    width: $size + px;
    height: $size + px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: rotatePreloader $time + s infinite ease-in;
}
@keyframes rotatePreloader {
    0% {
        transform: translateX(-50%) translateY(-50%) rotateZ(0deg);
    }
    100% {
        transform: translateX(-50%) translateY(-50%) rotateZ(-360deg);
    }
}
.preloader div {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
}
.preloader div:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0%;
    width: 10%;
    height: 10%;
    background-color: $color;
    transform: translateX(-50%);
    border-radius: 50%;
}

@for $i from 1 through $count {
    .preloader div:nth-child(#{$i}) {
        transform: rotateZ(((360 / $count) * ($i - 1)) + deg);
        animation: rotateCircle + $i $time + s infinite linear;
        z-index: $count - $i;
    }
    @keyframes rotateCircle#{$i} {
        #{percentage(((50 / $count) * ($i - 1)) / 100)} {
            opacity: 0;
        }
        #{percentage((((50 / $count) + 0.0001) * ($i - 1)) / 100)} {
            opacity: 1;
            transform: rotateZ((0 - ((360 / $count) * ($i - 2))) + deg);
        }
        #{percentage((((50 / $count) * ($i - 0)) + 2) / 100)} {
            transform: rotateZ((0 - ((360 / $count) * ($i - 1))) + deg);
        }
        #{percentage(((50 + ((50 / $count) * ($i - 0))) + 2) / 100)} {
            transform: rotateZ((0 - ((360 / $count) * ($i - 1))) + deg);
        }
        100% {
            transform: rotateZ((0 - ((360 / $count) * ($count - 1))) + deg);
            opacity: 1;
        }
    }
}
</style>
