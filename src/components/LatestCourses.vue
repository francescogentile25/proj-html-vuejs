<template>
    <div class="background" style="background-color: #F4F7FA;">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <p class="subtitle">Choose a course to get started</p>
                    <h2 class="title">Latest Featured <span style="color:var(--green)">Courses</span></h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <ul class="card-container">
                        <li v-for="(card, i) in cards" :key="i" class="my-card">
                            <img :src="card.img" alt="" class="rounded-circle card-img">
                            <div class="info">
                                <p class="price">{{ card.price }}</p>
                                <p class="text"> {{ card.text }}</p>
                                <div class="icon">
                                    <font-awesome-icon icon="fa-regular fa-file" />
                                    <span>{{ card.lessons }} Lessons</span>
                                    <font-awesome-icon icon="fa-regular fa-user" />
                                    <span>{{ card.student }} Student</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="row justify-content-center">
                    <div class="btn btn-success button">
                        View all courses
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
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
                    img: '/src/assets/img/course-02-480x298.jpg',
                    price: '$40.00',
                    text: 'Learning to Write as a Professional Author',
                    lessons: '20',
                    student: '50'
                },
                {
                    img: '/src/assets/img/stock-full-hd-04-480x298.jpg',
                    price: '$19.00',
                    text: 'Open Origramming Courses for Everyone:Pyton',
                    lessons: '17',
                    student: '62'
                },
                {
                    img: '/src/assets/img/course-featured-image-01-480x298.jpg',
                    price: '$39.00',
                    text: 'Master jQuery in a Short Period of Time',
                    lessons: '61',
                    student: '51'
                },
                {
                    img: '/src/assets/img/stock-full-hd-03-480x298.jpg',
                    price: 'Free',
                    text: 'Customer-centric Info-Tech Strategies',
                    lessons: '24',
                    student: '769'
                },
                {
                    img: '/src/assets/img/stock-full-hd-06-480x298.jpg',
                    price: '$26.00',
                    text: 'Academic Listening taking',
                    lessons: '14',
                    student: '67'
                },
                {
                    img: '/src/assets/img/stock-full-hd-05-480x298.jpg',
                    price: '$59.00',
                    text: 'Introduction to Java Beginners',
                    lessons: '14',
                    student: '76'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 48px;
    color: var(--black);
    font-weight: 700;
}

.subtitle {
    margin-top: 50px;
    font-size: 15px;
    color: #696969;
    font-weight: 500;
    text-transform: uppercase;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;

    .my-card {
        display: flex;
        max-width: 523px;
        align-items: center;
        gap: 26px;
        padding: 20px;

        .card-img {
            max-width: 170px;
            aspect-ratio: 1;
        }
    }

}

.price {
    color: var(--green);
    font-size: 24px;
    font-weight: bold
}

.text {
    font-size: 20px;
    line-height: 1.6;
    font-weight: bold;
    color: #696969;
}

.icon {
    display: flex;
    gap: 10px;
    color: #8C89A2;
    font-size: 14px;

}

.button {
    max-width: 260px;
    padding: 14px 40px;
    margin-bottom: 100px;
    margin-top: 60px
}

.button:hover {
    background-color: var(--primary);
}

.my-card:hover {
    background-color: white;
}

.text:hover {
    color: var(--green);
}
</style>