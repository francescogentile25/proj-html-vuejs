<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2 class="title text-center">Why Pople Talk About <span style="color: var(--green);">MaxCoach</span></h2>
                <div class="testimonial d-flex">
                    <img class="rounded-circle card-img" src="../assets/img/testimonial-avata-02.jpg" alt="">
                    <div class="text">
                        <p class="main-text">
                            I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great
                            study portal
                            for
                            people like me.
                        </p>
                        <p class="text-uppercase">mina hollace</p>
                        <p class="position">/Freelancer</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div v-for="(image, i) in images" :key="i" class="logo">
                    <img :src="image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data() {
                return {
                    images: ['../assets/img/client-logo-colored-01.png', '../assets/img/client-logo-colored-02.png', '../assets/img/client-logo-colored-03.png', '../assets/img/client-logo-colored-04.png', '../assets/img/client-logo-colored-05.png', '../assets/img/client-logo-colored-06.png']
                }
            },
        }
    },
}
</script>

<style lang="scss" scoped>
.text {
    max-width: 662px;
}

.main-text {
    font-size: 34px;
    color: var(--black);

}

.card-img {
    max-width: 195px;
    margin: 0 100px
}

.position {
    color: var(--silver);
}
</style>