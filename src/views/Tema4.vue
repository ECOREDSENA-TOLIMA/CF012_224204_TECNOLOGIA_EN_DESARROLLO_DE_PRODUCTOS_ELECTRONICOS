<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Productos conformes y no conformes

    .row.degrade-intro.justify-content-center.p-4.align-items-center
      .col-12.col-lg-6.offset-lg-1(data-aos="fade-right")
          p El objetivo principal de cualquier compañía es cumplir con las expectativas de sus clientes, y para lograr ese objetivo, es necesario que los productos o servicios ofertados desempeñen al cien por ciento las funciones para las cuales fueron diseñadas, así como brindar condiciones de seguridad y calidad de acuerdo con el tipo de producto y las reglamentaciones a las cuales se encuentre sujeto; es decir, que este producto debe garantizar en ciertos casos estándares tanto nacionales como internacionales.
      .col-12.col-lg-4.offset-lg-1(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema4/1.svg", alt="alt")

    p.mb-5.mt-5(data-aos="fade-left") Conforme w, los productos electrónicos de pueden clasificar de acuerdo con sus capacidades y tipo de servicio prestado. Existen tres clasificaciones esenciales, las cuales son:

    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Clase 1: Productos electrónicos en general" :icono="require('@/assets/curso/temas/tema4/2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0.offset-md-1
            .titulo-sexto.color-acento-contenido.mb-5.mb-5.mt-5
              p.titulo.pb-0.mb-0 <b>Figura 12.</b> <i>Tecnología de consumo: productos de audio, video y electrodomésticos</i>
            p La primera clase se refiere a un productor electrónico de consumo general como lo son los productos de audio y video. Los celulares y pequeños electrodomésticos son productos que no tienen exigencias muy altas de calidad. Si su funcionamiento falla no ponen en riesgo la vida de una persona ni la productividad de una compañía.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/5.svg', alt='alt')
      .py-4.py-md-5(titulo="Clase 2: Productos electrónicos de servicio especializado" :icono="require('@/assets/curso/temas/tema4/3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0.offset-md-1
            .titulo-sexto.color-acento-contenido.mb-5.mb-5.mt-5
              p.titulo.pb-0.mb-0 <b>Figura 13.</b> <i>Equipos de uso crítico: la importancia de la calidad y la seguridad</i>
            p La segunda clase se refiere a productos cuyo funcionamiento está diseñado para tareas especializadas, su diseño debe garantizar un funcionamiento continuo y una falla o anomalía puede causar pérdidas económicas, tal como el controlador de una máquina industrial.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/6.svg', alt='alt')
      .py-4.py-md-5(titulo="Clase 3: Productos electrónicos de alto rendimiento y confiabilidad" :icono="require('@/assets/curso/temas/tema4/4.svg')")
        .row
          .col-md-6.mb-4.mb-md-0.offset-md-1
            .titulo-sexto.color-acento-contenido.mb-5.mb-5.mt-5
              p.titulo.pb-0.mb-0 <b>Figura 14.</b> <i> Equipos de uso crítico: la importancia de la calidad y la seguridad</i>
            p La tercera clase se refiere a equipos de uso crítico, generalmente médicos, militares o de aviación de los que su mal funcionamiento puede poner en riesgo vidas u operaciones críticas que pongan en riesgo la salud o bienestar de las personas.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/7.svg', alt='alt')

    p(data-aos="fade-left") Codificar y marcar cada producto permite a las empresas llevar con mejor precisión la trazabilidad de todo el proceso de producción. Hoy en día existen dos sistemas básicos para codificar los productos, uno es el código de barras y el otro es el código QR.

    .row.justify-content-center.align-items-center.mt-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema4/8.svg', alt='Texto que describa la imagen')
          h3 El código de barras CODE39 en productos electrónicos
          p.text-small De los 5 tipos de códigos de barras existentes el CODE39 es el que generalmente se aplica a los productos electrónicos, porque permite representar valores numéricos, alfabéticos y símbolos, permitiendo codificar hasta 43 caracteres.
          br

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema4/9.svg', alt='Texto que describa la imagen')
          h3 Ventajas del código QR en la identificación de productos electrónicos
          p.text-small El código QR es un código de barras bidimensional, que permite acceder mucha más información que el común código de barras, generalmente al ser leído por un dispositivo tipo teléfono inteligente llevan a una URL guardada que brinda mucha información acerca del producto.


    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-10.mb-4.mb-md-0.mt-5(data-aos="fade-left")
        .cajon.color-primario.pt-2.px-4.pb-2.caja_flotante_azul
          .row.justify-content-center.align-items-center
            .col.mb-3.mb-sm-0.mt-3
                p Sin importar la codificación o serial que se ponga en el producto electrónico, este debe garantizar como mínimo que la información que guarde de cuenta de lote, fecha, tipo de producto, etc .

    p.mt-5(data-aos="fade-left") Finalmente, todo producto electrónico debe llevar una etiqueta que lo caracterice, donde generalmente se pone la codificación, la cual tiene una segunda función y es dar un elemento de control a la empresa productora, debido a que normalmente estas etiquetas tienen unas características físicas muy especiales que permiten notar si fueron manipuladas por los usuarios. Es decir, que, si un usuario intenta manipular o modificar el equipo y remueve la etiqueta, esta se destruye o se deteriora dando un indicador para los centros de servicio de esta situación, lo que desemboca generalmente en una pérdida de la garantía del equipo.

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
