<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manufactura de productos electrónicos

    .row.degrade-intro.justify-content-center.p-4.align-items-center
      .col-12.col-lg-7(data-aos="fade-right")
          p Empieza con una idea o una necesidad a ser resuelta. Esto se evidencia desde el primer radio transistorizado, en la década de los 40, hasta los últimos avances en los microchips, que nos permiten tener cada vez más aparatos, con capacidad de procesamiento, en un tamaño reducido y con altas prestaciones. Cada uno de ellos fueron terminados con las pruebas finales que determinan la calidad y eficiencia del producto para salir finalmente al mercado.
      .col-12.col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/1.svg", alt="alt")

    .row
      .titulo-sexto.color-acento-contenido.mb-5.offset-lg-2.mb-5(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 7.</b> <i>La evolución de la industria electrónica</i>

    .row.justify-content-center.align-items-center 
      .col-md-10.mb-5(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.pt-1.pb-3.mb-3 Desde la década de los 40 hasta estos días la industria electrónica ha tenido un gran avance y muchos cambios en sus procesos productivos que permiten hoy en día producir millones de unidades en un corto tiempo.
            
    .row.degrade-intro.justify-content-center.p-4.align-items-center
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/3.svg", alt="alt")
      .col-lg-6(data-aos="fade-right")
          p La trazabilidad se define como el seguimiento a un proceso desde el inicio cuando las materias primas son recibidas en la empresa, hasta cuando el producto es etiquetado y empacado para su embalaje final a las líneas de distribución. En cada paso la trazabilidad exige llevar un control preciso de los eventos que suceden, de esta manera si ocurre un incidente, o un error en la producción, o se presenta un defecto en un producto terminado, la trazabilidad permite determinar en dónde se produjo la falla en la producción. Así mismo también expone lo que se conoce como un indicador de proceso, el cual sirve para observar ciertas variaciones en los productos que no necesariamente se consideran una falla como tal. A continuación, en la figura 10 se presenta un proceso productivo electrónico genérico.
    
    .row
      .titulo-sexto.color-acento-contenido.mb-5.offset-lg-2.mb-5.mt-5(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 8.</b> <i>Fundamentos de procesos productivos electrónicos</i>

    .row 
      .col-12(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/4.svg", alt="alt")

    .row 
      .col-12.col-sm-4.mt-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/5.svg", alt="alt")
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
