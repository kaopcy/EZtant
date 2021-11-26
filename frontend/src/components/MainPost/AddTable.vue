<template>
    <div class="table-container">
        <table>
            <tr>
                <th>Section</th>
                <th>Day</th>
                <th>Time</th>
            </tr>
            <tr v-for="item in schedule" :key="item">
                <td>{{item.section}}</td>
                <td>{{item.day}}</td>
                <td>{{item.time}}</td>
            </tr>
            <tr>+</tr>
        </table>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "AddTable",
    setup() {
        const schedule = ref([
            {
                section: "101",
                day: "TUE",
                time: "09.00 - 12.00 AM.",
            }
        ]);

        return { schedule }
    },
};
</script>


<style lang="scss" scoped>
$font-size-n: 1rem;
$font-size-s: 0.75rem;

.table-container{

    font-family: var(--primary-font);
    width: 90%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    table{
        width: 100%;
        border-collapse: collapse;

        td , th{
            font-size: $font-size-n;
            padding: 8px;
            font-weight: normal;
            text-align: center;
            @media (max-width: 1000px) {
                font-size: $font-size-s;
            }
        }
        th{
            font-weight: 700;
        }
        tr{
            border: 1px solid #ddd;

            &:nth-child(1){
                background-color: var(--secondary-color-dark);
                color: #fff;
                
            }   
            &:nth-child(even){
                background-color: #f2f2f2;
            }
        }
    }
}  
</style>