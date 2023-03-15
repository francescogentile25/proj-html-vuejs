<template>
    <div>
        <div class="container">
            <div class="row flex-column">
                <div class="col">
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