<template>
  <div>
    <h1 class="relative inline-block pb-1">
      Something 
      <span
        class="block bg-red-500 absolute bottom-0"
        :class="positionClass"
        :style="{
          width: underlineWidth + '%',
          height: underlineHeight + 'px'
        }"
      ></span>
    </h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  underlineWidth: number
  underlineHeight: number
  underlinePosition: 'left' | 'center' | 'right'
}>()

const positionClass = computed(() => {
  if (props.underlinePosition === 'left') return 'left-0'
  if (props.underlinePosition === 'right') return 'right-0'
  if (props.underlinePosition === 'center') return 'left-1/2 -translate-x-1/2'
  return 'left-0'
})
</script>