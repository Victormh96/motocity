<template>
    <!--Title-->
    <title>Motocity El Salvador - Venta de motos en El Salvador</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <section class="vh-90">
        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">

                <!--Img-->
                <div class="col-md-8 col-lg-7 col-xl-6">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        class="img-fluid" alt="Phone image">
                </div>

                <!--Form-->
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form :model="formState" @submit.prevent="submit">

                        <!--Email-->
                        <div class="form-outline mb-4">
                            <input type="email" id="form1Example13" class="form-control form-control-lg"
                                v-model="formState.email" autocomplete="off" required />
                            <label class="form-label" for="form1Example13">Email address</label>
                        </div>

                        <!--Password-->
                        <div class="form-outline mb-4">
                            <input type="password" id="form1Example23" class="form-control form-control-lg"
                                v-model="formState.password" required />
                            <label class="form-label" for="form1Example23">Password</label>
                        </div>

                        <!--Checkbox-->
                        <div class="d-flex justify-content-around align-items-center mb-4">
                            <a href="#">Forgot password?</a>
                        </div>

                        <!--Submit-->
                        <button type="submit" class="btn btn-primary btn-lg btn-block pb-3 pt-3">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!--Footer-->
    <Footer />
</template>

<!--=======Script=======-->
<script>
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/ComponentFooter.vue"

export default {
    data() {
        return {
            formState: {
                email: null,
                password: null
            }
        }
    },

    components: {
        Navbar,
        Footer
    }, 

    methods: {
        async submit() {
            await this.$store.dispatch("Login", this.formState).then(() => {

                this.$store.state.auth.login.user.id_rol

                if (this.$store.state.auth.login) {
                    alert('¡Bienvenido!')
                    if (this.$store.state.auth.login.user.id_rol == 1) {
                        this.$router.push({ name: 'Dashboard' })
                    } else {
                        this.$router.push({ name: 'AuhInicio' })
                    }
                } else {
                    alert('Usuario o contraseña incorrecta')
                }

            }).catch(err => {
                console.log(err)
            })
        }
    }
};
</script>
