<script>
export default {
    data() {
        return {
            listNav: [
                'Courses', 'Course Formats', 'Add Course', 'Pages', 'Demos'
            ],
        }
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
                <li v-for="item in listNav">
                    <span v-if="item == 'Add Course'">NEW</span>
                    <a href="#" :class="item == 'Demos' ? 'active' : ''">{{ item }}</a>
                </li>

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
        padding: 30px 0;
    }

    ul {
        display: flex;
        gap: 1.5em;
        font-size: 1.1em;
        font-weight: bold;


        .active::after {
            content: '';
            display: block;
            width: 100%;
            height: 3px;
            background-color: #f2b91e;
            margin-top: .3em;
            border-radius: 6px;
        }

        li {
            position: relative;

            span {
                position: absolute;
                top: -20px;
                right: -10px;
                padding: .4em;
                font-size: .6em;
                background-color: red;
                color: white;
                border-radius: 8px 8px 8px 0;
            }

            .active::after {
                content: '';
                display: block;
                width: 100%;
                height: 3px;
                background-color: #f2b91e;
                margin-top: .3em;
                border-radius: 6px;
            }

        }


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