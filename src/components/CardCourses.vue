<script>
export default {
    data() {
        return {
            isHovered: false,
        }
    },
    props: {
        course: Object,
    },

    methods: {
        changeHovered() {
            this.isHovered = true;
        },
        notHovered() {
            this.isHovered = false;
        },
    }

}
</script>

<template>
    <div class="card" @mouseover="changeHovered()" @mouseleave="notHovered()">
        <div :class="course.level == 'Advanced' ? 'special' : 'normal'">
            SPECIAL
        </div>
        <div class="card-image">
            <img :src=course.image alt="Image course">
            <div class="price" :class="isHovered == true ? 'active' : ''">
                {{ course.price }}
            </div>
        </div>

        <div class="text-card">
            <h3>{{ course.title }}</h3>
            <div class="type">
                {{ course.type }}
            </div>

            <hr>
            <div class="card-bottom">
                <div class="level">
                    <i class="fa-solid fa-signal"></i>
                    {{ course.level }}
                </div>

                <div class="lectures">
                    <i class="fa-solid fa-list-ul"></i>
                    {{ course.lectures }}
                </div>

                <div class="duration">
                    <i class="fa-regular fa-clock"></i>
                    {{ course.duration }}
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    position: relative;
    width: calc(100% / 3 - 20px / 3 * 2);
    background-color: #ffffff;

    .special {
        color: white;
        background-color: #fcb900;
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px 10px;
        border-radius: 6px;
    }

    .normal {
        display: none;
    }

    .card-image {
        height: 250px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .price {
            position: absolute;
            height: 250px;
            width: 100%;
            top: 0;
            display: none;
            justify-content: center;
            align-items: center;
            background-color: #00000094;
            color: white;
            font-size: 1.7em;
            font-weight: bold;
        }

        .active {
            display: flex;
        }
    }

    .text-card {
        padding: 20px;

        & * {
            margin-bottom: .5em;
        }
    }

    .card-bottom {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0;


        i {
            color: #fcb900;
        }
    }

}
</style>