<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de contingencias

    .row.degrade-intro.justify-content-center.p-4.align-items-center
      .col-12.col-lg-7(data-aos="fade-right")
          p Dentro de un proceso de manufactura, se debe tener en cuenta la gestión de contingencias, entendiendo la contingencia como un evento inesperado que podría generar efectos negativos en la productividad de cualquier empresa u organización.
      .col-12.col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema3/1.svg", alt="alt")

    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .cajon.color-primario.pt-2.px-4.pb-2.caja_flotante_azul
          .row.justify-content-center.align-items-center
            .col.mb-3.mb-sm-0.mt-3
                p La gestión de las contingencias hace la gran diferencia entre una empresa exitosa y una empresa que no lo es.

    P.mb-3.mt-5(data-aos="fade-left") Las contingencias pueden surgir en cualquier momento y por motivos muy variados, desde retrasos en la consecución o entrega de las materias primas necesarias para la producción, hasta problemas con el producto final en las pruebas y calibración. 
    P.mb-5(data-aos="fade-left") Escénicamente, en un producto ya terminado y bajo pruebas finales, existen básicamente dos tipos de anomalías esenciales: eléctricas o mecánicas. Las anomalías más evidentes son perceptibles a simple vista, se detectan en la primera inspección visual al producto terminado.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center.align-items-center(titulo="Anomalías mecánicas")
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema3/2.svg', alt='Texto que describa la imagen')
            figcaption  Figura 9. <i>Sistema de inspección visual que busca defectos estéticos en la carcasa</i> 
        .col-md-6.mb-4.mb-md-0
          p Las anomalías mecánicas se refieren a errores en la fabricación de la carcasa que puede presentar anomalías, fracturas, fisuras, abolladuras que, dependiendo de su gravedad, podrían llegar a afectar la calidad del producto. Por otra parte, se pueden tener anomalías mecánicas en la tarjeta de circuito impreso que pueden ser desde simple desgaste de la pintura antisolder de la tarjeta o fisuras más graves en su estructura, así como anomalías producidas por el proceso térmico, las cuales podrían producir la quemadura de ciertos puntos en la tarjeta que influirá en su desempeño electrónico modificando las propiedades de conducción del circuito. 
          p Las grandes industrias, como las de los productos de consumo electrónico, utilizan para las inspecciones mecánicas, sobre todo las que tienen que ver más con la estética del producto, sistemas de visión artificial que agilizan y automatizan todo este proceso haciéndolo más ágil y eficiente.

      .row.justify-content-center.align-items-center(titulo="Anomalías eléctricas")
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema3/3.svg', alt='Texto que describa la imagen')
            figcaption Figura 10. <i>Detección de fallas en circuitos electrónicos</i>
        .col-md-6.mb-4.mb-md-0
          p Estas son un poco más difíciles de detectar, ya que estas podrían depender de muchos factores, desde errores del diseño hasta componentes defectuosos que afecten el desempeño del resto del circuito.
          p Algunas empresas, las más grandes, tienen los tan conocidos sistemas de cama de agujas que ejecutan pruebas del tipo VI con las que generan patrones de señales que permiten hacer una búsqueda exhaustiva de la zona donde probablemente se encuentre la anomalía.

    P.mb-5(data-aos="fade-left") Luego de detectar la anomalía y dependiendo del volumen de la producción, de la gravedad de la anomalía y del protocolo establecido por la empresa, es muy posible que esta establezca una ruta de atención y reporte a dichos eventos, la cual puede tomar varios caminos de acción, tal como se presenta en la siguiente figura.

    .row
      .titulo-sexto.color-acento-contenido.mb-5.offset-lg-2.mb-5.mt-5(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 11.</b> <i>Caminos de acción</i>

    .row.justify-content-center.align-items-center
      .col-md-6.mb-5
        figure
          img(src='@/assets/curso/temas/tema3/4.svg', alt='alt')

    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .cajon.color-primario.pt-2.px-4.pb-2.caja_flotante_azul
          .row.justify-content-center.align-items-center
            .col.mb-3.mb-sm-0.mt-3
                p Los reportes se componen básicamente de la información que se completa dentro de las órdenes de trabajo que están en la documentación del correspondiente protocolo de pruebas, no existe un formato estándar, debido a que este tipo de documentación depende completamente de las políticas como tal de cada empresa.

</template>

<script>
export default {
  name: 'Tema3',
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
