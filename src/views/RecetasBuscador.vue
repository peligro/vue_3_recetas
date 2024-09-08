<script setup>
import { Form, Field } from 'vee-validate';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue'; 
import { recetasComposable } from '@/composables/recetasComposable'; 
import { watchEffect, ref } from 'vue'; 
const { datos: datos, categorias:categorias, error:error } = recetasComposable();
watchEffect(() => {
      if (error.value) { 
        //window.location="/error";
      }
    });
 
const categoria_id=ref('0');
const search=ref('');
let enviar=()=>
{
  if(categoria_id.value!="0")
  {
    //console.log(`categoria_id:${categoria_id.value} | search=${search.value}`);
    window.location=`/recetas/buscador?categoria_id=${categoria_id.value}&search=${search.value}`;
  }
   
};
</script>

<template>
    <Header />
  
    <div class="breadcumb-area bg-img bg-overlay" style="background-image: url(/img/bg-img/breadcumb4.jpg)">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12">
              <div class="breadcumb-text text-center">
                <h2>Recetas</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="top-catagory-area section-padding-80-0">
      <div class="container">

      <div class="receipe-post-search mb-80">
    <div class="container">
      <Form  @submit="enviar()">
            <div class="row">
                <div class="col-12 col-lg-4">
                    <Field as="select" class="form-control" v-model="categoria_id" name="categoria_id" id="categoria_id" >
                      <option value="0">Seleccione.....</option>
                      
                         <option v-for="(categoria, i) in categorias.data" :key="i" :value="categoria.id">{{categoria.nombre}}</option>
                     
                    </Field>
                     
                </div>

                <div class="col-12 col-lg-4"> 
                    <Field type="text" v-model="search" name="search" id="search" class="form-control"  placeholder="Buscar...."  />

                </div>
                <div class="col-12 col-lg-3 text-right">
                    <button type="submit" class="btn delicious-btn" title="Buscar"><i class="fas fa-search"></i> Buscar</button>
                </div>
            </div>
        </Form>
    </div>
  </div>

      </div>
      </section>

      <section class="best-receipe-area">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <div class="section-heading">
                      <h3>Todas nuestras recetas</h3>
                  </div>
              </div>
          </div>

          <div class="row">

          

            <div v-for="(dato, index) in datos.data" :key="index" class="col-12 col-sm-6 col-lg-4">
                      <div class="single-best-receipe-area mb-30">
                          <img :src="dato.imagen" :alt="dato.nombre" class="foto-mini" />
                          <div class="receipe-content">
                              <router-link :to="{name:'recetasDetalle' ,params:{slug:dato.slug}}" :title="dato.nombre">
                                  <h5>{{dato.nombre}}</h5>
                              </router-link>
                          </div>
                      </div>
                    </div>



          </div>
      </div>
  </section>
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
                <h2>Recetas</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="top-catagory-area section-padding-80-0">
      <div class="container">

      <div class="receipe-post-search mb-80">
    <div class="container">
        <form   >
            <div class="row">
                <div class="col-12 col-lg-4">
                    <select class="form-control">
                      <option value="0">Seleccione.....</option>
                      
                         <option  >cat</option>
                     
                    </select>
                     
                </div>

                <div class="col-12 col-lg-4"> 
                    <input type="text" value="" class="form-control"  placeholder="Buscar...."  />

                </div>
                <div class="col-12 col-lg-3 text-right">
                    <button type="submit" class="btn delicious-btn" title="Buscar"><i class="fas fa-search"></i> Buscar</button>
                </div>
            </div>
        </form>
    </div>
  </div>

      </div>
      </section>

      <section class="best-receipe-area">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <div class="section-heading">
                      <h3>Todas nuestras recetas</h3>
                  </div>
              </div>
          </div>

          <div class="row">

          

            



          </div>
      </div>
  </section>
 <Footer />
  </template>
-->