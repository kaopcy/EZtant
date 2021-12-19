<template>
    <div class="focus-post-wrapper">
        <Loading :Attr="{ width: '70%', height: '40vh' }" v-if="isLoading" />

        <div class="topic-wrapper" v-if="!isLoading && post">
            <h1 class="topic">Post.</h1>
            <span
                >hire teacher assistant for
                {{ post.department }} engineering.</span
            >
        </div>

        <div class="post" v-if="!isLoading && post">
            <!-- header field -->
            <div class="head">
                <div class="author-info-wrapper">
                    <img :src="post.author.imageURL" alt="" />
                    <div class="author-info">
                        <h1>
                            {{ post.author.first_name }}
                            {{ post.author.last_name }}
                        </h1>
                        <span>{{ post.timestamp.slice(0 , post.timestamp.length -3) }} </span>
                    </div>
                </div>
                <div class="interact-info-wrapper">
                    <div class="wrapper">
                        <fa class="icon" :icon="['fas', 'heart']" />
                        <span>15</span>
                    </div>
                    <div class="wrapper" @click="isPopup = true">
                        <fa class="icon" :icon="['fas', 'user-friends']" />
                        <span>{{post.requested.length}}</span>
                    </div>
                    <transition name="fade">
                        <ApplicantPopup
                            id="applicant-popup"
                            v-if="isPopup"
                            @closeApplicantPopup="closeApplicantPopup"
                            :request="post.requested"
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
                            {{ post.subject_name }}
                        </p>
                        <p>
                            <span style="font-weight: 700; line-height: 1.5rem"
                                >Subject ID:</span
                            >
                            {{ post.subject_id || "01067007" }}
                        </p>
                        <p>
                            <span style="font-weight: 700; line-height: 1.5rem"
                                >Number/Group:</span
                            >
                            {{ post.max_requested || 1 }}
                        </p>
                        <p>
                            <span style="font-weight: 700; line-height: 1.5rem"
                                >Payment:</span
                            >
                            {{ post.wage || 600 }} ฿
                        </p>
                    </div>
                    <!-- right table -->
                    <div class="table">
                        <Table :schedule="post.schedules" />
                    </div>
                </div>
                <!-- bottom detail -->
                <div class="detail">
                    <h1>Detail</h1>
                    <div class="text">
                        <p>
                            {{ post.description }}
                        </p>
                    </div>
                    <div class="btn-wrapper">
                        <div
                            class="btn"
                            @click="deletePostByID(route.params.id)"
                            v-if="isEditAble"
                        >
                            <fa class="icon" :icon="['fas', 'trash-alt']" />
                            <span>Delete</span>
                        </div>
                        <div
                            class="btn"
                            v-if="isEditAble"
                        >
                            <fa class="icon" :icon="['fas', 'edit']" />
                            <span>Edit</span>
                        </div>
                        <div
                            class="btn request"
                            :class="{requested:isRequested}"
                            @click="handleRequest(route.params.id)"
                            v-if="user.role === 'student'"
                        >
                            <fa class="icon" :icon="['fas', 'sign-out-alt']" />
                            <span>{{ isRequested ? 'you have Requested':'Request' }}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import usePost from "../../composables/usePost";
import useAuth from "../../composables/useAuth";

import Loading from "../../components/Loading/LoadingComponent.vue";
import Table from "../../components/Table.vue";
import ApplicantPopup from "../../components/MainPost/ApplicantPopup.vue";

export default {
    name: "FocusPost",
    components: {
        Table,
        ApplicantPopup,
        Loading,
    },
    setup() {
        const { isLoading, getPostByPostID, deletePostByID , request } = usePost();
        const { user } = useAuth();
        const route = useRoute();
        const isPopup = ref(false);
        const post = ref(null);

        const isEditAble = computed(
            () => user.value.id == post.value.author.id
        );

        const isRequested = computed(()=> post.value.requested.some((e)=> user.value.id == e.id ) )

        // onmounted method
        onMounted(async () => {
            post.value = await getPostByPostID(route.params.id);
        });

        // handle user to request post
        const handleRequest = async (id)=>{
            await request(id)
            post.value = await getPostByPostID(route.params.id);
        }

        const closeApplicantPopup = () => {
            isPopup.value = false;
            console.log("close");
        };

        return {
            deletePostByID,
            post,
            user,
            route,
            isLoading,
            isPopup,
            closeApplicantPopup,
            isEditAble,
            handleRequest,
            isRequested
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

.topic-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem;
    margin-top: 2rem;
    h1 {
        color: var(--primary-font-color);
    }
    span {
        color: rgb(126, 126, 126);
    }
}

.focus-post-wrapper {
    font-family: var(--primary-font);
    margin: 1rem 0;
    width: 100%;
    height: 100vh;
    background-color: $background-color;
    display: flex;
    flex-direction: column;
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
        background-color: var(--secondary-color-normal);
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
                position: relative;
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
                    word-break: break-word;
                    padding: 1rem 1rem;
                    border: 1px dashed rgb(236, 236, 236);
                }
            }
            .btn-wrapper {
                align-self: flex-end;
                margin-bottom: 0rem;
                margin-right: 2rem;
                display: flex;
                gap: 0.5rem;
            }
            .btn {
                padding: 0.65rem 2rem;
                border-radius: 8px;
                cursor: pointer;
                transition: 0.25s;
                border: 1px solid rgb(179, 179, 179);

                .icon{
                    transition: .25s;
                }

                &:nth-child(1) {
                    border: 1px solid rgb(255, 20, 20);
                    color: rgb(255, 20, 20);
                    .icon {
                        color: rgb(255, 20, 20);
                    }
                    &:hover {
                        color: #fff;
                        background-color: rgb(255, 20, 20);
                        .icon {
                            color: #fff;
                        }
                    }
                }
                &:nth-child(2) {
                    border: 1px solid var(--primary-font-color);
                    color: var(--primary-font-color);

                    .icon {
                        color: var(--primary-font-color)
                    }
                    &:hover {
                        color: #fff;
                        background-color: var(--primary-font-color);
                        .icon {
                            color: #fff;
                        }
                    }
                    .icon {
                    }
                }
                &.request {
                    border: 1px solid var(--secondary-color-dark);
                    color: var(--secondary-color-dark);
                    .icon {
                        color: var(--secondary-color-dark);
                    }
                    &:hover {
                        color: #fff;
                        background-color: var(--secondary-color-dark);
                        .icon {
                            color: #fff;
                        }
                    }
                    &.requested {
                        background-color: var(--secondary-color-dark);
                        color: #fff;
                        .icon {
                            color: #fff;
                        }
                    }
                }
                span {
                    margin: 0.5rem;
                    font-weight: 500;
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
