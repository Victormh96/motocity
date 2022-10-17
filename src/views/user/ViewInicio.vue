<template>
    <!--Title-->
    <title>Motocity El Salvador - Venta de motos en El Salvador</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <div id="homepage-6">

        <!--Banner-->
        <div class="ps-home-banner">
            <div class="ps-carousel--nav-inside owl-slider" data-owl-auto="true" data-owl-loop="true"
                data-owl-speed="5000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="true" data-owl-item="1"
                data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1"
                data-owl-duration="1000" data-owl-mousedrag="on" data-owl-animate-in="fadeIn"
                data-owl-animate-out="fadeOut">
                <div class="ps-banner--market-4" data-background="@/../public/img/banner/1920x600-smx200.jpg">
                    <img src="@/../public/img/banner/1920x600-smx200.jpg">
                </div>
                <div class="ps-banner--market-4" data-background="@/../public/img/banner/1920x600-R1200.jpg">
                    <img src="@/../public/img/banner/1920x600-R1200.jpg">
                </div>
            </div>
        </div>

        <!--Features-->
        <div class="ps-site-features">
            <div class="container">
                <div class="ps-block--site-features ps-block--site-features-2">

                    <!--#1-->
                    <div class="ps-block__item">
                        <div class="ps-block__left"><i class="icon-rocket"></i></div>
                        <div class="ps-block__right">
                            <h4>Delivery Gratis</h4>
                            <p>Para todas las ordenes arriba de los $30</p>
                        </div>
                    </div>

                    <!--#2-->
                    <div class="ps-block__item">
                        <div class="ps-block__left"><i class="icon-sync"></i></div>
                        <div class="ps-block__right">
                            <h4>90 días de garantia</h4>
                            <p>Por Si los bienes tienen problemas</p>
                        </div>
                    </div>

                    <!--#3-->
                    <div class="ps-block__item">
                        <div class="ps-block__left"><i class="icon-credit-card"></i></div>
                        <div class="ps-block__right">
                            <h4>Pago seguro</h4>
                            <p>100% Pago seguro</p>
                        </div>
                    </div>

                    <!--#4-->
                    <div class="ps-block__item">
                        <div class="ps-block__left"><i class="icon-bubbles"></i></div>
                        <div class="ps-block__right">
                            <h4>Soporte 24/7</h4>
                            <p>Soporte dedicado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Promotion-->
        <div class="ps-promotions">
            <div class="container">
                <div class="row">

                    <!--#1-->
                    <div class="col-md-4 col-12">
                        <a class="ps-collection">
                            <img src="@/../public/img/banner/izquierda.jpg">
                        </a>
                    </div>

                    <!--#1-->
                    <div class="col-md-4 col-12">
                        <a class="ps-collection">
                            <img src="@/../public/img/banner/medio.jpg">
                        </a>
                    </div>

                    <!--#2-->
                    <div class="col-md-4 col-12">
                        <a class="ps-collection">
                            <img src="@/../public/img/banner/derecha.jpg">
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!--Deal Today-->
        <div class="ps-deal-hot">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 col-12 ">
                        <div class="ps-block--deal-hot" data-mh="dealhot">

                            <!--Title-->
                            <div class="ps-block__header">
                                <h3>Oferta de hoy</h3>
                            </div>

                            <!--Img-->
                            <div class="ps-product__content">
                                <div class="ps-carousel--deal-hot ps-carousel--deal-hot owl-slider" data-owl-auto="true"
                                    data-owl-loop="true" data-owl-speed="5000" data-owl-gap="0" data-owl-nav="false"
                                    data-owl-dots="false" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1"
                                    data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000"
                                    data-owl-mousedrag="on">

                                    <!--Product-->
                                    <div class="ps-product--detail ps-product--hot-deal"
                                        v-for="(o, index) in this.offer" v-bind:key="index">
                                        <div class="ps-product__header">
                                            <div class="ps-product__thumbnail" data-vertical="true">
                                                <figure>
                                                    <div class="ps-wrapper">
                                                        <div class="ps-product__gallery" data-arrow="true">
                                                            <div class="item">
                                                                <a :href="o.foto">
                                                                    <img :src="o.foto">
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </figure>

                                                <!--Option-->
                                                <div class="ps-product__variants" data-item="4" data-md="3" data-sm="3"
                                                    data-arrow="false">
                                                    <div class="item">
                                                        <img :src="o.foto">
                                                    </div>
                                                </div>
                                            </div>

                                            <!--Detail-->
                                            <div class="ps-product__info">
                                                <h5>{{ o.categoria.nombre }}</h5>
                                                <router-link :to="{ name: 'AuthProducto', params: { slug: o.slug } }">
                                                    <h3 class="ps-product__name">{{ o.nombre }}</h3>
                                                </router-link>
                                                <div class="ps-product__meta">
                                                    <h4 class="ps-product__price sale">${{ o.precio }} <del> ${{
                                                    o.precio_oferta }}</del></h4>
                                                    <div class="ps-product__specification">
                                                        <p>Status:
                                                            <strong class="in-stock" v-if="o.inventario > 0"> In
                                                                Stock</strong>
                                                            <strong class="in-stock not-stock" v-else> Out Of
                                                                Stock</strong>
                                                        </p>
                                                    </div>
                                                </div>

                                                <!--Count-->
                                                <div class="ps-product__expires">
                                                    <p>Expires In</p>
                                                    <ul class="ps-countdown" data-time="Dec 24, 2022 23:00:00">
                                                        <li><span class="days"></span>
                                                            <p>Days</p>
                                                        </li>
                                                        <li><span class="hours"></span>
                                                            <p>Hours</p>
                                                        </li>
                                                        <li><span class="minutes"></span>
                                                            <p>Minutes</p>
                                                        </li>
                                                        <li><span class="seconds"></span>
                                                            <p>Seconds</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Seller-->
                    <div class="col-xl-3 col-12 ">
                        <aside class="widget widget_best-sale" data-mh="dealhot">
                            <h3 class="widget-title">Los 5 más vendidos</h3>
                            <div class="widget__content">
                                <!--Product-->
                                <div class="ps-product-group" v-for="(t, index) in this.top" v-bind:key="index">
                                    <div class="ps-product--horizontal">

                                        <!--Img-->
                                        <div class="ps-product__thumbnail">
                                            <router-link :to="{ name: 'AuthProducto', params: { slug: t.slug } }">
                                                <img :src="t.foto">
                                            </router-link>
                                        </div>

                                        <!--Description-->
                                        <div class="ps-product__content">
                                            <router-link :to="{ name: 'AuthProducto', params: { slug: t.slug } }">
                                                <a class="ps-product__title" href="">{{ t.nombre }}</a>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Gray-->
    <div class="ps-section--gray">
        <div class="container">

            <!--Group-->
            <div class="ps-block--products-of-category">

                <!--Banner-->
                <div class="ps-block__slider">
                    <div class="ps-carousel--product-box owl-slider" data-owl-auto="true" data-owl-loop="true"
                        data-owl-speed="7000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="true"
                        data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1"
                        data-owl-item-lg="1" data-owl-duration="500" data-owl-mousedrag="off">
                        <img src="img/slider/vertical/clothing-1.jpg">
                        <img src="img/slider/vertical/clothing-2.jpg">
                        <img src="img/slider/vertical/clothing-3.jpg">
                    </div>
                </div>

                <!--Product-->
                <div class="ps-block__product-box">
                    <div class="ps-product ps-product--simple" v-for="(f, index) in this.featured" v-bind:key="index">
                        <div class="ps-product__thumbnail">
                            <router-link :to="{ name: 'AuthProducto', params: { slug: f.slug } }">
                                <img :src="f.foto">
                            </router-link>
                        </div>

                        <!--Description-->
                        <div class="ps-product__container">
                            <div class="ps-product__content" data-mh="clothing">
                                <router-link :to="{ name: 'AuthProducto', params: { slug: f.slug } }"
                                    class="ps-product__title">
                                    {{ f.nombre }}
                                </router-link>
                                <p class="ps-product__price sale">${{ f.precio }} <del v-if="f.oferta == 1"> ${{
                                f.precio_oferta }}</del></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Footer-->
    <Footer />
</template>

<!--=======Script=======-->
<script>
import Navbar from "@/components/user/ComponentNavbar.vue"
import Footer from "@/components/ComponentFooter.vue"

export default {
    data() {
        return {
            offer: null,
            top: null,
            featured: null
        }
    },

    async mounted() {
        // Vuex
        this.$store.dispatch("Offer")
        this.offer = this.$store.state.community.offer

        // Vuex
        await this.$store.dispatch("Top")
        this.top = this.$store.state.community.top

        // Vuex
        await this.$store.dispatch("Featured")
        this.featured = this.$store.state.community.featured
    },

    components: {
        Navbar,
        Footer
    },
};
</script>
