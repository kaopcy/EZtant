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
        </table>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
    name: 'Table',
    props:{
        schedule:{
            type: Array,
            require: true,
        }
    },
    setup(props) {
        onMounted(()=>{
            console.log(props.schedule);
        })
    }
}
</script>

<style lang="scss" scoped>

.table-container{
    $font-size-n: 1rem;
    $font-size-s: 0.75rem;
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
        td{
            font-size: $font-size-s;
        }
        th{
            font-weight: 500;
        }
        tr{
            &:nth-child(1){
                background-color: var(--secondary-color-dark);
                color: #fff;
            }   
            &:nth-child(even) {
                background-color: #f4f7ff;
            }
        }
    }
}  
</style>