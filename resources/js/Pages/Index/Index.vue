<template>
        <h3>Main Page:</h3>
        <p>The message is {{ message }} </p>
</template>

<script setup>
defineProps({
    message: String
})
</script>
