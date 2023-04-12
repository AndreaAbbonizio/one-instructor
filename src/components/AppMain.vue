<script>
import { store } from '../store';
import CardCourses from './CardCourses.vue';
import LinkBook from './LinkBook.vue';
import CardFaqVue from './CardFaq.vue';
import JumbotronMain from './JumbotronMain.vue';
import SliderStudents from './SliderStudents.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        CardCourses,
        LinkBook,
        CardFaqVue,
        JumbotronMain,
        SliderStudents
    }
}
</script>

<template>
    <main>
        <!-- container cards courses -->
        <div class="container-bg">
            <h2>New Courses</h2>
            <div class="container-cards">
                <CardCourses v-for="course in store.courses" :course="course"></CardCourses>
            </div>
            <button>Load More</button>
        </div>
        <!-- /container cards courses -->

        <!-- link buy book -->
        <LinkBook></LinkBook>
        <!--/ link buy book -->

        <!-- container faq -->
        <div class="container-faq">
            <h2>
                Why my Courses?
            </h2>

            <div class="inner-faq">
                <CardFaqVue></CardFaqVue>
            </div>
        </div>
        <!-- /container faq -->

        <!-- jumbotron main -->
        <JumbotronMain></JumbotronMain>
        <!-- /jumbotron main -->

        <!-- slider students -->
        <SliderStudents></SliderStudents>

        <!-- /slider students -->

    </main>
</template>

<style lang="scss" scoped>
.container-bg {
    background-color: #aaaaaa;
    text-align: center;

    h2 {
        padding-top: 30px;
        font-size: 1.9em;
        margin-bottom: 30px;
    }

    .container-cards {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        max-width: 1100px;
        margin: 0 auto;
        padding-bottom: 30px;


    }

    button {
        font-size: 1.2em;
        padding: 10px 20px;
        border-radius: 20px;
        border: none;
        color: #ffffff;
        background-color: #fcb900;
        margin-bottom: 40px;
    }
}

.container-faq {
    max-width: 1100px;
    margin: 0 auto;
    margin-bottom: 40px;


    h2 {
        text-align: center;
    }


    .inner-faq {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding-top: 40px;

    }
}
</style>

