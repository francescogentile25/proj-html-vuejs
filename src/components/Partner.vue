<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2 class="title text-center">Why Pople Talk About <span style="color: var(--green);">MaxCoach</span></h2>
                <div class="testimonial d-flex align-items-center">
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
            <div class="col d-flex justify-content-around align-itemsn-center">
                <div v-for="(partner, i) in partners" :key="i" class="logo">
                    <img :src="partner" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            partners: [
                '/src/assets/img/client-logo-colored-01.png',
                '/src/assets/img/client-logo-colored-02.png',
                '/src/assets/img/client-logo-colored-03.png',
                '/src/assets/img/client-logo-colored-04.png',
                '/src/assets/img/client-logo-colored-05.png',
                '/src/assets/img/client-logo-colored-06.png'
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.title {
    margin-top: 90px;
    font-size: 48px;
    font-family: 700;
    color: var(--black);

}

.text {
    max-width: 662px;
    margin-top: 125px;
}

.main-text {
    font-size: 34px;
    font-weight: 500;
    color: var(--black);

}

.card-img {
    aspect-ratio: 1;
    height: 200px;
    width: 200px;
    object-fit: cover;
    margin: 0 100px
}

.position {
    color: var(--silver);
}

.logo {
    margin: 100px 0
}

.logo:hover {
    filter: grayscale(100%);

}
</style>