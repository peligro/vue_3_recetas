<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { onMounted, ref } from 'vue';
import { getDatosHome } from '@/services/homeService';

let datos = ref([]);//declarar una variable de tipo reactiva

onMounted(async()=>
{
    datos.value = await getDatosHome();
});


</script>

<template>
    <Header />
    <div class="breadcumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/breadcumb3.jpg)">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcumb-text text-center">
                        <h2>Recetas flaites - Desarrollado con Vue 3</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="top-catagory-area section-padding-80-0">
        <div class="container">

        </div>
    </section>
    <section class="best-receipe-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading">
                        <h3>Últimas recetas publicadas </h3>
                    </div>
                </div>
            </div>

            <div class="row">

                <div v-for="(dato, index) in datos.data" :key="index" class="col-12 col-sm-6 col-lg-4">
                    <div class="single-best-receipe-area mb-30">
                        <img :src="dato.imagen" class="foto-mini" :alt="dato.nombre" />
                        <div class="receipe-content">
                            <router-link :to="{name:'recetasDetalle', params:{slug:dato.slug}}">
                                <h5>{{ dato.nombre }}</h5>
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <Footer />
</template>

<style scoped></style>