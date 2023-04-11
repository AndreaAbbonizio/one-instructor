<script>
export default {
    data() {

    },
}

</script>

<template>
    <!-- navbar -->
    <nav>
        <!-- container logo -->
        <div class="container-logo">
            <img src="/images/MasterStudy-1.svg" alt="Logo">
        </div>
        <!-- /container logo -->

        <!-- container-links -->
        <div class="container-links">
            <!-- list links -->
            <ul>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Course Formats</a></li>
                <li><a href="#">Add Course</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Demos</a></li>
                <li id="icons">
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                </li>
            </ul>
            <!-- /list links -->
        </div>
        <!-- /container-links -->

    </nav>
    <!--/ navbar -->
</template>

<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

    .container-logo {
        padding: 20px 0;
    }

    ul {
        display: flex;
        gap: 1.5em;
        font-size: 1.1em;
        font-weight: bold;


        #icons {
            display: flex;
            align-items: center;
            gap: 1em;


            .fa-brands {
                font-size: 1.3em;
            }
        }
    }
}
</style>