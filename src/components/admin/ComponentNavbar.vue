<template>

    <!--Header-->
    <header class="header header--standard header--market-place-4" data-sticky="true">
        <div class="header__content text-center">
            <div class="container">

                    <!--Img-->
                    <a class="ps-logo" href="/">
                        <img src="@/../public/img/kiwico.png"
                            alt="kiwico, accesorios para telefonos y tecnologia, case para huawei, samsung, iphone">
                    </a>
            </div>
        </div>
    </header>

    <!--Mobile-->
    <header class="header header--mobile" data-sticky="true">
        <div class="navigation--mobile text-center justify-content-center">

                <!--Img-->
                <a class="ps-logo pl-3 pl-sm-5" href="/">
                    <img src="@/../public/img/kiwico.png" class="pt-3"
                        alt="kiwico, accesorios para telefonos y tecnologia" width="80" height="40">
                </a>
        </div>
    </header>
</template>

<!--=======Script=======-->
<script>
export default {
    data() {
        return {
            search: null
        }
    },

    methods: {
        submit() {
            this.$router.push({ name: 'Busqueda', params: { slug: this.search } })
            this.$store.dispatch("Search", this.search)
        }
    }
};
</script>
