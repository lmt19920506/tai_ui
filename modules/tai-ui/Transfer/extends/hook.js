import { ref } from 'vue'

export function usetTargetIndex(initialIndex) {
    const targetIndex = ref(initialIndex)
    function setTargetIndex(newIndex) {
        targetIndex.value = Number(newIndex)
    }
    return [
        targetIndex,
        setTargetIndex
    ]
}

export function useComputedData(data, targetIndex) {
    const leftTitle = computed(() => data[targetIndex.value].title)

    return {
        leftTitle
    }
}