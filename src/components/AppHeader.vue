<script>
import Jumbotron from './Jumbotron.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        Jumbotron,
    },
}
</script>


<template>
    <header>
        <Jumbotron></Jumbotron>
        <div class="header-inner">
            <div class="text-left">
                <h2>
                    Hey there, my name is John Doe. I'm the founder of the Brain Academy.
                </h2>
                <div class="signature">
                    <img src="/images/sign.jpg" alt="signature">
                </div>
            </div>
            <div class="text-right">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto id quo, ipsum eaque eveniet
                    quisquam voluptatem, sunt modi mollitia vel impedit ipsa accusamus magnam, ab magni quos recusandae?
                    Optio, cumque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi totam quae quis nulla
                    quidem! Eius, repellat rem cumque id magni atque dolores assumenda beatae animi quasi nemo nisi nihil
                    iure.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis ipsa, dolor ullam officiis rem at voluptatibus, vitae totam aperiam
                    magni exercitationem harum?
                </p>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
header {
    margin-bottom: 30px;


    .header-inner {
        display: flex;
        gap: 20px;
        padding-top: 80px;
        max-width: 1100px;
        margin: 0 auto;


        .text-left {
            width: calc(100% / 2 - 20px / 2);

            h2 {
                width: 80%;
                margin-bottom: 1.5em;
                font-size: 1.7em;
            }

            .signature {
                position: relative;
                left: 20%;
            }
        }

        .text-right {
            width: calc(100% / 2 - 20px / 2);
        }
    }
}
</style>