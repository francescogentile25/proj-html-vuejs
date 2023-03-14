<template>
    <div>
        <Jumbo></Jumbo>
        <Counter></Counter>
        <CardService></CardService>
    </div>
</template>

<script>
import Jumbo from './Jumbo.vue';
import Counter from './Counter.vue';
import CardService from './CardService.vue';
export default {
    components: {
        Jumbo,
        Counter,
        CardService,

    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped></style>