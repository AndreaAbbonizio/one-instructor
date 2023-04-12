<script>
export default {

}
</script>

<template>
    <div class="faq-card">
        <div class="icon-card">
            <i class="fa-solid fa-briefcase"></i>
        </div>
        <div class="text-card">
            <h3>Entrepreneurship</h3>
            <p>
                Vestibulim vitae aliquam nunc. Suspendisse mollis metus ac tellus
                egestas pharetra.Suspensdisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo.
                Interger vulputate tempor arcu. Vestibulum vulputate
            </p>
        </div>
    </div>
    <div class="faq-card">
        <div class="icon-card">
            <i class="fa-solid fa-rocket"></i>
        </div>
        <div class="text-card">
            <h3>Accelerated learning</h3>
            <p>
                Vestibulim vitae aliquam nunc. Suspendisse mollis metus ac tellus
                egestas pharetra.Suspensdisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo.
                Interger vulputate tempor arcu. Vestibulum vulputate
            </p>
        </div>
    </div>
    <div class="faq-card">
        <div class="icon-card">
            <i class="fa-regular fa-thumbs-up"></i>
        </div>
        <div class="text-card">
            <h3>Productivity</h3>
            <p>
                Vestibulim vitae aliquam nunc. Suspendisse mollis metus ac tellus
                egestas pharetra.Suspensdisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo.
                Interger vulputate tempor arcu. Vestibulum vulputate
            </p>
        </div>
    </div>
    <div class="faq-card">
        <div class="icon-card">
            <i class="fa-solid fa-gear"></i>
        </div>
        <div class="text-card">
            <h3>Life Coaching</h3>
            <p>
                Vestibulim vitae aliquam nunc. Suspendisse mollis metus ac tellus
                egestas pharetra.Suspensdisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo.
                Interger vulputate tempor arcu. Vestibulum vulputate
            </p>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.faq-card {
    display: flex;
    gap: 20px;
    width: calc(100% / 2 - 20px / 2);
    border-left: 4px solid #fcb900;
    padding: 20px;
    box-shadow: 5px 5px 5px 5px #edf2f5;
    margin-bottom: .7em;

    h3 {
        margin-bottom: .5em;
    }

    .icon-card {
        width: 40%;
        text-align: center;

        i {
            font-size: 3em;
            color: #fcb900;
        }
    }
}
</style>