<script>
import BlogFooter from './BlogFooter.vue';
export default {
    data() {
        return {
            pages: [
                'Blog', 'Courses', 'Home', 'Membership A...', 'Shortcodes', 'Typography'
            ],

            blogs: [
                {
                    image: '/images/blog-1.jpeg',
                    title: 'Our main target is to "Developing Yourself as a Leader"',
                    date: '- August 9,2018'
                },
                {
                    image: '/images/blog-2.jpeg',
                    title: "Those Other College Expenses You Aren't Thinking About",
                    date: '- June 3,2015'
                }
            ],

        }
    },
    components: {
        BlogFooter,
    }
}
</script>



<template>
    <footer>
        <div class="container-footer">
            <!-- container about -->
            <div class="inner-footer">
                <h3>ABOUT</h3>

                <p class="text-about">
                    Masterstudy is Education WordPress theme featured by Learninng Management System (LMS)
                    for online education. <br>
                    Developed by StylemixThemes.
                </p>

                <div class="about-icon">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <!-- /container about -->

            <!-- container contact -->
            <div class="inner-footer">
                <h3>CONTACT</h3>

                <div class="adress">
                    USA,California 20, First Avenue, California
                </div>

                <div class="phone-number">
                    Tel.: +1 212 458 300 32 <br>
                    Fax: +1 212 375 24 14
                </div>

                <div class="email">
                    info@masterstudy.com
                </div>

            </div>

            <!-- list pages -->
            <div class="inner-footer">
                <h3>PAGES</h3>
                <ul class="list-pages">
                    <li v-for="page in pages"><a href="#">{{ page }}</a></li>
                </ul>
            </div>
            <!-- list pages -->

            <!-- container blog -->
            <div class="inner-footer">
                <h3>BLOG</h3>
                <BlogFooter v-for="blog in blogs" :blog="blog"></BlogFooter>
            </div>

            <!-- /container blog -->


        </div>
    </footer>
</template>


<style lang="scss" scoped>
footer {
    background-color: #fcb900;

    .container-footer {
        display: flex;
        gap: 20px;
        max-width: 1100px;
        margin: 0 auto;
        padding: 20px 0;


        h3 {
            margin-bottom: 1em;
        }

        .inner-footer {
            width: calc(100% / 4 - 20px / 3 * 4);

            .text-about {
                margin-bottom: .5em;
            }

            .about-icon {
                display: flex;
                gap: .5em;
                font-size: 1.3em;
            }

            .adress {
                margin-bottom: 1em;
            }

            .phone-number {
                margin-bottom: 1em;
            }

            .list-pages {
                display: flex;
                gap: 15px;
                flex-wrap: wrap;
                list-style-type: disc;

                li {
                    width: calc(100% / 2 - 15px / 2);
                }
            }
        }



    }
}
</style>