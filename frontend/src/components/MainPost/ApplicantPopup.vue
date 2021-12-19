<template>
    <div class="applicant-wrapper">
        <button id="close-btn" @click="$emit('closeApplicantPopup')">
            <span></span>
            <span></span>
        </button>
        <div class="head">
            <fa class="icon" :icon="['fas', 'address-book']"></fa>
            <h1>List of applicants</h1>
        </div>

        <span class="line"></span>

        <section>
            <span v-if="request.length == 0 || !request">Empty</span>
            <span v-for="item in request" :key="item">
                <img :src="item.imageURL" alt="" />
                <div class="text">
                    <span style="padding-left: 0; font-weight: 800">
                        {{item.first_name}}  {{item.last_name}}
                    </span>
                    <span
                        style="padding-left: 0;
                    rgb(177, 177, 177);"
                        >has
                        <span
                            style="
                                padding-left: 6px;
                                font-weight: 700;
                                color: rgb(35, 174, 255);
                            "
                            >requested</span
                        ></span
                    >
                </div>
            </span>
        </section>
    </div>
</template>

<script>
export default {
    name: "ApplicantPopup",
    props: {
        request: {
            require: true,
            type: Array,
        },
    },
    emit: ["closeApplicantPopup"],
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
// define color
$main-color: #204e89;
$button-color: rgb(44, 44, 44);
$button-color-hover: rgb(214, 54, 33);

.applicant-wrapper {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    align-items: center;
    z-index: 100;
    .head {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0.5rem;
        background-color: #fff;
        color: var(--primary-font-color);
        .icon {
            font-size: 1.5rem;
            margin-left: 1rem;
            @media (max-width: 600px) {
                font-size: 1.25rem;
            }
        }
        h1 {
            padding: 0.75rem 1rem;
            font-size: 1.25rem;
            font-weight: 700;
            @media (max-width: 600px) {
                font-size: 1rem;
            }
        }
    }
    section {
        color: #3b3b3b;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        overflow-y: auto;
        max-height: 60vh;
        &::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }
        &::-webkit-scrollbar-track {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #686868;
            border-radius: 15px;
        }
        span {
            padding: 1rem 1rem;
            white-space: nowrap;
            border-bottom: 1px dashed rgb(233, 233, 233);
            display: flex;
            align-items: center;
            @media (max-width: 600px) {
                font-size: 0.55rem;
            }
            .text {
                display: flex;
                flex-direction: column;
                span {
                    padding: 0rem 1rem;
                    border: none;
                    margin: 0;
                }
            }
        }
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            margin-right: 0.5rem;
        }
    }
}

.line {
    width: 80%;
    height: 2px;
    background-color: rgb(233, 233, 233);
    border-radius: 2px;
}

#close-btn {
    width: 25px;
    height: 25px;
    padding: 5px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    margin: 0.55rem;
    z-index: 101;
    cursor: pointer;

    span {
        transition: 0.25s;
        position: absolute;
        top: 50%;
        left: 0;
        height: 4px;
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

    &:hover {
        span {
            background-color: $button-color-hover;
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
