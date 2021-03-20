<template>
    <img
        :src="require(`~/assets/img/${item.src}`)"
        :alt="item.id"
        @click="$emit('openModal', item)"
        class="cursor-pointer flex self-center object-cover object-center mx-auto overscroll-auto rounded-md m-4 shadow-lg border bg-gray-100"
    />
</template>
<script>
export default {
    props: ['item'],
    emits: ['openModal'],
};
</script>