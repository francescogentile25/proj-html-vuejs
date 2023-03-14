<template>
    <div>
        <Jumbo></Jumbo>
        <Counter></Counter>
        <CardService></CardService>
        <LatestCourses></LatestCourses>

    </div>
</template>

<script>
import Jumbo from './Jumbo.vue';
import Counter from './Counter.vue';
import CardService from './CardService.vue';
import LatestCourses from './LatestCourses.vue';
export default {
    components: {
        Jumbo,
        Counter,
        CardService,
        LatestCourses,

    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped></style>