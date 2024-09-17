<script setup>
import { useAuthStore } from '@/stores/authStore';

let store= useAuthStore(); 
</script>

<template>
    <header class="header-area">

        <div class="top-header-area">
            <div class="container h-100">
                <div class="row h-100 align-items-center justify-content-between">

                    <div class="col-12 col-sm-6">
                        <div class="breaking-news">
                            <div id="breakingNewsTicker" class="ticker">
                                <ul>
                                    <li><a href="mailto:info@recetarioflaite.cl">info@recetarioflaite.cl</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6">
                        <div class="top-social-info text-right">
                            <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-aedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="delicious-main-menu">
            <div class="classy-nav-container breakpoint-off">
                <div class="container">

                    <nav class="classy-navbar justify-content-between" id="deliciousNav">


                        <router-link class="nav-brand" to="/">
                            <img src="/img/core-img/logo2.png" alt="logo" style="width:144px; height:65px" />
                        </router-link>


                        <div class="classy-navbar-toggler">
                            <span class="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <div class="classy-menu">

                            <div class="classycloseIcon">
                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                            </div>

                            <div class="classynav">
                                <ul>
                                    <li><router-link to="/" title="Home">Home</router-link></li>
                                    <li>
                                        <router-link :to="{name:'sobreNosotros'}" title="Sobre nosotros">
                                            Sobre nosotros
                                        </router-link>
                                    </li>
                                    <li><router-link to="/recetas" title="Recetas">Recetas</router-link></li>
                                    <li><router-link to="/contacto" title="Contacto">Contacto</router-link></li>

                                    <li v-if="store.authId==null"><router-link to="/registro" title="Registro">Registro</router-link></li>
                                    <li v-if="store.authId==null"><router-link :to="{name:'login'}" title="Login">Login</router-link></li>

                                    <li v-if="store.authId!=null"><router-link :to="{name:'panel'}" :title="`Hola ${store.authNombre}`">{{ 'Hola '+store.authNombre }}</router-link></li>
                                    <li v-if="store.authId!=null">
                                        <router-link v-on:click="store.cerrarSesion()" to="#" title="Cerrar Sesión">Cerrar sesión</router-link>
                                        <!--<router-link @click="store.cerrarSesion()" to="#" title="Cerrar Sesión">Cerrar sesión</router-link>-->
                                    </li>
                                     
                                </ul>


                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
