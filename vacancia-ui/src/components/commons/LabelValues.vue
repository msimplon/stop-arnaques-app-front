<script>
export default {
    props: {
        items: {
            type: Array,
            default: []
        }
    }
}
</script>
<template>
    <option v-for="item in items" :value="item.id">
        {{ item.title }}
    </option>
</template>
