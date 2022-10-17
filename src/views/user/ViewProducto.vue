<template>
    <!--Title-->
    <title>Motocity El Salvador - Venta de motos en El Salvador</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <div class="ps-breadcrumb">
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="/tienda">INICIO</a></li>
                <li><a>{{ this.product.nombre }}</a></li>
            </ul>
        </div>
    </div>

    <!--Group-->
    <div class="ps-page--product">
        <div class="ps-container">
            <div class="ps-page__container">

                <!--Left-->
                <div class="ps-page__left">
                    <div class="ps-product--detail ps-product--fullwidth">
                        <div class="ps-product__header">

                            <!--Gallery-->
                            <div class="ps-product__thumbnail" data-vertical="true">
                                <figure>
                                    <div class="ps-wrapper">
                                        <div class="ps-product__gallery" data-arrow="true">

                                            <!--Img-->
                                            <div class="item">
                                                <a :href="this.product.foto">
                                                    <img :src="this.product.foto">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>

                            <!--Detail-->
                            <div class="ps-product__info">
                                <h1>{{ this.product.nombre }}</h1>
                                <div class="ps-product__meta"></div>
                                <h4 class="ps-product__price">$ {{ this.product.precio }} <del
                                        v-if="this.product.oferta== 1"> ${{
                                        this.product.precio_oferta }}</del></h4>

                                <div class="ps-product__desc">
                                    <p>Status:
                                        <strong class="ps-tag--in-stock"
                                            v-if="this.product.inventario > 0">Disponible</strong>

                                        <strong class="ps-tag--in-stock not-stock" v-else>No Disponible</strong>
                                    </p>
                                    <p>{{ this.product.descripcion }}</p>
                                </div>

                                <!--Carrito-->
                                <form :model="formState" @submit.prevent="submit">
                                    <div class="ps-product__shopping">
                                        <figure>
                                            <figcaption>Cantidad</figcaption>
                                            <div class="form-group--number">
                                                <button class="up">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                                <button class="down">
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                                <input class="form-control" type="text" placeholder="1"
                                                    v-model="formState.cantidad">
                                            </div>
                                        </figure>

                                        <!--Button-->
                                        <button type="submit" class="ps-btn ps-btn--black">Agregar al carrito</button>
                                    </div>
                                </form>

                                <!--Especification-->
                                <div class="ps-product__specification">
                                    <p><strong>SKU: {{ this.product.sku }}</strong></p>
                                </div>

                                <div class="ps-product__sharing">
                                    <a class="facebook" href="#">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                    <a class="twitter" href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a class="linkedin" href="#">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                    <a class="instagram" href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--Others-->
                <div class="ps-page__right">
                    <aside class="widget widget_product widget_features">
                        <p><i class="icon-network"></i> Shipping worldwide</p>
                        <p><i class="icon-3d-rotate"></i> Free 7-day return if eligible, so easy</p>
                        <p><i class="icon-receipt"></i> Supplier give bills for this product.</p>
                        <p><i class="icon-credit-card"></i> Pay online or when receiving goods</p>
                    </aside>
                </div>
            </div>

            <!--Others-->
            <div class="ps-section--default ps-customer-bought">
                <div class="ps-section__header">
                    <h3>Más productos</h3>
                </div>

                <!--Card-->
                <div class="ps-section__content">
                    <div class="row">
                        <div class="col-lg-2 col-md-4 col-6" v-for="(r, index) in this.random" v-bind:key="index">
                            <div class="ps-product">
                                <div class="ps-product__thumbnail">

                                    <!--Img-->
                                    <a v-bind:href="'/tienda/producto/' + r.slug">
                                        <img :src="r.foto">
                                    </a>

                                    <!--Action-->
                                    <ul class="ps-product__actions">
                                        <li>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Read More">
                                                <i class="icon-bag2"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-bind:href="'/tienda/producto/' + r.slug" data-toggle="tooltip"
                                                data-placement="top" title="Quick View">
                                                <i class="icon-eye"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <!--Description-->
                                <div class="ps-product__container">
                                    <a class="ps-product__vendor" href="#">{{ r.categoria.nombre }}</a>
                                    <div class="ps-product__content">
                                        <a class="ps-product__title" v-bind:href="'/tienda/producto/' + r.slug">{{
                                        r.nombre
                                        }}</a>
                                        <p class="ps-product__price">${{ r.precio }} <del v-if="r.oferta== 1">
                                                ${{ r.precio_oferta }}</del></p>
                                    </div>
                                </div>
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
            product: [],
            random: null,
            formState: {
                cantidad: 1,
                id_usuario: this.$store.state.auth.login.user.id,
                id_producto: this.$store.state.user.product.id
            }
        }
    },

    async beforeCreate() {
        // Vuex
        await this.$store.dispatch("Product", this.slug)
        this.product = this.$store.state.community.product

        // Vuex
        await this.$store.dispatch("Random")
        this.random = this.$store.state.community.random
    },

    components: {
        Navbar,
        Footer
    },

    methods: {
        async submit() {
            await this.$store.dispatch("Cart", this.formState).then(() => {
                alert("Añadido al carrito")
            }).catch(err => {
                console.log(err)
            })
        }
    },

    props: ["slug"]
};
</script>
