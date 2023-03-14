<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text text-center">
                    <h3 class="title">Wanna transform your life?</h3>
                    <h2>Glad to <span style="color: var(--green);">Help You</span></h2>
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
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    img: '../assets/img/flag.svg',
                    title: 'Idea Discussion',
                    text: 'Get teamed up with the specialists who work and teach coding for years at famous universities.',
                },
                {
                    img: '../assets/img/gear.svg',
                    title: 'Web Development',
                    text: 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.',
                },
                {
                    img: '../assets/img/lifesaver.svg',
                    title: 'System Administration',
                    text: 'Learners are encouraged to study the mechanism and structure of system administration.',
                },
                {
                    img: '../assets/img/monitor.svg',
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
    font-size: 43px;
    color: var(--black);
}

.card-title {
    font-size: 20px;

}

.card-text {
    font-size: 15px;
}

.img {
    position: relative;
    top: 36px;
}
</style>