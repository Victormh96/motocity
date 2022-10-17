<template>
    <!--Title-->
    <title>Motocity El Salvador - Venta de motos en El Salvador</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <div class="ps-section--gray vh-80">
        <div class="container">

            <!--title-->
            <h4 class="mb-5">Busqueda: {{ this.slug }}</h4>

            <!--Group-->
            <div class="ps-block--products-of-category">

                <!--Product-->
                <div class="ps-block__product-box">
                    <div class="ps-product ps-product--simple" v-for="(f, index) in this.search" v-bind:key="index">
                        <div class="ps-product__thumbnail">
                            <router-link :to="{ name: 'Producto', params: { slug: f.slug } }">
                                <img :src="f.foto">
                            </router-link>
                        </div>

                        <!--Description-->
                        <div class="ps-product__container">
                            <div class="ps-product__content" data-mh="clothing">
                                <router-link :to="{ name: 'Producto', params: { slug: f.slug } }"
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
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/ComponentFooter.vue"

export default {
    computed: {
        search() {
            return this.$store.state.community.search
        }
    },

    components: {
        Navbar,
        Footer
    },

    props: ["slug"]
};
</script>
