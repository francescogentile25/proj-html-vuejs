<template>
    <nav>
        <div class="container">
            <div class="row">
                <div class="col d-flex align-items-center">
                    <div>
                        <img src="../assets/img/light-logo.png" alt=" MaxCoach-logo" class="logo">
                    </div>
                </div>
                <div class="col  d-flex align-items-center">
                    <div class="nav-link">
                        <ul class="d-flex mb-0">
                            <li v-for="link in links"
                                class="d-flex li-item justify-content-center align-items-center position-relative">
                                {{ link }}
                                <span class="line"></span>
                                <span class="chevron">
                                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex">
                        <a class="position-relative text-white">
                            <font-awesome-icon icon=" fa-solid fa-cart-shopping" />
                            <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-dark">
                                0
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </a>
                        <a>
                            <font-awesome-icon icon="fa-solid fa-circle-user" />
                        </a>
                    </div>
                    <div class="d-flex">
                        <input class="search" type="text" placeholder="Search">
                        <button class="search-button text-success bg-white">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
        }
    },
}
</script>

<style lang="scss" scoped>
@use'../style/general.scss';

nav {
    color: white;
    background-color: var(--primary)
}

.li-item {
    margin: 0 18px;
    font-size: 16px;
    font-weight: 500;

}

.logo {
    padding: 28px 0;
    max-width: 160px;
}

.line {
    background-color: white;
    height: 2px;
    width: 100%;
    position: absolute;
    margin-top: 10px;
    top: 50%;
    left: 0%;
    display: none;
    animation: active 300ms linear;
}

@keyframes active {
    from {
        width: 0%;
    }

    to {
        width: 100%;
    }
}

.li-item:hover .line {
    display: block;
}

.chevron {
    margin: 0 3px;
    font-size: 8px;
}

.fa-circle-user {
    margin: 0 20px;
}

.search {
    max-width: 140px;
    padding: 14px 20px;
    border: 0;
    border-radius: 5px 0 0 5px;
}

.search-button {
    border: 0;
    border-radius: 0 5px 5px 0;

}
</style>