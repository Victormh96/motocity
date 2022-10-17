<template>
    <!--Title-->
    <title>Motocity El Salvador - Venta de motos en El Salvador</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <div class="ps-section--gray vh-80">
        <div class="container">

            <!--Product-->
            <div class="ps-product--detail ps-product--hot-deal" v-for="(o, index) in this.list" v-bind:key="index">
                <div class="ps-product__header">
                    <div class="ps-product__thumbnail" data-vertical="true">
                        <figure>
                            <div class="ps-wrapper">
                                <div class="ps-product__gallery" data-arrow="true">
                                    <div class="item">
                                        <a :href="o.producto.foto">
                                            <img :src="o.producto.foto">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>

                    <!--Detail-->
                    <div class="ps-product__info">
                        <h5>{{ o.producto.categoria.nombre }}</h5>
                        <router-link :to="{ name: 'AuthProducto', params: { slug: o.producto.slug } }">
                            <h3 class="ps-product__name">{{ o.producto.nombre }}</h3>
                        </router-link>
                        <div class="ps-product__meta">
                            <h4 class="ps-product__price sale">${{ o.producto.precio }} <del> ${{
                            o.producto.precio_oferta }}</del></h4>
                            <div class="ps-product__specification">
                                <p>Status:
                                    <strong class="in-stock" v-if="o.producto.inventario > 0"> In
                                        Stock</strong>
                                    <strong class="in-stock not-stock" v-else> Out Of
                                        Stock</strong>
                                </p>
                                <br>
                                <p>Cantidad: {{ o.cantidad }}
                                </p>
                            </div>
                        </div>

                        <!--Count-->
                        <div class="ps-product__expires">
                            <!--Button-->
                            <button type="submit" class="ps-btn ps-btn--black eee" v-if="o.producto.inventario > 0"
                                @click="pay(o.id, o.id_usuario, o.id_producto, o.cantidad, o.producto.precio * o.cantidad )">Comprar</button>
                            <br><br>
                            <button type="submit" class="ps-btn ps-btn--black eee"
                                @click="destroy(o.id)">Eliminar</button>
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
            list: []
        }
    },

    async mounted() {
        // Vuex
        await this.$store.dispatch("List")
        this.list = this.$store.state.user.list
    },

    methods: {
        async destroy(id) {
            await this.$store.dispatch("Destroy", id).then(() => {
                alert("Eliminado del carrito")
                location.reload()
            }).catch(err => {
                console.log(err)
            })
        },

        async pay(id, id_usuario, id_producto, cantidad, total) {

            const formState = {
                id: id,
                id_usuario: id_usuario,
                id_producto: id_producto,
                cantidad: cantidad,
                total: total
            }

            await this.$store.dispatch("Pay", formState).then(() => {
                alert("Producto Pagado")
            }).catch(err => {
                console.log(err)
            })
        }
    },

    components: {
        Navbar,
        Footer
    },
};
</script>
