<template>
  <div class="relative inline-block">
    <h1
      class="font-bold mb-2 inline-block"
      :class="[textSizeClass, textAlignClass, 'text-primary-500']"
    >
      {{ title }}
    </h1>
    <span
      class="absolute left-0 bottom-0 bg-secondary-500 rounded"
      :style="{
        width: '100%',
        height: underlineHeight + 'px'
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  underlineHeight?: number
  textPosition?: 'left' | 'center' | 'right' | 'justify'
  textSize?: string // если хотите управлять размером текста через пропс
}>()

const underlineHeight = computed(() => props.underlineHeight ?? 4)
const textSizeClass = computed(() => props.textSize ?? 'text-4xl')
const textAlignClass = computed(() => {
  switch (props.textPosition) {
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    case 'justify':
      return 'text-justify'
    default:
      return 'text-left'
  }
})
</script>