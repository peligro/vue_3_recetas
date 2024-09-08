<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import {ref} from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { contactoSchema } from '@/schemas/validacionesSchema';
import { contactoComposable } from '@/composables/contactoComposable';
let boton=ref('block');
let preloader=ref('none');
let nombre=ref('');
let telefono=ref('');
let correo=ref('');
let mensaje=ref('');
const { sendData } = contactoComposable();
let enviar=()=>
{
    boton.value='none';
    preloader.value='block';
    sendData({nombre:nombre.value, correo:correo.value, telefono:telefono.value, mensaje:mensaje.value});
};
</script>

<template>
    <Header />
    <div class="breadcumb-area bg-img bg-overlay" style="background-image: url(/img/bg-img/breadcumb4.jpg)">
  <div class="container h-100">
      <div class="row h-100 align-items-center">
          <div class="col-12">
              <div class="breadcumb-text text-center">
                  <h2>Contáctanos</h2>
              </div>
          </div>
      </div>
  </div>
</div>


<div class="contact-information-area section-padding-80">
  <div class="container">
      <div class="row">
          <div class="col-12">
              <div class="logo mb-80">
                  <img src="/img/core-img/logo2.png" alt="" style="width: 144px;height:65px" />
              </div>
          </div>
      </div>

      <div class="row"> 


          <div class="col-12 col-lg-12">
            <div class="row">
              <div class="col-4">
                <div class="single-contact-information mb-30">
                  <h6>Dirección:</h6>
                  <p>481 Creekside Lane Avila <br />Beach, CA 93424</p>
                </div>
              </div>
              <div class="col-4">
                <div class="single-contact-information mb-30">
                  <h6>Teléfonos:</h6>
                  <p>+53 345 7953 32453 <br />+53 345 7557 822112</p>
                </div>
              </div>
              <div class="col-4">
                <div class="single-contact-information mb-30">
                  <h6>E-Mail:</h6>
                  <p>{{ 'yourmail@gmail.com' }}</p>
              </div>
              </div>
            </div>


          </div>


      </div>
  </div>
</div>
<div class="contact-area section-padding-0-80">
  <div class="container">
      <div class="row">
          <div class="col-12">
              <div class="section-heading">
                  <h3>Cuéntanos en qué te podemos ayudar!!</h3>
              </div>
          </div>
      </div>

      <div class="row">
          <div class="col-12">
              <div class="contact-form-area">
                <Form :validation-schema="contactoSchema" @submit="enviar()">
                      <div class="row">
                          <div class="col-12 col-lg-6">
                            <ErrorMessage name="nombre" class="text text-danger" />
                              <Field type="text" class="form-control" v-model="nombre" name="nombre" id="nombre" placeholder="Nombre"  />
                              
                          </div>
                          <div class="col-12 col-lg-6">
                                <ErrorMessage name="correo" class="text text-danger" />
                              <Field type="text" class="form-control" v-model="correo" name="correo" id="correo"  placeholder="E-Mail" />
                              
                          </div>
                          <div class="col-12">
                            <ErrorMessage name="telefono" class="text text-danger" />
                              <Field type="text" class="form-control" v-model="telefono" name="telefono" id="telefono" placeholder="Teléfono" />
                              
                          </div>
                          <div class="col-12">
                            <ErrorMessage name="mensaje" class="text text-danger" />
                              <Field as="textarea" v-model="mensaje" name="mensaje" id="mensaje" class="form-control" cols="30" rows="10" placeholder="Mensaje" ></Field>
                             
                          </div>
                          <div class="col-12 text-center" :style="'display:'+boton">
                              <button class="btn delicious-btn mt-30" type="submit" title="Enviar"  >Enviar</button>
                          </div>
                          <div class="col-12 text-center" :style="'display:'+preloader">
                              <img src="/img/img/load.gif" alt="" />
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

  <!--
<template>
    <Header />
    <div class="breadcumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/breadcumb4.jpg)">
  <div class="container h-100">
      <div class="row h-100 align-items-center">
          <div class="col-12">
              <div class="breadcumb-text text-center">
                  <h2>Contáctanos</h2>
              </div>
          </div>
      </div>
  </div>
</div>


<div class="contact-information-area section-padding-80">
  <div class="container">
      <div class="row">
          <div class="col-12">
              <div class="logo mb-80">
                  <img src="/img/core-img/logo2.png" alt="" style="width: 144px;height:65px" />
              </div>
          </div>
      </div>

      <div class="row"> 


          <div class="col-12 col-lg-12">
            <div class="row">
              <div class="col-4">
                <div class="single-contact-information mb-30">
                  <h6>Dirección:</h6>
                  <p>481 Creekside Lane Avila <br />Beach, CA 93424</p>
                </div>
              </div>
              <div class="col-4">
                <div class="single-contact-information mb-30">
                  <h6>Teléfonos:</h6>
                  <p>+53 345 7953 32453 <br />+53 345 7557 822112</p>
                </div>
              </div>
              <div class="col-4">
                <div class="single-contact-information mb-30">
                  <h6>E-Mail:</h6>
                  <p>{{ 'yourmail@gmail.com' }}</p>
              </div>
              </div>
            </div>


          </div>


      </div>
  </div>
</div>
<div class="contact-area section-padding-0-80">
  <div class="container">
      <div class="row">
          <div class="col-12">
              <div class="section-heading">
                  <h3>Cuéntanos en qué te podemos ayudar!!</h3>
              </div>
          </div>
      </div>

      <div class="row">
          <div class="col-12">
              <div class="contact-form-area">
                
              </div>
          </div>
      </div>
  </div>
</div>
     
 <Footer />
  </template>
  -->
