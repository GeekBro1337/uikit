<template>
  <div>
    <UButton 
    :label ="props.label"
    :color ="props.color"
    :variant ="props.variant"
    :size ="props.size" />
  </div>
</template>

<script lang="ts" setup>

interface Props {
                color?: General.color
                variant?: General.variant
                size?: General.size
                label: string
            }

const props = withDefaults(defineProps<Props>(), {
  label: 'label'
})

</script>
