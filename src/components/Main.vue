<template>
    <div>
        <Jumbo></Jumbo>
        <Counter></Counter>
    </div>
</template>

<script>
import Jumbo from './Jumbo.vue';
import Counter from './Counter.vue'
export default {
    components: {
        Jumbo,
        Counter

    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped></style>