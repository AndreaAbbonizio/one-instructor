<script>
export default {

}
</script>


<template>
    <div class="bg-image">
        <div class="link-book">

            <div class="container-left">
                <h2>Get My Exclusive Investing Book just fot $19.50</h2>
                <p><em>
                        Vetsibulum imentum eu urna vel curcus. Aenean vehicula quam quam, vitae pellentesque urna elementum
                        curcus.
                    </em></p>
                <div class="amazon-image">
                    <a href="#">
                        <img src="/images/amazon.png" alt="Amazon Link">
                    </a>
                </div>
            </div>

            <div class="container-right">
                <img src="/images/book.png" alt="Book">
            </div>
        </div>
        <div class="icon-fixed">
            <i class="fa-solid fa-desktop"></i>
            <i class="fa-regular fa-circle-up"></i>
            <i class="fa-solid fa-wrench"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-mobile-screen"></i>
        </div>
    </div>
</template>


<style lang="scss">
.bg-image {
    background-image: url('/images/slider-1.jpg');
    position: relative;

    .link-book {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1100px;
        margin: 0 auto;
        padding-top: 30px;
        margin-bottom: 50px;

        h2 {
            color: #fcb900;
            margin-bottom: .8em;
        }


        p {
            color: #ffffff;
        }


        .amazon-image {
            position: relative;
            left: 50%;
            top: 40px;
            transform: translateX(-50%);
            width: 150px;


            img {
                width: 100%;
            }
        }


        .container-right {
            height: 300px;

            img {
                height: 100%;
            }
        }
    }

    .icon-fixed {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .7em;
        color: #333333;

        position: absolute;
        top: 15px;
        right: 0;
        padding: 15px 10px;
        background-color: white;
        font-size: 1.2em;
    }
}
</style>

