<template>
    <div>
        <Jumbo></Jumbo>
        <div class="pattern container">
            <Counter></Counter>
            <CardService></CardService>
        </div>
        <LatestCourses></LatestCourses>
        <Partner></Partner>
        <Blog></Blog>
        <Learn></Learn>
        <GetStarted></GetStarted>

    </div>
</template>

<script>
import Jumbo from './Jumbo.vue';
import Counter from './Counter.vue';
import CardService from './CardService.vue';
import LatestCourses from './LatestCourses.vue';
import Partner from './Partner.vue';
import Blog from './Blog.vue';
import Learn from './Learn.vue';
import GetStarted from './GetStarted.vue';
export default {
    components: {
        Jumbo,
        Counter,
        CardService,
        LatestCourses,
        Partner,
        Blog,
        Learn,
        GetStarted
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
.pattern {
    background-image: url(../assets/img/background-pattern-grid-line.png);
}
</style>