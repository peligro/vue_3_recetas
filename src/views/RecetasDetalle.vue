<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { recetaComposable } from '@/componsables/recetaComposable';
import {useRoute} from 'vue-router';
import { watchEffect } from 'vue';
let route = useRoute();

const {dato:dato, error: error} = recetaComposable(route.params.slug);
 
watchEffect(()=>
{
    if(error.value)
    {
      
        window.location="/error";
    }
});
</script>

<template>
    <Header />
    <div class="breadcumb-area bg-img bg-overlay" style="background-image: url(/img/bg-img/breadcumb4.jpg)">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12">
              <div class="breadcumb-text text-center">
                <h2>{{ dato.data?.nombre }}</h2>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div class="receipe-post-area section-padding-80">


  <div class="container">
      <div class="row">
          <div class="col-12">
            <img :src="dato.data?.imagen" :alt="dato.data?.nombre" />
          </div>
      </div>
  </div>

  <div class="receipe-content-area">
      <div class="container">

          <div class="row">
              <div class="col-12 col-md-8">
                  <div class="receipe-headline my-5">
                      <span>{{ dato.data?.fecha }}</span>
                      <h2>{{ dato.data?.nombre }}</h2>
                      <div class="receipe-duration">
                          <h6>Tiempo : {{ dato.data?.tiempo }}</h6>
                          <h6>Categoría: {{ dato.data?.categoria }}</h6>
                          <h6>Creada por: {{ dato.data?.user }}</h6>
                      </div>
                  </div>
              </div>


          </div>

          <div class="row">
              <div class="col-12 col-lg-12">
                  <div class="single-preparation-step d-flex">

                      <p> {{ dato.data?.descripcion }} </p>
                  </div>

              </div>

          </div>


      </div>
  </div>
</div>
    <Footer />
  </template>
 