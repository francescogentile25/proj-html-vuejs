<template>
    <div class="container-fluid jumbo">
        <div class="title-container text-white text-center">
            <h2 class="title">Learn At Your Own Pace!</h2>
            <p class="subtitle">Get teamed up with people of the same will.</p>
            <button class="btn btn-success button"> Get started for free</button>
        </div>
        <div class="img-jumbo d-flex">
            <img class="img-left" src="../assets/img/home-6-hero-left-person-244x300.png" alt="">
            <div class="video">
                <a href="https://maxcoach.thememove.com/main/remote-training/#lg=1&slide=0">
                    <img class="youtube-logo" src="../assets/img/icon-youtube-play.png" alt="">
                </a>
                <img class="video-thumb" src="../assets/img/home-6-hero-poster-final.jpg" alt="">
            </div>
            <img class="img-right" src="../assets/img/home-6-hero-right-person-195x300.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
.title-container {
    padding: 100px 0 80px;

    .title {
        font-size: 48px;
        font-weight: 700;
    }

    .subtitle {
        font-size: 18px;
        font-weight: 500;
    }

    .button {
        padding: 14px 40px;
    }

    .button:hover {
        background-color: white;
        color: var(--green);
    }
}


.jumbo {
    background-image: url(../assets/img/background-hero.svg);
    background-color: var(--primary);
}

.img-left {
    position: relative;
    left: 30px;
}

.video {
    position: relative;
    z-index: 2;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 45px 0px rgba(0, 0, 0, 0.15);
}



.youtube-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.img-jumbo {
    justify-content: center;
    position: relative;
    top: 60px;
}

.img-right {
    position: relative;
    top: 150px;
}
</style>