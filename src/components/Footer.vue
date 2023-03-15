<template>
    <div class="background" style="background-color: #F8F8F8;">
        <div class="container" style="padding: 64px 0 ;">
            <div class="row">
                <div class="col-4">
                    <ul>
                        <li>
                            <div class="address">
                                <p class="fw-bold">Addres</p>
                                <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
                                <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
                                <p>support@maxcoach.com</p>
                            </div>
                            <div class="icon d-flex">
                                <font-awesome-icon icon="fa-brands fa-square-facebook" />
                                <font-awesome-icon icon="fa-brands fa-square-twitter" />
                                <font-awesome-icon icon="fa-brands fa-square-instagram" />
                                <font-awesome-icon icon="fa-brands fa-linkedin" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-6 d-flex justify-content-end gap-5">
                    <div class="explore">
                        <p class="fw-bold">Explore</p>
                        <ul class="p-0" style=" column-count: 2;">
                            <li class="link" v-for="link in explore">
                                <a href="">
                                    {{ link }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="information">
                        <p class="fw-bold">Information</p>
                        <ul class="p-0">
                            <li class="link" v-for="info in information">
                                <a href="">
                                    {{ info }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center mb-0">© 2020 Maxcoach. All Rights Reserved </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            explore: ['Start here', 'Blog', 'About Us', 'Success story', 'Courses', 'Contact Us'],
            information: ['Membership', 'Purchase guide', 'Privacy policy', 'terms of service']
        }
    },
}
</script>

<style lang="scss" scoped>
.link {
    padding: 13px 0;
}

.icon {
    color: rgba(105, 105, 105, 0.5);
    font-size: 24px;
    gap: 32px;
}

.icon:hover,
.link:hover {
    color: var(--green);
}
</style>