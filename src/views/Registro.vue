<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { registroComposable } from '@/componsables/useSeguridadComponsable';
import { registroSchema } from '@/schemas/validacionesSchema';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { ref } from 'vue';

let boton = ref('block');
let preloader = ref('none');

let nombre = ref('');
let correo = ref('');
let password = ref('');
const {sendData} = registroComposable();
let enviar = () => {
    boton.value='none';
    preloader.value='block';
    sendData({nombre:nombre.value, correo: correo.value, password:password.value});
};
</script>

<template>
    <Header />
    <div className="breadcumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/breadcumb6.jpg)">
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="breadcumb-text text-center">
                        <h2>Registro</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="contact-area section-padding-0-80">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading">
                        <h3>Regístrate</h3>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-8">
                    <div className="contact-form-area">
                        <Form :validation-schema="registroSchema" @submit="enviar()">

                            <div class="row">

                                <div class="col-12 col-lg-12">
                                    <ErrorMessage name="nombre" class="text text-danger" />
                                    <Field type="text" name="nombre" v-model="nombre" class="form-control" placeholder="Nombre:" />
                                </div>

                                <div class="col-12 col-lg-12">
                                    <ErrorMessage name="correo" class="text text-danger" />
                                    <Field type="text" name="correo" v-model="correo" class="form-control" placeholder="E-Mail:" />
                                </div>

                                <div class="col-12 col-lg-12">
                                    <ErrorMessage name="password" class="text text-danger" />
                                    <Field type="password" v-model="password" name="password" class="form-control"
                                        placeholder="Contraseña:" />
                                </div>

                                <div class="col-12 text-center" :style="'display:' + boton">
                                    <button class="btn delicious-btn mt-30" type="submit" title="Enviar">
                                        Enviar
                                    </button>
                                </div>
                                <div class="col-12 text-center" :style="'display:' + preloader">
                                    <img src="/img/img/load.gif" />
                                </div>

                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>