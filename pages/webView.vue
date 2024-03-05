<template>
    <web-view :src="props.src"></web-view>
</template>

<script setup>
    const props = defineProps({
        src: String
    })
</script>