<template>
    <div class="background">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="text text-center">
                        <p class="subtitle">Wanna transform your life?</p>
                        <h2 class="title">Glad to <span style="color: var(--green);">Help You </span>Learn</h2>
                    </div>
                    <div class="card-container justify-content-between">
                        <div v-for="(card, i) in cards" :key="i" class="my-card">
                            <img :src="card.img" alt="">
                            <p class="card-title">{{ card.title }}</p>
                            <p class="card-text">{{ card.text }}</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <img src="../assets/img/home-6-services-image-1024x411.png" alt="" class="w-100 img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    img: '/src/assets/img/flag.svg',
                    title: 'Idea Discussion',
                    text: 'Get teamed up with the specialists who work and teach coding for years at famous universities.',
                },
                {
                    img: '/src/assets/img/gear.svg',
                    title: 'Web Development',
                    text: 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.',
                },
                {
                    img: '/src/assets/img/lifesaver.svg',
                    title: 'System Administration',
                    text: 'Learners are encouraged to study the mechanism and structure of system administration.',
                },
                {
                    img: '/src/assets/img/monitor.svg',
                    title: 'Graphic Design',
                    text: 'Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.',
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.my-card {
    max-width: 260px;
}

.card-container {
    display: flex;
    width: 100%;
}

.title {
    margin-bottom: 96px;
    font-weight: 700;
    font-size: 43px;
    color: var(--black);
}

.subtitle {
    margin-top: 100px;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    color: #696969;
}

.card-title {
    margin: 22px 0;
    font-size: 20px;
    font-weight: 700;

}

.card-text {
    font-size: 15px;
    color: #696969;
}

.img {
    position: relative;
    top: 36px;
}

.background {
    background-image: linear-gradient(180deg, #FFFFFF 0%, rgba(234, 237, 241, 0.8) 100%);
}
</style>