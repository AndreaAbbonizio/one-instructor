<script>
export default {
    props: {
        blog: Object,
    }
}
</script>


<template>
    <div class="blog">
        <div class="left-blog">
            <img :src=blog.image alt="">
        </div>
        <div class="right-blog">
            <div class="title">
                <strong>
                    {{ blog.title }}
                </strong>
            </div>

            <small>{{ blog.date }}</small>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.blog {
    display: flex;
    align-items: center;
    gap: 10px;

    .title:hover {
        text-decoration: underline;
    }
}
</style>