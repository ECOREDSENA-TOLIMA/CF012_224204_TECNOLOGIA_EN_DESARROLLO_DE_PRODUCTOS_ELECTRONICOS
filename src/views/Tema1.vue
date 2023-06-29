<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Protocolos de pruebas y mediciones
    
    .row.degrade-intro.justify-content-center.p-4.align-items-center
      .col-12.col-lg-7(data-aos="fade-right")
          p Los protocolos de pruebas y mediciones son importantes en cualquier proceso productivo, porque permiten asegurar la calidad del producto. Estos brindan una secuencia de pasos y un procedimiento a seguir en cada prueba, lo cual estandariza el proceso permitiendo medir de la misma manera todos los productos o lotes que se requiera evaluar.
      .col-12.col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema1/1.svg", alt="alt")

    .row
      .titulo-sexto.color-acento-contenido.mb-5.offset-lg-2(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 2.</b> <i>Importancia del protocolo de pruebas</i>

    .row.justify-content-center.align-items-center 
      .col-md-10.mb-5(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.pt-1.pb-3.mb-3 En sí misma, la palabra protocolo encierra una serie de métodos que deben seguirse en la prueba con una serie de pasos bien demarcados, en forma de patrones que reflejan el resultado a esperar en un producto que funciona de acuerdo a lo esperado o proyectado en  el diseño.

    p.mb-3(data-aos="fade-left") Existen varios tipos de pruebas que buscan con las variables eléctricas básicas, corriente, voltaje y resistencia, probar las características propias del aparato en búsqueda de posibles fallas o errores en la producción de este. De igual manera, también se debe tener en cuenta las pruebas que pueden realizarse sobre los aspectos mecánicos del equipo para revisar características como la flexibilidad o la resistencia mecánica de los materiales que componen la carcasa.
    p.mt-2.mb-3(data-aos="fade-left") Los principales tipos de pruebas pueden resumirse en la siguiente figura.

    .row
      .titulo-sexto.color-acento-contenido.mb-5.offset-lg-2(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 3.</b> <i>Clasificación de los tipos de pruebas</i>

    .row 
      .col-12.mt-3.mb-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema1/3.svg", alt="alt")

    p.mt-2.mb-5(data-aos="fade-left") A continuación de describen estos tipos de pruebas:

    .row.justify-content-center.align-items-center 
      .col-md-10
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Energizadas (funcionamiento)")
            .col-md-12.mb-4.mb-md-0
              p Esencialmente en esta prueba se energiza el circuito o equipo y se pone a prueba todas y cada una de sus funcionalidades durante un tiempo determinado para asegurar que funciona correctamente de acuerdo con las especificaciones para las cuales fue hecho.
          .row(numero="2" titulo="No energizadas (del V-I o aislamiento)")
            .col-md-3.col-12.mt-3.mb-5.px-4
              figure
                img(src="@/assets/curso/temas/tema1/4.jpg", alt="alt")
            .col-md-9.col-12.mb-0.mb-md-0.pt-3
              p Esta prueba consiste generalmente en inyectar al circuito o a una parte una señal senoidal, a través de una carga o resistencia que ayuda a limitar la corriente hacia el circuito, la impedancia resultante. La resistencia limitadora y la impedancia de entrada del sistema se representan en un plano cartesiano, en donde el voltaje está en el eje x y la corriente en el eje y.
              p Existen aparatos sofisticados que están diseñados exclusivamente para generar estas pruebas. La curva se conoce como firma digital y al comparar dos de ellas se puede establecer fácilmente si un circuito está operando correctamente sin energizarlo.
            p Un segundo equipo usado en este tipo de pruebas es el conocido como cama de agujas el cual funciona de manera más precisa, ya que permite medir varios puntos a la vez y generar una imagen completa de las señales de un circuito. Para este tipo de pruebas se debe contar con un circuito que funcione correctamente y nos sirva de patrón, las agujas son esencialmente conectores que llevan las señales a diferentes puntos del circuito. 
            .col-md-3.col-12.mt-3.mb-5.px-4
              figure
                img(src="@/assets/curso/temas/tema1/5.jpg", alt="alt")
            .col-md-9.col-12.mb-0.mb-md-0.pt-3
              p El <em>software</em> que los controla es muy complejo, y cada vez que se cambia de tarjeta, las agujas deben ser reacomodadas o cambiadas, y por supuesto los parámetros eléctricos las graficas y demás también. Este tipo de equipos son comunes solo en las grandes empresas ya que su costo es muy elevado y su operación requiere personal altamente calificado para interpretar las graficas obtenidas por el <em>software</em>.
              
          .row(numero="3" titulo="Resistencia mecánica de los materiales")
            .col-md-12.mb-4.mb-md-0
              p Aunque no es tan común en grandes y millonarias industrias, se prueba absolutamente todo lo que compete al producto electrónico como tal y eso incluye por supuesto su resistencia mecánica y sus características de elasticidad. Por ejemplo, en un equipo como un teléfono celular esto puede ser la diferencia entre un equipo de baja gama comparado con equipo de alta gama, resistente a golpes, lo cual se traduce en una diferencia entre calidades y precios de venta al cliente. Si un proveedor de carcazas garantiza, por ejemplo, impermeabilidad esta debe ser probada.
          .row(numero="4" titulo="Desempeño mecánico bajo condiciones adversas")
            .col-md-12.mb-4.mb-md-0   
              p Aunque puede que la resistencia mecánica de la estructura del equipo resista peso o golpes, no quiere decir que el equipo esté preparado para trabajar bajo cualquier condición que se le imponga. 
              p Las empresas productoras están en la obligación de dar las capacidades máximas de cada equipo no solo en condiciones eléctricas de corriente y voltaje si no también en el comportamiento del mismo en condiciones extremas, como calor, frio, vibración constante o ambientes explosivos, generalmente esto se evalúa en equipos de clase industrial o militar.

    p.mt-5.mb-3(data-aos="fade-left") Los protocolos de las pruebas dependen de varios factores diversos, que pueden ir desde las características propias del producto, como su función, tipo de producto, hasta las políticas propias de la empresa productora; esto también influye en el equipo de pruebas requerido. No existen protocolos de prueba con un estándar que funcione al 100 % para productos electrónicos diferentes, sin embargo, se describe a continuación un protocolo genérico que cubre los mínimos aspectos requeridos por cualquier producto electrónico bajo prueba.

    .row.justify-content-center.align-items-center.mb-4.mt-5
      .col-12.col-md-6.col-lg-5(data-aos="fade-down")
        figure
          img(src="@/assets/curso/temas/tema1/6.svg", alt="alt")
      .col-12.col-md-6.col-lg-5(data-aos="fade-down")
        P Lo primero que se debe señalar es que un protocolo es una serie de pasos, un procedimiento estándar que tiene un orden definido para realizar la tarea. Por lo tanto, el protocolo requiere que su ejecución se haga de manera estricta y contemple las posibles contingencias que se presentan en el camino, junto con los aspectos de seguridad que se deben tener en cuenta tanto para el equipo como para el trabajador ejecutor del protocolo.
        P Cada industria maneja sus propios formatos y documentación para llevar un control de la ejecución del protocolo de pruebas correspondiente, es común ver listas de chequeo donde se detalla el resultado de las respectivas pruebas o tareas a ejecutar en el protocolo. A continuación, en la figura 6 se presenta un ejemplo de una lista de chequeo genérica de un protocolo de pruebas a un producto electrónico.
    
    p.mt-5.mb-3(data-aos="fade-left") Las unidades de medida fundamentales que se deben tener en cuenta en cualquier protocolo de pruebas de cualquier equipo y en general en la industria, junto con el procedimiento correcto de medida, son las siguientes.

    .row
      .titulo-sexto.color-acento-contenido.mb-5.offset-lg-2(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 4.</b> <i>Unidades</i>

    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.p-4.pt-2
      .col-md-10.col-lg-2.col-12.mb-5
        a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
          span Resistencia
          .indicador--click(v-if="mostrarIndicador")

      .col-md-10.col-lg-2.col-12.mb-5
        a.boton.color-acento-contenido.indicador__container(@click="modal2 = true")
          span Corriente
          .indicador--click(v-if="mostrarIndicador1")

      .col-md-10.col-lg-2.col-12.mb-5
        a.boton.color-acento-contenido.indicador__container(@click="modal3 = true")
          span Voltaje
          .indicador--click(v-if="mostrarIndicador2")

      .col-md-10.col-lg-2.col-12.mb-5
        a.boton.color-acento-contenido.indicador__container(@click="modal4 = true")
          span Potencia
          .indicador--click(v-if="mostrarIndicador3")

      .col-md-10.col-lg-2.col-12.mb-5
        a.boton.color-acento-contenido.indicador__container(@click="modal5 = true")
          span Frecuencia
          .indicador--click(v-if="mostrarIndicador4")
      
      .col-md-10.col-lg-6.col-12(data-aos="fade-down")
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/8.svg', alt='')      
      
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/9.svg', alt='Texto que describa la imagen')

    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')
    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/11.svg', alt='Texto que describa la imagen')
    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/12.svg', alt='Texto que describa la imagen')
    ModalA(:abrir-modal.sync="modal5")
      .row.align-items-center
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema1/13.svg', alt='Texto que describa la imagen')
            
    p.mt-5.mb-3(data-aos="fade-left") Debido a que cada protocolo es tan específico de acuerdo con el tipo de equipo electrónico, su funcionamiento, naturaleza, destinación de uso y del diseño como tal, la interpretación de resultados dependerá de los parámetros que establecerá el equipo de diseño del equipo electrónico que conoce las capacidades y funcionalidades de este. 

    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .cajon.color-primario.pt-2.px-4.pb-2.caja_flotante_azul
          .row.justify-content-center.align-items-center
            .col.mb-3.mb-sm-0.mt-3
                p Cuando se practican las pruebas a un equipo en específico dentro del protocolo se debe contar con la información de los parámetros y rangos de las medidas que permitan determinar cuándo hay un posible defecto del equipo. Estos datos son usados como un patrón que nos demarca la calidad de cada uno .
      
    p.mt-3.mb-3(data-aos="fade-left") Ahora bien, los rangos de funcionamiento también dependen de la naturaleza del equipo y de su propio diseño. Todo equipo electrónico normalmente lleva una placa o las especificaciones impresas en su carcaza, estas cubren los aspectos mínimos, como la naturaleza de su alimentación, consumo y frecuencia de operación de la fuente si es el caso. 

    .row
      .titulo-sexto.color-acento-contenido.mb-5.offset-lg-2(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 5.</b> <i>Rangos de funcionamiento en adaptadores</i>


    .row.justify-content-center.align-items-center 
      .col-md-10.mb-5(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/14.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.pt-1.pb-3.mb-3 En elementos como las fuentes y cargadores se puede observar un claro ejemplo de ello. Por ejemplo, se puede analizar en un cargador o adaptador la entrada de voltaje entre 100 a 240 VAC y frecuencia de 50 a 60Hz con un consumo de 1,5A y una salida de 20VDC y 4,5A su potencia es de 90W. Estos rangos de funcionamiento son propios de este modelo de cargador. Si se compra otro tipo es muy probable que estos datos cambien .

    p.mb-3(data-aos="fade-left") Dentro del proceso de pruebas de los productos electrónicos es de fundamental importancia tener en cuenta las medidas mínimas de seguridad y salud en el trabajo. A continuación, en la siguiente figura se presentan aquellos elementos de protección personal y de integridad del equipo.

    .row
      .titulo-sexto.color-acento-contenido.mb-5.offset-lg-2(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 6.</b> <i>Elementos de seguridad eléctrica</i>

      .row.justify-content-center.align-items-center
        .col-md-10.col-lg-6.col-12.mt-3(data-aos="fade-down")
          ImagenInfografica.color-acento-contenido
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/15.svg', alt='')     

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
    mostrarIndicador1: true,
    modal2: false,
    mostrarIndicador2: true,
    modal3: false,
    mostrarIndicador3: true,
    modal4: false,
    mostrarIndicador4: true,
    modal5: false,
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
