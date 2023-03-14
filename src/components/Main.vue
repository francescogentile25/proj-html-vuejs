<template>
    <div>
        <Jumbo></Jumbo>
        <Counter></Counter>
        <CardService></CardService>
        <LatestCourses></LatestCourses>
        <Partner></Partner>

    </div>
</template>

<script>
import Jumbo from './Jumbo.vue';
import Counter from './Counter.vue';
import CardService from './CardService.vue';
import LatestCourses from './LatestCourses.vue';
import Partner from './Partner.vue';
export default {
    components: {
        Jumbo,
        Counter,
        CardService,
        LatestCourses,
        Partner,
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped></style>