<template>
    <div class="background" style="background-color: #F4F7FA;">
        <div class="container">
            <div class="text text-center">
                <p class="text-uppercase sub-title">Enjoy reading on maxcoach</p>
                <h1 class="title">Lastest on <span style="color:var(--green)">Our Blogs</span></h1>
            </div>
            <div class="blog-post d-flex gap-4">
                <div v-for="(card, i) in cards" :key="(i)" class="my-card">
                    <img :src="card.img" alt="" class="rounded-1">
                    <p class="job">{{ card.job }}</p>
                    <p class="text">{{ card.text }}</p>
                    <font-awesome-icon icon="fa-regular fa-calendar icon" /><span class="date">{{ card.date }}</span>
                    <font-awesome-icon icon="fa-regular fa-eye icon" /><span>{{ card.views }} views</span>
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
                    img: '/src/assets/img/artist-blog-01-480x325.jpg',
                    job: 'Artist',
                    text: 'Brush Srokes Energize Trees in Paintings',
                    date: 'May 15,2020',
                    views: '688',
                },
                {
                    img: '/src/assets/img/artist-blog-03-480x325.jpeg',
                    job: 'Artist',
                    text: 'Pocket-Sized Notebooks Hold Miniature Paintings',
                    date: 'May 15,2020',
                    views: '603',
                },
                {
                    img: '/src/assets/img/artist-blog-02-480x325.jpg',
                    job: 'Artist',
                    text: 'Connection Between Self-Portraits and Identify',
                    date: 'May 15,2020',
                    views: '397',
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 3rem;
}

.sub-title {
    font-size: 1rem;
}

.icon {
    margin-right: 9px;
}

.date {
    margin-right: 36px;
}
</style>

