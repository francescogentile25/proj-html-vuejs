<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-6 d-flex">
                    <div class="row">
                        <div class="col-6">
                            <div class="my-card">
                                <p class="title-card">Graphic Design</p>
                                <p class="text-card">Have a passion for graphics and arts? Show your talents with confidence
                                    and
                                    self-assertiveness.</p>
                                <img src="../assets/img/home-6-service-image-01.png" alt="">
                            </div>
                            <div class="my-card">
                                <img src="../assets/img/home-6-service-image-03.png" alt="">
                                <p class="title-card">Idea Discussion</p>
                                <p class="text-card">Get teamed up with the specialists who work and teach coding for years
                                    at famous universities.</p>
                            </div>
                        </div>
                        <div class="col-6 right-card">
                            <div class="my-card">
                                <p class="title-card">Business Administration</p>
                                <p class="text-card">Learners are encouraged to study the mechanism and structure of system
                                    administration.</p>
                                <img src="../assets/img/home-6-service-image-02.png" alt="">
                            </div>
                            <div class="my-card">
                                <img src="../assets/img/home-6-service-image-04.png" alt="">
                                <p class="title-card">Web Development</p>
                                <p class="text-card">Learn to start building a webpage from scratch. You decide your own
                                    pace, course and speed.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex flex-column justify-content-center">
                    <p class="text-uppercase subtitle">together we can create</p>
                    <h2 class="title">Service We <span style="color:var(--green)">Can Provide</span> For My Clients</h2>
                    <ul class="p-0">
                        <li v-for="(service, i) in services" :key="i" class="list">
                            <font-awesome-icon icon="fa-solid fa-check" />
                            {{ service }}
                        </li>
                    </ul>
                    <button class="btn btn-success button" style="max-width: 250px;"> Get started for free</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: ['Select & customize to your preferences', 'Change the tutor and make arrangements', 'Participate in evnets to join others', 'Get the desired certificate delivered at house']
        }
    },

}
</script>

<style lang="scss" scoped>
.my-card {
    margin: 30px 0;
    max-width: 274px;
    box-shadow: 0px 0px 40px 0px rgb(51 51 51 / 10%);
    border-radius: 5px;

    .title-card {
        padding-top: 28PX;
        font-size: 20px;
        font-weight: 700;
        color: var(--primary);
    }

    .text-card {
        font-size: 15px;
        line-height: 1.75;
        font-weight: 400;
        color: #696969;

    }
}

.title-card,
.text-card {
    padding: 0 30px;
}

.right-card {
    margin-top: 60px;
}




.title {
    font-size: 48px;
    font-weight: 700;
    color: var(--black);
    max-width: 370px;
}

.subtitle {
    font-weight: 500;
    font-size: 15px;
    color: #696969;
}

.button {
    padding: 14px 40px;
}

.list {
    margin: 20px 0;
}

.fa-check {
    color: var(--green);
    margin-right: 16px;
}</style>