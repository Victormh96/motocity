<template>
    <!--Title-->
    <title>Motocity El Salvador - Venta de motos en El Salvador</title>

    <!--Navbar-->
    <Navbar />

    <!--Group-->
    <div class="vh-90">
        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">

                <!--Button-->
                <router-link :to="{ name: 'Add' }">
                    <h2><span class="badge badge-secondary">NUEVO</span></h2>
                </router-link>

                <!--Table-->
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">SKU</th>
                                <th scope="col">NOMBRE</th>
                                <th scope="col">PRECIO</th>
                                <th scope="col">INVENTARIO</th>
                                <th scope="col">ESTADO</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(a, index) in this.all" v-bind:key="index">
                                <th>{{ a.sku }}</th>
                                <td>{{ a.nombre }}</td>
                                <td>${{ a.precio }}</td>
                                <td>{{ a.inventario }}</td>
                                <td>
                                    <span class="badge badge-success pt-2 pb-2" v-if="a.estado == 1">Activado</span>
                                    <span class="badge badge-danger pt-2 pb-2" v-else>Desactivado</span>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'Update', params: { id: a.id }}"
                                        class="btn btn-primary btn-sm">
                                        Editar
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!--Footer-->
    <Footer />
</template>

<!--=======Script=======-->
<script>
import Navbar from "@/components/admin/ComponentNavbar.vue"
import Footer from "@/components/ComponentFooter.vue"

export default {
    data() {
        return {
            all: null
        }
    },

    async mounted() {
        // Vuex
        await this.$store.dispatch("All")
        this.all = this.$store.state.admin.all
    },

    components: {
        Navbar,
        Footer
    },
};
</script>
