<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
<Header />
<div class="breadcumb-area bg-img bg-overlay" style="background-image: url(/img/bg-img/breadcumb1.jpg)">
  <div class="container h-100">
      <div class="row h-100 align-items-center">
          <div class="col-12">
              <div class="breadcumb-text text-center">
                  <h2>Sobre nosotros</h2>
              </div>
          </div>
      </div>
  </div>
</div>
<section class="about-area section-padding-80">
  <div class="container">
      <div class="row">
          <div class="col-12">
              <div class="section-heading">
                  <h3>¿Quiénes somos y qué hacemos? </h3>
              </div>
          </div>
      </div>

      <div class="row">
          <div class="col-12">
              <h6 class="sub-heading pb-5">Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</h6>

              <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
      </div>


      <div class="row">
          <div class="col-12">
              <img class="mb-70" src="/img/bg-img/about.png" alt="" />

          </div>
      </div>
  </div>
</section>
<Footer></Footer>

</template>