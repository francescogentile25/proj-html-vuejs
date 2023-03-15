<template>
    <div>
        <div class="container position-relative">
            <div class="row flex-column">
                <div class="col">
                    <div id="cursor"
                        :style="{ top: cursorY + 450 + 'px', left: cursorX + 120 + 'px', backgroundColor: 'salmon' }"></div>
                    <div id="cursor"
                        :style="{ top: cursorY + 200 + 'px', left: cursorX + 1500 + 'px', backgroundColor: '#EDC072' }">
                    </div>
                    <div id="cursor"
                        :style="{ top: cursorY + 600 + 'px', left: cursorX + 1700 + 'px', backgroundColor: '#EDC072' }">
                    </div>
                    <div id="cursor"
                        :style="{ top: cursorY + 600 + 'px', left: cursorX + 1300 + 'px', backgroundColor: '#C381FD' }">
                    </div>
                    <div id="cursor"
                        :style="{ top: cursorY + 600 + 'px', left: cursorX + 'px', backgroundColor: '#B4C0F2' }"></div>
                    <div id="cursor"
                        :style="{ top: cursorY + 100 + 'px', left: cursorX + 200 + 'px', backgroundColor: 'salmon' }"></div>
                    <div class="text">
                        <p class="title">
                            Let passion and determination be the guide along the way and develop at your own pace that's
                            comfortable.
                        </p>
                        <p class="text-uppercase">fannie moreno</p>
                        <p class="position">/Founder & CEO</p>
                    </div>
                </div>
                <div class="col d-flex justify-content-between counter-container">
                    <div v-for="(counter, i) in counters" :key="i" class="counter">
                        <p class="number mb-0 text-center">{{ counter.number }}</p>
                        <p class="counter-description">{{ counter.description }}</p>
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
            cursorX: 0,
            cursorY: 0,
            counters: [
                {
                    number: '1.926',
                    description: 'finished sessions'
                },
                {
                    number: '3.092+',
                    description: 'enrolled learners'
                },
                {
                    number: '200',
                    description: 'online instructors'
                },
                {
                    number: '100%',
                    description: 'satisfaction rate'
                },
            ],

        }
    },
    mounted() {
        window.addEventListener('mousemove', this.mouseMove)
    },
    methods: {
        mouseMove(event) {
            this.cursorX = event.clientX / 50
            this.cursorY = event.clientY / 50
        }
    }
}
</script>

<style lang="scss" scoped>
.text {
    max-width: 723px;
    text-align: center;
    margin: 0 auto;

    .title {
        margin-top: 329px;
        font-size: 34px;
        color: var(--black);
        font-weight: 700;
    }

    .position {
        color: var(--silver);
    }
}

#cursor {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    transition: all;
}


.counter-container {
    margin: 154px 0;

    .counter {
        margin: 0 52px
    }
}

.number {
    font-weight: 800;
    color: var(--green);
    font-size: 48px;
}


.counter-description {
    color: var(--black);
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
}
</style>