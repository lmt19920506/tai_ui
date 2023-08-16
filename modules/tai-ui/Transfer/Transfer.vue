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
    <div class="transfer">
      <div class="box left-list">{{ leftTitle }}</div>
      <div class="box button-group"></div>
      <div class="box right-list"></div>
    </div>
  </div>
</template>

<script setup>
import propsDefination from './extends/props'
import { useTargetIndex, useComputedData } from './extends/hook'

const [targetIndex, setTargetIndex] = useTargetIndex(0)
const { leftTitle } = useComputedData(props.data, targetIndex)

const props = defineProps(propsDefination)
console.log('right title---', props.rightTitle, props)
const options = props.data.map(({ title }) => title)

// const setTargetIndex = index => {
//     console.log('change---', index)
// }

</script>

<style>

</style>