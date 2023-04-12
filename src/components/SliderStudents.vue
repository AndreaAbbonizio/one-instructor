<script>
export default {
    data() {
        return {
            students: [
                {
                    image: '/images/students-1.jpg',
                    title: 'Paint of the Future',
                    vote: 5,
                },
                {
                    image: '/images/students-2.jpg',
                    title: 'Change your Life',
                    vote: 5,
                },
                {
                    image: '/images/students-3.jpg',
                    title: 'Paint of the Future',
                    vote: 3,
                },
            ],
            index: 0,

        }
    },
    methods: {
        nextSlide() {
            if (this.index == this.students.length - 1) {
                this.index = 0;
            } else {
                this.index++;
            }

        },

        prevSlide() {
            if (this.index == 0) {
                this.index = this.students.length - 1;
            } else {
                this.index--;
            }
        }
    },
}
</script>


<template>
    <h2>What Students Say</h2>
    <div class="container-students">
        <div class="container-slider">
            <div class="slide">
                <div class="arrow-left" @click="prevSlide()">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>

                <div class="images-slide">
                    <div class="image-left">
                        <img :src=students[index].image alt="">
                    </div>
                    <div class="image-selected">
                        <img :src=students[index].image alt="">
                    </div>
                    <div class="image-right">
                        <img :src=students[2].image alt="">
                    </div>
                </div>

                <div class="arrow-right" @click="nextSlide()">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div class="text-review">
                <strong>{{ students[index].title }}</strong>
            </div>
            <div class="vote-review">
                <i v-for="star in students[index].vote" class="fa-solid fa-star"></i>
            </div>
        </div>
        <div class="text-review">
            The response to your MasterStudy has been really overwhelming! Those who participated
            in the workshop are spreading the world hene on campus and the "buzz" is on.
            The VP of Instruction wants you to come back! Her goal is to have more faculty trained.
            She also wants to attend a workshop herself. Our President told me Masterstudy needs
            to be the cornerstone of our succes program."
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    text-align: center;
    margin-bottom: 1.2em;
}

.container-students {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    .slide {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 500px;
        margin: 0 auto;
        margin-bottom: 1.3em;

        .images-slide {
            display: flex;
            gap: 15px;

            img {
                border-radius: 50%;
            }
        }

    }

    .vote-review {
        color: #fcb900;
    }


}
</style>