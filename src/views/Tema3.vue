<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Configuración del sistema de piloto automático

    p.mb-4 El piloto automático agrícola controla la dirección del tractor para seguir trayectorias definidas mientras el operador supervisa la labor, el implemento y el entorno. Su utilización puede reducir traslapes, franjas sin trabajar y fatiga asociada a la conducción. La exactitud alcanzada depende del receptor GNSS, las correcciones disponibles, la instalación y la configuración del conjunto.

    .bloque-texto-g.tema1-bloque-empresa.p-3.p-sm-4.p-md-5.mb-0.tema3-bloque-apertura
      .bloque-texto-g__img(aria-hidden="true")
      .bloque-texto-g__texto.p-4
        p.mb-0 El desempeño del sistema requiere ingresar medidas correctas, calibrar sus componentes y comprobar el resultado en campo. La automatización de la dirección no reemplaza la atención del operador ni permite continuar cuando la visibilidad impide reconocer personas, obstáculos o condiciones peligrosas.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Piloto automático: concepto y tipos

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
        p.mb-4 Un sistema de piloto automático agrícola reúne equipos que actúan sobre la dirección para mantener la máquina próxima a una trayectoria de referencia. Utiliza la posición GNSS y, según su diseño, información de sensores de orientación, inclinación y movimiento para calcular las correcciones de dirección.
        .tarjeta.tema2-ejemplo.p-4.mb-4
          p.mb-0 Sus componentes habituales incluyen la antena y el receptor GNSS, el monitor, el controlador de guiado, los sensores y el actuador de dirección. También puede utilizar una base RTK, una red o un servicio satelital de corrección, de acuerdo con la exactitud requerida y la compatibilidad del equipo.
        p.mb-0 Los sistemas se diferencian por la forma de controlar la dirección y por su integración con la máquina. La siguiente tabla compara las alternativas más habituales e incluye el guiado del implemento como una función complementaria:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tarjeta.tema3-piloto-imagen(src="@/assets/curso/temas/t3/img2.png" alt="")

    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span Sistemas de guiado y control automático de la dirección
        .tabla-b.tema1-tabla.mb-4
          table
            thead
              tr
                th(scope="col") Sistema
                th(scope="col") Forma de actuación
                th(scope="col") Ventajas y condiciones de utilización
            tbody
              tr
                td Guiado asistido o manual.
                td El operador conduce siguiendo indicaciones de una barra de luces o pantalla.
                td Ayuda a mantener la trayectoria, pero no controla automáticamente la dirección. El resultado depende de la respuesta del operador.
              tr
                td Piloto con accionamiento eléctrico.
                td Un motor actúa sobre el volante o la columna de dirección.
                td Puede facilitar la instalación y el traslado entre máquinas compatibles. Requiere calibración y un montaje adecuado.
              tr
                td Piloto integrado.
                td Se comunica con el sistema de dirección de la máquina y actúa mediante una integración hidráulica o electrónica compatible.
                td Ofrece integración con el vehículo. Su instalación y desempeño dependen del modelo, el controlador y la configuración.
              tr
                td Guiado del implemento.
                td Utiliza información de posición y mecanismos específicos para corregir la trayectoria del implemento o compensar su desviación.
                td Complementa el guiado del tractor, especialmente cuando el implemento se desplaza lateralmente. Requiere componentes y compatibilidad adicionales.

    p.mb-0 La elección no debe basarse únicamente en considerar que un sistema hidráulico siempre será más preciso que uno eléctrico. También intervienen la calidad del posicionamiento, la respuesta de la dirección, la calibración y las condiciones de trabajo. Los fabricantes ofrecen distintas soluciones de accionamiento para responder a estas necesidades (PTx Trimble, s. f.).

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Técnicas y procedimientos de configuración

    p.mb-4 Configurar el piloto automático consiste en describir correctamente el tractor y el implemento dentro del sistema. Estas medidas permiten relacionar la posición de la antena con la trayectoria de la máquina y con la zona donde el implemento realiza efectivamente la labor.

    .tema3-configuracion.mb-4
      img.tema3-configuracion__imagen(src="@/assets/curso/temas/t3/img3.png" alt="")
      .tema3-configuracion__texto.p-4
        p.mb-0 Los datos requeridos cambian según el equipo. Pueden incluir el tipo de tractor, la distancia entre ejes, la posición y altura de la antena, el punto de enganche y las dimensiones del implemento. Las mediciones deben realizarse desde los puntos de referencia indicados por el fabricante, respetando las unidades y los signos utilizados para los desplazamientos.

    p.mb-4 La configuración puede organizarse en los siguientes pasos. La secuencia es orientativa y debe adaptarse al manual del sistema instalado:

    .row.align-items-start.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1
        LineaTiempoD.color-acento-botones
          p.mb-0(numero="A" titulo="Verificación del conjunto") Comprobar la compatibilidad del tractor, el monitor, el receptor y el actuador. Revisar el montaje, las conexiones y el estado mecánico de la dirección. No debe intentarse compensar una falla mecánica mediante ajustes del piloto.
          p.mb-0(numero="B" titulo="Configuración del tractor") Seleccionar el perfil correspondiente e ingresar las medidas solicitadas. Verificar especialmente la altura de la antena y sus desplazamientos longitudinal y lateral. Un error en estos valores puede afectar la compensación de inclinación y la posición calculada del vehículo.
          p.mb-0(numero="C" titulo="Configuración del implemento") Registrar el tipo de acople, el ancho efectivo de trabajo, las distancias al punto de referencia y el desplazamiento lateral. Diferenciar el ancho físico del equipo, el ancho de aplicación y la separación entre líneas guía, cuando el sistema disponga de campos independientes.
          p.mb-0(numero="D" titulo="Calibración del guiado") Ejecutar las rutinas de sensores y dirección en el lugar y las condiciones indicadas por el fabricante. Algunas requieren desplazamientos o giros, por lo que deben realizarse con espacio suficiente y sin personas u obstáculos en la zona de maniobra.
          p.mb-0(numero="E" titulo="Prueba y validación") Comprobar el seguimiento de una línea y la separación real entre pasadas. Revisar el resultado sobre el terreno y en el implemento, además de observar la pantalla. Guardar el perfil validado e identificarlo con un nombre que permita reconocer el conjunto utilizado.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100(src="@/assets/curso/temas/t3/img4.png" alt="")

    p.mb-4 La calibración ajusta el modelo del sistema al comportamiento real del vehículo. Puede comprender la compensación de inclinación, la respuesta de la dirección y la sensibilidad de seguimiento. Una respuesta excesiva puede producir oscilaciones; una respuesta insuficiente puede dificultar el retorno a la trayectoria. Los parámetros y el orden de ajuste dependen del sistema, por lo que no deben aplicarse valores universales.

    p.mb-4 La figura 3 representa la revisión de la configuración desde el monitor, con el tractor estacionado. Esta comprobación permite confirmar el perfil seleccionado antes de iniciar las pruebas de guiado:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 3.
      span Revisión de la configuración del sistema de guiado
    .row.justify-content-center.mb-5
      .col-lg-10
        figure.mb-0
          img.w-100(src="@/assets/curso/temas/t3/img-1.png" alt="Operador sentado en un tractor estacionado mientras revisa en el monitor la configuración del sistema de guiado.")

    .titulo-pastilla.mb-4
      img(src="@/assets/curso/icon.svg" alt="")
      span Ejemplo resuelto: efecto de un error en el ancho configurado

    p.mb-4 La separación entre líneas guía debe corresponder al ancho efectivo de trabajo previsto. El siguiente ejemplo muestra cómo una diferencia pequeña puede acumular franjas sin sembrar a lo largo de varias pasadas:

    .tema2-ejemplo-decision.p-4
      p.mb-4 Una sembradora tiene un ancho efectivo de 9,0 m, pero la separación entre líneas se configura en 9,2 m. Suponiendo pasadas rectas, paralelas y sin otras desviaciones, queda una franja de 0,2 m entre pasadas consecutivas.
      .row.justify-content-center
        .col-lg-10
          .tema2-formula.p-4.mb-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 Ancho sin sembrar entre pasadas = 9,2 − 9,0 = 0,2 m
      p.mb-4 Si se realizan 100 pasadas de 1.000 m de longitud, existen 99 espacios interiores entre ellas:
      .row.justify-content-center
        .col-lg-10
          .tema2-formula.p-4.mb-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-4 Área sin sembrar = 99 × 0,2 × 1.000 = 19.800 m²
              p.tema2-calculo__operacion.mb-0 Área sin sembrar en hectáreas = 19.800 ÷ 10.000 = 1,98 ha
      p.mb-0 El cálculo considera únicamente las franjas interiores y supone que se encuentran dentro del lote. Si la separación configurada fuera menor que el ancho efectivo, se generarían traslapes. Por eso, la configuración debe comprobarse mediante pasadas de prueba y mediciones en campo.

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Líneas guía, criterios y técnicas de operación

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        p.mb-4 Las líneas guía son referencias geométricas que el sistema utiliza para orientar las pasadas. Pueden crearse a partir de puntos, rumbos, recorridos grabados o características del lote. Su elección debe considerar la forma del terreno, la labor, las restricciones de circulación y la capacidad de maniobra del conjunto.
        .tema2-ejemplo.p-4
          p.mb-0 Los nombres y las funciones disponibles varían entre fabricantes. Los siguientes ejemplos muestran cómo se organizan las trayectorias rectas, curvas y circulares, así como el trabajo en cabeceras, según las características del entorno agrícola:
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100(src="@/assets/curso/temas/t3/img5.png" alt="")

    .row.justify-content-center.align-items-center
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-4.d-none.d-md-block
          template(v-slot:imagen)
            figure.mb-0
              img.w-100(src="@/assets/curso/temas/t3/img6.svg" alt="")
          .tarjeta.color-secundario.p-3(x="11%" y="10%" numero="+")
            h3.h5.mb-2 Línea recta A-B
            p.mb-0 Permite realizar pasadas paralelas en lotes regulares a partir de dos puntos. Su selección requiere verificar que la dirección definida sea adecuada para la labor y los límites del terreno.
          .tarjeta.color-secundario.p-3(x="89%" y="10%" numero="+")
            h3.h5.mb-2 A más rumbo
            p.mb-0 Genera pasadas desde un punto y una dirección conocida. Es necesario comprobar la convención angular y la compatibilidad cuando se busca reproducir líneas de otro sistema.
          .tarjeta.color-secundario.p-3(x="11%" y="39%" numero="+")
            h3.h5.mb-2 Curva idéntica
            p.mb-0 Repite una trayectoria curva de referencia. Conviene comprobar que las curvas resultantes puedan recorrerse con el tractor y el implemento sin superar su capacidad de maniobra.
          .tarjeta.color-secundario.p-3(x="89%" y="39%" numero="+")
            h3.h5.mb-2 Curva adaptativa
            p.mb-0 Genera referencias a partir de recorridos previos en terrenos irregulares. Requiere supervisar los cambios de forma para evitar que una desviación no deseada se reproduzca en las siguientes pasadas.
          .tarjeta.color-secundario.p-3(x="11%" y="67%" numero="+")
            h3.h5.mb-2 Pivote o círculo
            p.mb-0 Organiza recorridos circulares, habituales en lotes con riego por pivote. Deben verificarse el centro, el radio y la compatibilidad de las trayectorias con la labor.
          .tarjeta.color-secundario.p-3(x="89%" y="67%" numero="+")
            h3.h5.mb-2 Cabecera
            p.mb-0 Permite organizar el trabajo próximo al contorno y disponer de espacio para maniobras. Su configuración no implica que el sistema tenga habilitado el giro automático.

    figure.mb-4.d-md-none
      img.w-100(src="@/assets/curso/temas/t3/img6_1.svg" alt="")
    ul.visually-hidden.d-md-none
      li
        strong Línea recta A-B. 
        | Permite realizar pasadas paralelas en lotes regulares a partir de dos puntos. Su selección requiere verificar que la dirección definida sea adecuada para la labor y los límites del terreno.
      li
        strong A más rumbo. 
        | Genera pasadas desde un punto y una dirección conocida. Es necesario comprobar la convención angular y la compatibilidad cuando se busca reproducir líneas de otro sistema.
      li
        strong Curva idéntica. 
        | Repite una trayectoria curva de referencia. Conviene comprobar que las curvas resultantes puedan recorrerse con el tractor y el implemento sin superar su capacidad de maniobra.
      li
        strong Curva adaptativa. 
        | Genera referencias a partir de recorridos previos en terrenos irregulares. Requiere supervisar los cambios de forma para evitar que una desviación no deseada se reproduzca en las siguientes pasadas.
      li
        strong Pivote o círculo. 
        | Organiza recorridos circulares, habituales en lotes con riego por pivote. Deben verificarse el centro, el radio y la compatibilidad de las trayectorias con la labor.
      li
        strong Cabecera. 
        | Permite organizar el trabajo próximo al contorno y disponer de espacio para maniobras. Su configuración no implica que el sistema tenga habilitado el giro automático.

    p.mb-4 Al intercambiar líneas entre equipos se debe comprobar algo más que el nombre del patrón. Los métodos de cálculo pueden variar, por lo que un mismo punto y rumbo no siempre reproducen la trayectoria esperada en otro sistema.

    .titulo-pastilla.mb-4
      img(src="@/assets/curso/icon.svg" alt="")
      span Criterios para iniciar y mantener el guiado

    p.mb-4 La selección de una línea debe acompañarse de verificaciones durante la operación. Los siguientes criterios permiten relacionar la calidad del posicionamiento con las condiciones reales de trabajo:

    SlyderF.mb-4(columnas="col-md-6 col-xl-4")
      .tarjeta.BGTARG.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/temas/t3/img7.svg" alt="")
        h5.text-center Calidad de la posición
        p.mb-0.text-center Comprobar el estado de la solución, las correcciones y las alertas. En RTK, el estado fijo es una condición importante para alcanzar el desempeño esperado, pero no demuestra por sí solo que toda la configuración sea correcta.
      .tarjeta.BGTARG.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/temas/t3/img8.svg" alt="")
        h5.text-center Aproximación a la línea
        p.mb-0.text-center Activar el guiado dentro de las condiciones de alineación, distancia y velocidad admitidas por el sistema. Una incorporación inadecuada puede provocar correcciones bruscas o impedir la activación.
      .tarjeta.BGTARG.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/temas/t3/img9.svg" alt="")
        h5.text-center Velocidad y seguimiento
        p.mb-0.text-center Ajustar la velocidad a la labor, al terreno y al conjunto. Supervisar la trayectoria efectiva del implemento, pues el tractor puede seguir la línea mientras el equipo presenta desplazamientos laterales.
      .tarjeta.BGTARG.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/temas/t3/img10.svg" alt="")
        h5.text-center Cabeceras y obstáculos
        p.mb-0.text-center Asumir el control de las maniobras cuando no exista una función automática habilitada y validada. La dirección automática no debe suponerse capaz de detectar personas, máquinas u obstáculos.
      .tarjeta.BGTARG.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/temas/t3/img11.svg" alt="")
        h5.text-center Pérdida de señal o correcciones
        p.mb-0.text-center Revisar las alertas y aplicar el procedimiento previsto. Si ya no se alcanza la exactitud requerida, tomar el control o detener la labor de forma segura y verificar la posición antes de reanudar.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema2-ejemplo.p-4
          p.mb-0 El operador debe permanecer atento y preparado para intervenir. Si la visibilidad impide identificar peligros, debe suspenderse la operación. Además, el guiado automático debe desactivarse y quedar inhabilitado antes de ingresar a vías públicas, conforme a las instrucciones del fabricante.

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2
        | 3.4 
        em Firmware
        |  y 
        em software
        |  del sistema de guiado

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t3/img12.png" alt="")
      .col-lg-8
        p.mb-4 El #[i firmware] es un tipo de #[i software] integrado en los componentes electrónicos que controla funciones internas del receptor, el monitor o el controlador de dirección. En el uso cotidiano, suele distinguirse del #[i software] de aplicación, que permite configurar equipos, visualizar el guiado y gestionar las labores.
        .tema1-apertura__destacado.p-4.mb-4
          p.mb-0 También existen aplicaciones de escritorio y servicios en la nube para organizar mapas, límites, líneas guía y registros. La compatibilidad entre estas herramientas y los componentes instalados debe verificarse antes de actualizar o transferir información.
        p.mb-0 Las actualizaciones pueden corregir errores, incorporar funciones o mantener la compatibilidad con determinados servicios. Sin embargo, instalar una versión nueva no sustituye la revisión de sus requisitos ni garantiza que se conserven todos los ajustes anteriores.

    p.mb-4 La gestión del sistema de guiado debe considerar las indicaciones del fabricante y los cambios realizados en los equipos, las configuraciones o los servicios utilizados. Para organizar estas tareas, se proponen las siguientes acciones:

    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Revisión de versiones")
            .col-12
              p.mb-0 Identificar las versiones de #[i firmware] y #[i software] instaladas en el monitor, el receptor y el controlador de guiado. Consultar las notas de publicación del fabricante para conocer las correcciones, las funciones incorporadas y los requisitos de compatibilidad. Antes de programar una actualización, comprobar si exige versiones intermedias, ajustes adicionales o intervención del servicio técnico, y prever el tiempo necesario para realizarla y verificar su resultado.
          .row(titulo="Respaldo de información")
            .col-12
              p.mb-0 Guardar una copia antes de actualizar el sistema y después de realizar cambios importantes en la configuración. Incluir los perfiles de tractor e implemento, los límites de los lotes, las líneas guía y los registros que el equipo permita exportar. Identificar cada copia con la fecha, el equipo y su contenido, almacenarla fuera del monitor y comprobar que los archivos se hayan transferido correctamente.
          .row(titulo="Actualización controlada")
            .col-12
              p.mb-0 Utilizar archivos y procedimientos autorizados para el modelo y la versión del equipo instalado. Realizar el proceso con la máquina estacionada de forma segura y mantener las condiciones de alimentación eléctrica indicadas por el fabricante. Respetar los tiempos de instalación y los reinicios solicitados, sin desconectar componentes ni interrumpir el proceso. Si ocurre una falla, registrar el mensaje mostrado y seguir el procedimiento de recuperación o solicitar asistencia técnica.
          .row(titulo="Validación posterior")
            .col-12
              p.mb-0 Comprobar que la actualización haya finalizado correctamente y que los perfiles, las medidas del conjunto, los servicios de corrección y las funciones necesarias permanezcan disponibles y correctamente seleccionados. Revisar las alertas y efectuar las comprobaciones o recalibraciones indicadas por el fabricante. Antes de retomar la labor, realizar una prueba en condiciones seguras para verificar el seguimiento de la trayectoria y la separación entre pasadas, y registrar los cambios efectuados.

    p.mb-4 Los respaldos deben almacenarse fuera del monitor y comprobarse mediante las opciones de consulta o restauración disponibles. La sincronización no debe asumirse como una copia completa sin verificar qué datos incluye. Las instrucciones de actualización y transferencia varían entre sistemas y versiones.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema1-reflexion
          .row.g-0.align-items-stretch
            .col-lg-1.tema1-reflexion__icono.p-3.py-4
              img(src="@/assets/curso/temas/t3/img13.svg" alt="")
            .col-md-10.tema1-reflexion__contenido.p-4
              h3.h5 Para reflexionar
              p Una configuración guardada no garantiza que siga siendo válida después de cambiar el implemento, mover la antena o actualizar el sistema. Antes de iniciar una nueva labor, conviene considerar estas preguntas:
              p ¿Qué datos deben revisarse cuando se cambia de implemento? ¿Cómo se comprueba la separación real entre pasadas? ¿Qué procedimiento debe seguir el operador si se pierden las correcciones durante el trabajo?
              p.mb-0 La configuración y la supervisión del guiado deben acompañarse de registros que permitan evaluar los resultados.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
