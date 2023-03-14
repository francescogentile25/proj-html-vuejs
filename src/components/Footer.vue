<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <ul>
                    <li>
                        <div class="address">
                            <p>Addres</p>
                            <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
                            <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
                            <p>support@maxcoach.com</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-6 d-flex">
                <div class="explore">
                    <ul v-for="link in explore">
                        <li class="li-title fw-bold">{{ link }}</li>
                    </ul>
                </div>
                <div class="information">
                    <ul v-for="info in information">
                        <li class="fw-bold">{{ info }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            explore: ['Explore', 'Start here', 'Blog', 'About Us', 'Success story', 'Courses', 'Contact Us'],
            information: ['Information', 'Membership', 'Purchase guide', 'Privacy policy', 'terms of service']
        }
    },
}
</script>

<style lang="scss" scoped></style>