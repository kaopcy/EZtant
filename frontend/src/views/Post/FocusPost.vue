<template>
    <div class="focus-post-wrapper">
        <div class="post">
            <!-- header field -->
            <div class="head">
                <div class="author-info-wrapper">
                    <img src="" alt="" />
                    <div class="author-info">
                        <h1>{{ post.author }}</h1>
                        <span>{{ post.timeStamp }} </span>
                    </div>
                </div>
                <div class="interact-info-wrapper">
                    <div class="wrapper">
                        <fa class="icon" :icon="['fas', 'heart']" />
                        <span>15</span>
                    </div>
                    <div class="wrapper" @click="isPopup = true">
                        <fa class="icon" :icon="['fas', 'user-friends']" />
                        <span>25</span>
                    </div>
                    <transition name="fade">
                        <ApplicantPopup
                            id="applicant-popup"
                            v-if="isPopup"
                            @closeApplicantPopup="closeApplicantPopup"
                        />
                    </transition>
                </div>
            </div>
            <!-- information field -->
            <section>
                <!-- top info -->
                <div class="subject">
                    <!-- left text -->
                    <div class="text">
                        <p>
                            <span style="font-weight: 700; line-height: 1.5rem"
                                >Subject:</span
                            >
                            {{ post.subject }}
                        </p>
                        <p>
                            <span style="font-weight: 700; line-height: 1.5rem"
                                >Subject ID:</span
                            >
                            {{ post.subjectID || "01067007" }}
                        </p>
                        <p>
                            <span style="font-weight: 700; line-height: 1.5rem"
                                >Number/Group:</span
                            >
                            {{ post.number || 1 }}
                        </p>
                        <p>
                            <span style="font-weight: 700; line-height: 1.5rem"
                                >Payment:</span
                            >
                            {{ post.payment || 600 }} $
                        </p>
                    </div>
                    <!-- right table -->
                    <div class="table">
                        <Table :schedule="post.schedule" />
                    </div>
                </div>
                <!-- bottom detail -->
                <div class="detail">
                    <h1>Detail</h1>
                    <div class="text">
                        <p>
                            {{ post.detail }}
                        </p>
                    </div>
                    <div class="request-btn" @click="handleRequest">
                        <fa class="icon" :icon="['fas', 'sign-out-alt']" />
                        <span>Request</span>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import Table from "../../components/Table.vue";
import ApplicantPopup from "../../components/MainPost/ApplicantPopup.vue";

export default {
    name: "FocusPost",
    components: {
        Table,
        ApplicantPopup,
    },
    setup() {
        const post = ref({
            subject: "Data Communication",
            timeStamp: "15 minute ago",
            author: "Jirasak",
            requested: [
                {
                    name: "",
                },
            ],
            schedule: [
                {
                    section: "101",
                    day: "TUE",
                    time: "09.00 - 12.00 AM.",
                },
                {
                    section: "102",
                    day: "WED",
                    time: "01.00 - 04.00 PM.",
                },
                {
                    section: "103",
                    day: "FRI",
                    time: "04.30 - 07.30 PM.",
                },
            ],
            detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officia doloribus nihil animi reiciendis assumenda cupiditate nostrum commodi facilis optio.",
        });
        const isPopup = ref(false);
        const interactRef = ref(null);

        const handleRequest = () => {
            console.log("requested");
        };

        const closeApplicantPopup = () => {
            isPopup.value = false;
            console.log("colse");
        };

        return {
            post,
            handleRequest,
            isPopup,
            interactRef,
            closeApplicantPopup,
        };
    },
};
</script>

<style lang="scss" scoped>
$background-color: #fff;
$primary-font-color: #303030;
$primary-font-color-light: #464646;

#applicant-popup {
    position: absolute;
    right: 0;
    top: 70px;
}

.focus-post-wrapper {
    font-family: var(--primary-font);
    width: 100%;
    height: 100vh;
    background-color: $background-color;
    display: flex;
    justify-content: center;
    align-items: center;
}

.post {
    width: 60%;
    min-height: 550px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        width: 70%;
    }
    @media (max-width: 825px) {
        width: 80%;
    }
    @media (max-width: 600px) {
        width: 94%;
    }
    .head {
        height: 5rem;
        width: 100%;
        background-color: var(--secondary-color-light);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .author-info-wrapper {
            display: flex;
            margin-left: 2rem;
            align-items: center;
            img {
                border-radius: 50%;
                height: 50px;
                width: 50px;
                margin-right: 1rem;
            }
            .author-info {
                display: flex;
                flex-direction: column;
                h1 {
                    font-size: 1.5rem;
                    color: $primary-font-color;
                }
                span {
                    color: $primary-font-color-light;
                    font-weight: 500;
                }
            }
        }

        .interact-info-wrapper {
            display: flex;
            color: #fff;
            margin-right: 2rem;
            position: relative;
            .icon {
                font-size: 1.3rem;
            }
            span {
                font-size: 1rem;
                color: $primary-font-color-light;
                font-weight: 500;
            }
            .wrapper {
                align-items: center;
                display: flex;
                flex-direction: column;
                margin: 0 1rem;
                cursor: pointer;
                &:hover {
                    color: rgb(70, 70, 70);
                    span {
                        color: rgb(70, 70, 70);
                    }
                }
            }
        }
    }
    section {
        flex: 8;
        width: 100%;
        display: flex;
        flex-direction: column;
        .subject {
            display: flex;
            padding: 2rem 0;
            @media (max-width: 800px) {
                flex-direction: column;
                .text {
                    margin-bottom: 2rem;
                }
            }
            .text {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 2rem;
                color: $primary-font-color-light;
            }
            .table {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .detail {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h1 {
                padding: 0.5rem 1rem;
                border-bottom: 5px solid rgb(211, 211, 211);
                margin-left: 2rem;
            }
            .text {
                padding: 0.5rem 3rem;
                margin-bottom: 2rem;
                p {
                    padding: 1rem 1rem;
                    border: 1px dashed rgb(236, 236, 236);
                }
            }
            .request-btn {
                padding: 0.65rem 2rem;
                border-radius: 8px;
                color: #fff;
                background-color: var(--secondary-color-dark);
                align-self: flex-end;
                margin-bottom: 2rem;
                margin-right: 2rem;
                cursor: pointer;
                transition: 0.25s;
                span {
                    margin: 0.5rem;
                    font-weight: 500;
                }
                .icon {
                    transform: rotate(-90deg);
                }
                &:hover {
                    background-color: var(--secondary-color-normal);
                }
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
