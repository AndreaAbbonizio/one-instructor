<script>
export default {
}
</script>

<template>
    <div class="bg-jumbotron">
        <div class="inner-jumbotron">
            <div class="text-jumbotron">
                <div class="text-left">
                    <i class="fa-solid fa-user-group"></i>
                </div>

                <div class="text-right">
                    <div class="number-jumbotron">
                        3195
                    </div>

                    <div>
                        Online Learner
                    </div>
                </div>
            </div>
            <div class="text-jumbotron">
                <div class="text-left">
                    <i class="fa-solid fa-film"></i>
                </div>

                <div class="text-right">
                    <div class="number-jumbotron">
                        23
                    </div>

                    <div>
                        Video Courses
                    </div>
                </div>
            </div>
            <div class="text-jumbotron">
                <div class="text-left">
                    <i class="fa-regular fa-image"></i>
                </div>

                <div class="text-right">
                    <div class="number-jumbotron">
                        437
                    </div>

                    <div>
                        Sliders & Images
                    </div>
                </div>
            </div>
            <div class="text-jumbotron">
                <div class="text-left">
                    <i class="fa-regular fa-thumbs-up"></i>
                </div>

                <div class="text-right">
                    <div class="number-jumbotron">
                        1440
                    </div>

                    <div>
                        Excellent Reviews
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.bg-jumbotron {
    background-image: url('/images/counter.jpg');
    background-position: top;
    background-size: cover;
    height: 400px;
    margin-bottom: 50px;

    .inner-jumbotron {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;

        max-width: 1100px;
        margin: 0 auto;
        height: 100%;


        .text-jumbotron {
            display: flex;
            align-items: center;
            color: white;
            gap: 1em;

            i {
                font-size: 2.5em;
            }


            .number-jumbotron {
                font-size: 2em;
                color: #fcb900;
                font-weight: bold;
            }
        }
    }
}
</style>