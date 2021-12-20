<template>
    <transition name="fade">
        <div class="sort-popup-wrapper" v-if="isOpen">
            <h2>Configure Sorting</h2>
            <CloseButton
                :attr="{
                    height: '3px',
                    width: '20px',
                    color: 'red',
                    top: '7px',
                }"
                @click="toggle()"
            />
            <section>
                <div class="left">
                    <label>Sort By</label>
                </div>
                <div class="right">
                    <select name="cards" v-model="orderBy">
                        <option
                            v-for="option in options"
                            :key="option"
                            :value="option"
                        >
                            {{ option }}
                        </option>
                    </select>
                    <div class="radio">
                        <input
                            type="radio"
                            id="ascending"
                            v-model="sortBy"
                            value="asc"
                            checked
                        />
                        <label for="ascending">Ascending</label>
                    </div>
                    <div class="radio">
                        <input
                            type="radio"
                            id="descending"
                            v-model="sortBy"
                            value="desc"
                        />
                        <label for="descending">Descending</label>
                    </div>
                    <div class="btn-group">
                        <div @click="emit('getNewData')">OK</div>
                        <div @click="toggle()">Cancel</div>
                    </div>
                </div>
            </section>
        </div>
    </transition>
</template>

<script>
import { computed, inject, ref } from "vue";
import CloseButton from "../../components/Accessory/CloseButton.vue";

export default {
    name: "SortPopup",
    props: {
        type: {
            require: true,
            type: String,
        },
    },
    components: {
        CloseButton,
    },
    setup(props, { emit }) {
        const isOpen = ref(false);
        const toggle = () => {
            isOpen.value = !isOpen.value;
        };

        const sortBy = inject("sortBy");
        const orderBy = inject("orderBy");

        const options = computed( () => {
            if (props.type === "student")
                return [
                    "timestamp",
                    "email",
                    "first_name",
                    "department",
                    "student_id",
                    "student_year",
                ];
            else if (props.type === "teacher")
                return [
                    "timestamp",
                    "email",
                    "first_name",
                    "department",
                ];
            else if (props.type === "post")
                return [
                    "timestamp",
                    "subject_name",
                    "subject_id",
                    "max_requested",
                    "wage",
                    "requested",
                    "author.email",
                    "author.first_name",
                ];
            return null 
        });

        return { toggle, isOpen, sortBy, orderBy, options, emit };
    },
};
</script>

<style lang="scss" scoped>
.sort-popup-wrapper {
    position: absolute;
    top: 50px;
    right: 0;
    padding: 1rem 0.5rem;
    border: 1px solid rgb(231, 231, 231);
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 2000;
    white-space: nowrap;
    font-size: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    h2 {
        padding: 0.2rem 0.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        margin-right: 3rem;
    }
    section {
        display: flex;
    }
}
.left {
    display: flex;
    flex-direction: column;
    label {
        padding: 0.2rem 0.5rem;
        color: rgb(82, 82, 82);
        margin-right: 2rem;
        font-weight: 500;
    }
}
.right {
    flex-direction: column;
    select {
        font-size: 1rem;
        border: none;
        padding: 0.2rem 0.5rem;
        outline: 1px solid rgb(201, 201, 201);
        border-radius: 2px;
        margin-bottom: 0.5rem;
        font-weight: 300;
        option {
            font-weight: 300;
            border: none;
            outline: none;
            padding: 0.2rem;
        }
    }

    .radio {
        display: flex;
        align-items: center;
        margin-bottom: 0.2rem;
        label {
            cursor: pointer;
            font-size: 0.8rem;
        }
        input {
            cursor: pointer;
            margin-right: 0.5rem;
        }
    }

    .btn-group {
        display: flex;
        margin-top: 0.8rem;
        div {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;
            width: 4rem;
            padding: 0.3rem 0;
            border-radius: 3px;
            border: 1px solid rgb(214, 214, 214);
            margin: 0.25rem;
            &:nth-child(1) {
                border: 1px solid rgb(0, 78, 223);
            }
            &:nth-child(2) {
                &:hover {
                    border: 1px solid rgb(255, 58, 58);
                }
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.25s ease-in-out, z-index 0s linear 0.01s;
    transform-origin: top;
}

.fade-enter-from,
.fade-leave-to {
    transform: translateY(-2em);
    z-index: -1;
    opacity: 0;
}
</style>
