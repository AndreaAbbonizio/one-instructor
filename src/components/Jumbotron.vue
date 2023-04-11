<script>
export default {
    data() {
        return {

        }
    },

}
</script>


<template>
    <div class="jumbotron">
        <img src="/images/slide-1.jpg" alt="Jumbotron">
        <div class="container-text">
            <h1>Start your Human <span>Revolution</span> today</h1>
            <p>
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring wich I
                enjoy heart.
            </p>
        </div>
        <div class="container-sale">
            <div class="sale-left">
                <h2>
                    <span id="limited-sale">
                        Limited Sale
                    </span>
                    : All courses with 55% off
                </h2>
                <div class="container-input">
                    <input type="text" placeholder="Enter your Email">
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div class="sale-right">
                <div class="time">
                    <div class="number">
                        26
                    </div>
                    <div class="text-number">
                        Days
                    </div>
                </div>

                <div class="time">
                    <div class="number">
                        01
                    </div>
                    <div class="text-number">
                        Hours
                    </div>
                </div>

                <div class="time">
                    <div class="number">
                        47
                    </div>
                    <div class="text-number">
                        Minutes
                    </div>
                </div>

                <div class="time">
                    <div class="number">
                        34
                    </div>
                    <div class="text-number">
                        Seconds
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.jumbotron {
    position: relative;
    height: 600px;


    img {
        position: absolute;
        width: 100%;
        object-fit: fill;
        height: 100%;
    }

    .container-text {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        position: relative;
        height: 100%;
        max-width: 1100px;
        margin: 0 auto;

        h1 {
            max-width: 400px;
            padding: 20px 0;

            span {
                color: #fcb900;
            }
        }

        p {
            max-width: 400px;

        }
    }

    .container-sale {
        display: flex;
        gap: 30px;
        position: absolute;
        bottom: -30px;
        left: 50%;
        background-color: #f2b91e;
        border-radius: 10px;
        padding: 20px;
        transform: translateX(-50%);

        h2 {
            width: max-content;
        }

        #limited-sale {
            color: #ffffff;
        }

        .container-input {
            position: relative;
            padding: 10px 0;


            input {
                width: 80%;
                height: 40px;
                border-radius: 20px;
                text-indent: 20px;
                border: none;
            }

            button {
                height: 40px;
                padding: 0 10px;
                position: absolute;
                right: 20px;
                border-radius: 20px;
                color: #ffffff;
                background-color: #2d4649;
                border: none;

            }
        }


        .sale-right {
            display: flex;
            gap: 1em;

            .number {
                font-size: 2.3em;
                font-weight: bold;
                color: white;
            }

            .text-number {
                font-weight: bold;
            }
        }






    }

}
</style>