<template>
    <div class="applicant-wrapper">
        <button id="close-btn" @click="$emit('closeApplicantPopup')">
            <span></span>
            <span></span>
        </button>
        <div class="head">
            <fa class="icon" :icon="['fas' , 'address-book']"></fa>
            <h1>List of applicants</h1>
        </div>
        <section>
            <span v-for="item in requestedStudent" :key="item"
                ><span style="font-weight: 700">{{ item.studentID }}</span>
                <span style="padding-left: 0"
                    >{{ item.firstName }} {{ item.lastName }}</span
                >
                <span style="font-weight: 700; padding-left: 0"
                    >has requested</span
                ></span
            >
        </section>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "ApplicantPopup",
    props: {
        request: {
            require: true,
            type: Array,
        },
    },
    emit:['closeApplicantPopup'],
    setup() {
        const requestedStudent = ref([
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
            {
                firstName: "Pitchapa",
                lastName: "Wiangthong",
                studentID: "63010679",
            },
        ]);
        return {
            requestedStudent,
        };
    },
};
</script>

<style lang="scss" scoped>
// define color
$main-color: #204e89;
$button-color: #fff;
$button-color-hover: rgb(214, 54, 33);


.applicant-wrapper {
    display: flex;
    flex-direction: column;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .head {
        background-color: $main-color;
        display: flex;
        align-items: center;
        .icon{
            font-size: 1.5rem;
            margin-left: 1rem;
            @media (max-width:600px) {
                font-size: 1.25rem;
            }
        }
        h1 {
            padding: 0.75rem 1rem;
            font-size: 1.25rem;
            font-weight: 700;
            @media (max-width:600px) {
                font-size: 1rem;
            }
        }
    }
    section {
        color: var(--primary-font-color);
        display: flex;
        flex-direction: column;
        background-color: #fff;
        overflow-y: auto;
        max-height: 60vh;

        span {
            padding: 1rem 1rem;
            white-space: nowrap;
            border-bottom: 1px dashed rgb(233, 233, 233);
            @media (max-width:600px) {
                font-size: .55rem;
            }
        }
    }
}

#close-btn {
    width: 25px;
    height: 25px;
    padding: 5px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 0;
    margin: .55rem;
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
