<template>
    <div class="table-container">
        <table>
            <tr>
                <th>Section</th>
                <th>Day</th>
                <th>Time</th>
                <th></th>
            </tr>
            <tr v-for="( item , index ) in schedule" :key="item">
                <td><input type="text" v-model="item.section" required /></td>
                <td>
                    <select name="day" id="day" v-model="item.day"  required>
                        <option>Mon</option>
                        <option>Tue</option>
                        <option>Wed</option>
                        <option>Thu</option>
                        <option>Fri</option>
                        <option>Sat</option>
                        <option>Sun</option>
                    </select>
                </td>
                <td><input type="text" v-model="item.time" required placeholder="09.00 - 12.00" /></td>
                <td><fa class="icon" :icon="['fas' , 'trash-alt']" @click="deleteInput(index)"></fa></td>
            </tr>
        </table>
        <div @click="addInput()" class="add-btn">
            <fa :icon="['fas' , 'plus-circle']"></fa>    
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import useAddPost from '../../composables/useAddPost'

export default {
    name: "AddTable",
    setup() {

        const { addSchedule } = useAddPost()

        const schedule = ref([
            {
                section: "",
                day: "",
                time: "",
            },
        ]);

        const addInput = () => {
            schedule.value.push({
                section: "",
                day: "",
                time: "",
            });
        };

        const submitSchedule = ()=> {
            addSchedule(schedule.value)
        }
        
        const deleteInput = (index)=>{
            schedule.value.splice(index , 1)
        }

        return { schedule, addInput , deleteInput , submitSchedule };
    },
};
</script>

<style lang="scss" scoped>
$font-size-n: 1rem;
$font-size-s: 0.75rem;

input , select {
    width: 100%;
    height: 100%;
    padding: 0.25rem.5rem;
    margin: 0;
    outline: none;
    border: none;
    font-family: var(--primary-font);
    border: 1px solid rgb(228, 228, 228);
    border-radius: 2px;
}
select {
    padding: .25rem .1rem;
}

.table-container {
    font-family: var(--primary-font);
    width: 90%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    table {
        width: 100%;
        border-collapse: collapse;
        td,
        th {
            font-size: $font-size-n;
            padding: 8px;
            font-weight: normal;
            text-align: center;
            @media (max-width: 1000px) {
                font-size: $font-size-s;
            }
        }
        th {
            font-weight: 500;
            
            &:nth-child(1){
                width: 15%;
            }
            &:nth-child(2){
                width: 25%;
            }
            &:nth-child(3){
                width: 60%;
            }
        }
        td{
            input{
                &::placeholder{
                    color: rgb(214, 214, 214);
                }
            }
        }
        tr {
            border: 1px solid #ddd;
            &:nth-child(1) {
                background-color: var(--secondary-color-dark);
                color: #fff;
            }
            &:nth-child(even) {
                background-color: #f4f7ff;
            }
        }

        @keyframes dance {
            0%{
                transform: rotate(-25deg);
            }
            50%{
                transform: rotate(25deg);
            }
            100%{
                transform: rotate(-25deg);
            }
        }

        .icon{
            color: var(--primary-font-color);
            cursor: pointer;
            color: rgb(211, 2, 2);
            &:hover{
                animation: .5s dance infinite;
            }
        }
    }
    .add-btn {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: .5rem;
        transition: .25s;
        &:hover{
            background-color: rgb(247, 247, 247);
            color: rgb(45, 230, 122);
        }
    }
}
</style>
