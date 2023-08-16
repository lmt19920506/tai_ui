<template>
  <div>
    <div>
        <select @change="setTargetIndex($event.target.value)">
            <option 
                v-for="(title, index) of options"
                :key="index"
                :value="index"
            >
            {{ title }}
        </option>
        </select>
    </div>
  </div>
</template>

<script setup>
import propsDefination from './extends/props'
import { usetTargetIndex } from './extends/hook'

const [targetIndex, setTargetIndex] = usetTargetIndex(0)
const props = defineProps(propsDefination)
const options = props.data.map(({ title }) => title)

// const setTargetIndex = index => {
//     console.log('change---', index)
// }

</script>

<style>

</style>