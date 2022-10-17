<template>
    <!--Title-->
    <title>Motocity El Salvador - Venta de motos en El Salvador</title>

    <!--Navbar-->
    <Navbar />

    <!--Group-->
    <div class="vh-90">
        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">

                <!--Form-->
                <div class="col-12">
                    <form :model="formState" @submit.prevent="submit">
                        <div class="row">

                            <!--Nombre-->
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Nombre</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Nombre" v-model="formState.nombre" autocomplete="off" required>
                                </div>
                            </div>

                            <!--Inventario-->
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Inventario</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Descripcion" v-model="formState.inventario" autocomplete="off"
                                        required>
                                </div>
                            </div>

                            <!--Descripcion-->
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Descripcion</label>
                                    <textarea type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Descripcion" v-model="formState.descripcion" autocomplete="off"
                                        required></textarea>
                                </div>
                            </div>

                            <!--Precio-->
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Precio</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Precio" v-model="formState.precio" autocomplete="off" required>
                                </div>
                            </div>

                            <!--Precio Oferta-->
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Precio Oferta</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Precio Oferta" v-model="formState.precio_oferta" autocomplete="off"
                                        required>
                                </div>
                            </div>

                            <!--Foto-->
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Foto</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Foto" v-model="formState.foto" autocomplete="off" required>
                                </div>
                            </div>

                            <!--Sku-->
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Sku</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Sku" v-model="formState.sku" autocomplete="off" required>
                                </div>
                            </div>

                            <!--Top-->
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Top</label>
                                    <select class="form-control" id="exampleFormControlSelect1" v-model="formState.top"
                                        required>
                                        <option value="1">SI</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>

                            <!--Oferta-->
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Oferta</label>
                                    <select class="form-control" id="exampleFormControlSelect1"
                                        v-model="formState.oferta" required>
                                        <option value="1">SI</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>

                            <!--Categoria-->
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Categoria</label>
                                    <select class="form-control" id="exampleFormControlSelect1"
                                        v-model="formState.id_categoria " required>
                                        <option value="1">Repuestos</option>
                                        <option value="2">Motocicletas</option>
                                    </select>
                                </div>
                            </div>

                            <!--Estado-->
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Estado</label>
                                    <select class="form-control" id="exampleFormControlSelect1"
                                        v-model="formState.estado " required>
                                        <option value="1">Activado</option>
                                        <option value="0">Descativado</option>
                                    </select>
                                </div>
                            </div>

                            <!--Submit-->
                            <button type="submit" class="btn btn-primary btn-lg btn-block pb-3 pt-3 ww">Enviar</button>
                        </div>
                    </form>
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
            find: [],
            formState: {
                id: null,
                nombre: null,
                descripcion: null,
                inventario: null,
                precio: null,
                precio_oferta: null,
                foto: null,
                sku: null,
                top: null,
                oferta: null,
                id_categoria: null,
                estado: null,
                id_usuario: this.$store.state.auth.login.user.id
            }
        }
    },

    created() {
        this.find = this.$store.state.admin.all.filter(element => element.id == this.id)
        this.formState.id = this.find[0].id
        this.formState.nombre = this.find[0].nombre
        this.formState.descripcion = this.find[0].descripcion
        this.formState.inventario = this.find[0].inventario
        this.formState.precio = this.find[0].precio
        this.formState.precio_oferta = this.find[0].precio_oferta
        this.formState.foto = this.find[0].foto
        this.formState.sku = this.find[0].sku
        this.formState.top = this.find[0].top
        this.formState.oferta = this.find[0].oferta
        this.formState.id_categoria = this.find[0].id_categoria
        this.formState.estado = this.find[0].estado
    },

    components: {
        Navbar,
        Footer
    },

    methods: {
        async submit() {
            await this.$store.dispatch("Update", this.formState).then(() => {
                alert("Formulario Editado")
            }).catch(err => {
                console.log(err)
            })
        }
    },

    props: ["id"]
};
</script>
