import { ref , computed } from 'vue'

const role = ref('teacher')
const firstName = ref('Piyachai')
const lastName = ref('Kaewchum')

export default function(){

    const getFullName = computed(()=> `${firstName.value} ${lastName.value}`)
    return { role , getFullName }
}