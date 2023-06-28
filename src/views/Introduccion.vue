<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.degrade-intro.justify-content-center.p-4.align-items-center
      .col-12.col-lg-7(data-aos="fade-right")
          p Luego de ejecutada la producción es necesaria e inevitable la prueba de los productos, sin este último proceso, sería muy riesgoso sacar a la venta cualquier tipo de lote de producto electrónico, puesto que en caso de falla esto podría generar graves problemas, demandas, pérdida de clientes y en el peor de los casos, podría llegar incluso a poner en riesgo la integridad o la vida de las personas. 
      .col-12.col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/intro/1.svg", alt="alt")

    .row
      .titulo-sexto.color-acento-contenido.mb-5.offset-lg-2(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 1.</b> <i>Importancia de pruebas en electrónica</i>

    .row.justify-content-center.align-items-center 
      .col-md-10.mb-5(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/intro/2.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.pt-1.pb-3.mb-3 La importancia de las pruebas radica en poder identificar defectos en el producto que se pueden originar incluso desde el diseño mismo, pasando por la producción de la tarjeta de circuito impreso, siguiendo por el ensamble electrónico, terminado con el ensamble mecánico en su carcasa, lo cual se traduce en salvar a las empresas de los costos que acarrearía este escenario.

    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-12.mb-4.mb-md-0(data-aos="fade-left")
        .cajon.color-primario.pt-2.px-4.pb-2.caja_flotante_azul
          .row.justify-content-center.align-items-center
            .col-md-1.px-3.mb-3.mt-3
              img.px-md-1(src="@/assets/curso/temas/intro/3.svg")
            .col.mb-3.mb-sm-0.mt-3
                p El identificar un problema en las pruebas de un lote permite corregir en muchas ocasiones, y evitar los problemas en futuras producciones.

    
          
     
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
