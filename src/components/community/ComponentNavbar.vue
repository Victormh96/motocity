<template>

    <!--Header-->
    <header class="header header--standard header--market-place-4" data-sticky="true">
        <div class="header__content">
            <div class="container">
                <div class="header__content-left">

                    <!--Img-->
                    <a class="ps-logo" href="/">
                        <img src="@/../public/img/kiwico.png"
                            alt="kiwico, accesorios para telefonos y tecnologia, case para huawei, samsung, iphone">
                    </a>
                </div>

                <!--Search-->
                <div class="header__content-center">
                    <form class="ps-form--quick-search" @submit.prevent="submit">
                        <div class="form-group--icon">
                            <i class="icon-chevron-down"></i>
                            <select class="form-control">
                                <option value="1">All</option>
                            </select>
                        </div>
                        <input class="form-control" type="text" placeholder="Buscar algo..." v-model="search" required>
                        <button>Buscar</button>
                    </form>
                </div>

                <!--Group-->
                <div class="header__content-right">
                    <div class="header__actions">

                        <!--Carrito-->
                        <div class="ps-cart--mini">

                            <!--Icon-->
                            <a class="header__extra" href="/login">
                                <i class="icon-bag2"></i><span><i>0</i></span>
                            </a>
                        </div>

                        <!--Auth-->
                        <div class="ps-block--user-header">
                            <div class="ps-block__left">
                                <a href="/login">
                                    <i class="icon-user"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!--Mobile-->
    <header class="header header--mobile" data-sticky="true">
        <div class="navigation--mobile">
            <div class="navigation__left">

                <!--Img-->
                <a class="ps-logo pl-3 pl-sm-5" href="/">
                    <img src="@/../public/img/kiwico.png" class="pt-3"
                        alt="kiwico, accesorios para telefonos y tecnologia" width="80" height="40">
                </a>
            </div>

            <div class="navigation__right">
                <div class="header__actions">

                    <!--Card-->
                    <div class="ps-cart--mini">
                        <a class="header__extra" href="/login">
                            <i class="icon-bag2"></i><span><i>0</i></span>
                        </a>
                    </div>

                    <!--Icons-->
                    <div class="ps-block--user-header">
                        <div class="ps-block__left">
                            <a href="/login">
                                <i class="icon-user"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Search-->
        <div class="ps-search--mobile">
            <form class="ps-form--search-mobile" @submit.prevent="submit">
                <div class="form-group--nest">
                    <input class="form-control" type="text" placeholder="Buscar" v-model="search" required>
                    <button><i class="icon-magnifier"></i></button>
                </div>
            </form>
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
