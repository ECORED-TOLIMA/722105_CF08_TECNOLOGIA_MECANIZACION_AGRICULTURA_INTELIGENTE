<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Registros, eficiencia de operación y fallas

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-4.col-8.mb-4.mb-lg-0
        img.w-100(src="@/assets/curso/temas/t4/img1.svg" alt="")
      .col-lg-8
        p.mb-4 Evaluar la operación permite reconocer si las labores se realizaron con la calidad, la oportunidad y el uso de recursos previstos. Para ello se necesitan registros confiables que relacionen el trabajo ejecutado con el tiempo empleado, el consumo de insumos y las novedades presentadas.
        .cajon.color-secundario.p-4.mb-0
          p.mb-0 Los indicadores permiten comparar resultados e identificar aspectos que requieren revisión. Su interpretación debe considerar las características del lote, la máquina, el implemento y la labor. Una mayor cantidad de hectáreas por hora no representa una mejora si se obtiene con menor calidad, mayor consumo o condiciones inseguras.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Registros: concepto, tipos e importancia

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        p.mb-4 Un registro es un documento o archivo que deja constancia de una actividad y de sus resultados. En la operación de maquinaria permite conocer qué labor se realizó, dónde, cuándo, con qué equipo, por quién y bajo qué condiciones.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Esta información sirve para calcular indicadores, estimar costos, sustentar la facturación y programar el mantenimiento. También permite reconstruir lo sucedido cuando aparecen diferencias entre el trabajo previsto y el resultado obtenido.
        p.mb-0 Los registros se complementan entre sí. Los siguientes tipos reúnen información diferente que debe relacionarse mediante la identificación de la máquina, el lote y la fecha:
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t4/img2.png" alt="")

    .BGF03.px-5.p-4.mb-4
      SlyderA(tipo="b").tarjeta.bg00.p-4
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
            h4 Reporte diario de operación
            p.mb-0 Consolida la labor, el área trabajada, los tiempos y las novedades. Permite relacionar la producción con los recursos utilizados y comparar jornadas, siempre que se mantengan criterios de medición consistentes.
          .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
            img.w-100(src="@/assets/curso/temas/t4/img3.png" alt="")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
            h4 Chequeo preoperacional
            p.mb-0 Documenta las condiciones del equipo antes de iniciar el trabajo. Ayuda a reconocer anomalías y deja constancia de las verificaciones realizadas; su diligenciamiento debe acompañarse de una inspección efectiva.
          .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
            img.w-100(src="@/assets/curso/temas/t4/img4.png" alt="")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
            h4 Registro de combustible
            p.mb-0 Identifica cantidades abastecidas, fechas y equipos. Para calcular el consumo de una labor debe relacionarse con las existencias iniciales y finales o con un método de medición definido; la cantidad abastecida no equivale automáticamente a la consumida.
          .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
            img.w-100(src="@/assets/curso/temas/t4/img5.png" alt="")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
            h4 Registro de novedades y fallas
            p.mb-0 Describe los eventos, sus efectos y la duración de las interrupciones. Debe diferenciar lo observado de las posibles causas, especialmente cuando todavía no existe un diagnóstico técnico.
          .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
            img.w-100(src="@/assets/curso/temas/t4/img6.png" alt="")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
            h4 Órdenes de trabajo y archivos digitales
            p.mb-0 Documentan las condiciones del servicio y los datos generados durante la ejecución. Pueden incluir aceptación del cliente, mapas, trayectorias y registros del monitor, según los equipos y funciones disponibles.
          .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
            img.w-100(src="@/assets/curso/temas/t4/img7.png" alt="")

    .row.justify-content-center
      .col-lg-10
        .tema4-registro-cierre.p-3
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0.d-none.d-lg-block
              .tema4-registro-cierre__icono
                img.w-100(src="@/assets/curso/temas/t4/img8.svg" alt="")
            .col-md
              p.mb-0 La utilidad de estos documentos depende de su calidad. Un registro incompleto o elaborado de memoria puede producir indicadores aparentemente precisos, pero poco representativos de la operación.

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Formatos, diligenciamiento y archivos digitales de la operación

    .bloque-texto-g.tema1-bloque-empresa.p-3.p-sm-4.p-md-5.mb-4.tema4-bloque-formatos
      .bloque-texto-g__img(aria-hidden="true")
      .bloque-texto-g__texto.p-4
        p.mb-0 Un formato debe utilizar campos claros, unidades definidas y espacio suficiente para describir novedades. Su extensión debe corresponder a la información necesaria para tomar decisiones, evitando solicitar datos que después no se utilizan.

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        p.mb-4 El diligenciamiento se realiza durante la operación o tan pronto como sea posible, por la persona responsable. Las correcciones deben conservar la trazabilidad del dato original. Cuando un campo no aplica, conviene indicarlo expresamente para distinguirlo de una omisión.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Los tiempos requieren especial atención. La diferencia del horómetro puede representar horas de funcionamiento del motor, pero no necesariamente el tiempo total transcurrido en campo. Para calcular indicadores deben registrarse también los horarios y las paradas, según el alcance de la evaluación.
        p.mb-0 La siguiente tabla presenta un ejemplo que servirá de base para los cálculos posteriores. Los datos son ilustrativos y se supone que fueron verificados mediante los registros correspondientes:
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t4/img10.png" alt="")

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span Ejemplo de reporte diario de operación
        .tabla-b.tema1-tabla.mb-4
          table
            thead
              tr
                th(scope="col") Campo
                th(scope="col") Dato registrado y observación
            tbody
              tr
                td Fecha y operador.
                td 15 de septiembre — Operador B.
              tr
                td Máquina e implemento.
                td Tractor T02 de 110 hp y rastra de discos con ancho de trabajo de 3,0 m.
              tr
                td Lote y labor.
                td El Caño, lote 3 — Rastrillada.
              tr
                td Horómetro inicial y final.
                td 2.412,0 y 2.421,5 h. Diferencia: 9,5 h de funcionamiento registradas por el equipo.
              tr
                td Tiempo total de campo evaluado.
                td 9,5 h, comprobadas mediante horarios. Incluye giros y una parada de 0,5 h para limpieza del radiador.
              tr
                td Área efectivamente atendida.
                td 15,2 ha, sin contabilizar dos veces los traslapes.
              tr
                td Velocidad durante las pasadas.
                td Promedio de 7 km/h durante el trabajo, sin incluir las paradas.
              tr
                td Combustible consumido.
                td 34 galones estadounidenses, determinados mediante el método de control establecido.
              tr
                td Novedad.
                td Interrupción de 30 minutos para limpieza del radiador. Causa de la obstrucción pendiente de revisión.

    p.mb-4 Los monitores pueden generar mapas de cobertura, velocidades, dosis y eventos, según los sensores y las funciones instaladas. Sus archivos pueden requerir programas específicos o conversiones para utilizarse en otras aplicaciones.

    .row.justify-content-center.mb-4
      .col-lg-10
        .row.g-0.align-items-stretch
          .col-lg-4
            img.w-100.object-fit-cover(src="@/assets/curso/temas/t4/img11.png" alt="")
          .col-lg-8.tema4-nota.p-4
            img.tema4-icono.mb-3(src="@/assets/curso/temas/t4/img12.svg" alt="").d-none.d-lg-block
            p.mb-0 Estos datos no son infalibles. Un ancho mal configurado, un sensor sin calibrar o una interrupción del posicionamiento pueden alterar los resultados. Además, una zona marcada como cubierta no demuestra por sí sola que se haya aplicado la dosis o alcanzado la profundidad requerida. Por ello, la información digital debe contrastarse con los registros y las verificaciones de campo.

    p.mb-4 Los siguientes anexos presentan ejemplos diligenciados de los registros de operación, combustible y novedades de una jornada de trabajo agrícola. Permiten reconocer los campos necesarios y comprobar la correspondencia entre los tiempos, las actividades y los consumos registrados:

    .row.justify-content-center
      .col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
        .tarjeta--azul.p-4.mb-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t4/img13.svg" alt="")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Reporte diario de operación
                  p.mb-0 ANEXO DIDÁCTICO / RD-01 | Versión 1
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_01_Reporte_diario_de_operacion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        .tarjeta--azul.p-4.mb-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t4/img14.svg" alt="")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Registro de combustible
                  p.mb-0 ANEXO DIDÁCTICO / RC-01 | Versión 1
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_02_Registro_de_combustible.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        .tarjeta--azul.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t4/img15.svg" alt="")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Registro de novedades y paradas
                  p.mb-0 ANEXO DIDÁCTICO / RN-01 | Versión 1
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_03_Registro_de_novedades_y_paradas.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t4/img16.png" alt="")

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Eficiencia de operación: concepto, procedimientos y criterios

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        p.mb-4 La eficiencia de operación expresa cómo se aprovechan los recursos durante una labor. Uno de sus indicadores es la eficiencia de campo, que relaciona la capacidad efectiva con la capacidad teórica.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La capacidad teórica representa el área que podría atenderse por hora utilizando el ancho de trabajo y la velocidad considerados, sin descontar pérdidas por giros, traslapes o interrupciones. La capacidad efectiva relaciona el área realmente atendida con el tiempo total de campo definido para la evaluación.
        p.mb-0 Para calcular estos valores se sigue una secuencia que permite comprobar la procedencia de los datos:
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t4/img17.png" alt="")

    .tarjeta--container.row.mb-4
      .col-lg-3.tarjeta.color-primario.p-4
        .row.justify-content-center.mb-4
          .col-5
            img(src="@/assets/curso/temas/t4/img18.svg" alt="")
        h3.h5.text-center A) Definir la labor y el periodo
        p.mb-0 Identificar el lote, el conjunto utilizado y los tiempos incluidos. Separar los traslados y otras actividades cuando no formen parte del indicador.
      .col-lg-3.tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-4
          .col-5
            img(src="@/assets/curso/temas/t4/img19.svg" alt="")
        h3.h5.text-center B) Verificar ancho y velocidad
        p.mb-0 Utilizar medidas representativas del trabajo. No descontar nuevamente los traslapes si ya se está evaluando su efecto mediante la eficiencia.
      .col-lg-3.tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-4
          .col-5
            img(src="@/assets/curso/temas/t4/img20.svg" alt="")
        h3.h5.text-center C) Calcular las capacidades
        p.mb-0 Obtener la capacidad teórica con el ancho de trabajo y la velocidad, y la efectiva con el área trabajada y el tiempo de campo registrado.
      .col-lg-3.tarjeta.tema1-tarjeta-salmon.p-4
        .row.justify-content-center.mb-4
          .col-5
            img(src="@/assets/curso/temas/t4/img21.svg" alt="")
        h3.h5.text-center D) Comparar e interpretar
        p.mb-5 Calcular la eficiencia y contrastarla con antecedentes o referencias de labores semejantes. Considerar las condiciones del terreno, las maniobras y las paradas al interpretar las diferencias.

    p.mb-4 Las relaciones utilizadas, con ancho en metros y velocidad en kilómetros por hora, son:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t4/img22.svg" alt="")
      .col-lg-7
        .tarjeta.tema2-ejemplo.p-4.h-100.d-flex.align-items-center
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-seedling
              span
                strong Capacidad teórica (ha/h) = ancho de trabajo × velocidad ÷ 10.
            li
              i.fas.fa-seedling
              span
                strong Capacidad efectiva (ha/h) = área atendida ÷ tiempo total de campo.
            li.mb-0
              i.fas.fa-seedling
              span
                strong Eficiencia de campo (%) = capacidad efectiva ÷ capacidad teórica × 100.

    p.mb-4 La comparación debe considerar las condiciones de trabajo y el mismo criterio de medición del tiempo. No resulta adecuado comparar valores calculados con alcances diferentes.

    .titulo-pastilla.mb-4
      img(src="@/assets/curso/icon.svg" alt="")
      span Ejemplo resuelto: eficiencia de campo de una rastrillada
    p.mb-4 Con los datos del reporte anterior, la rastra trabaja con un ancho de 3,0 m y una velocidad de 7 km/h. La capacidad teórica es:
    .tema2-ejemplo-decision.p-4      
      .row.justify-content-center
        .col-lg-10
          .tema2-formula.p-4.mb-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 Capacidad teórica = 3,0 × 7 ÷ 10 = 2,1 ha/h
      p.mb-4 El área atendida fue de 15,2 ha durante 9,5 h de campo:
      .row.justify-content-center
        .col-lg-10
          .tema2-formula.p-4.mb-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 Capacidad efectiva = 15,2 ÷ 9,5 = 1,6 ha/h
      p.mb-4 La relación entre ambas capacidades permite obtener la eficiencia:
      .row.justify-content-center
        .col-lg-10
          .tema2-formula.p-4.mb-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 Eficiencia de campo = 1,6 ÷ 2,1 × 100 = 76,19 %
      p.mb-0 Si la referencia interna es del 80 %, existe una diferencia de 3,81 puntos porcentuales. La parada del radiador explica parte del tiempo utilizado, pero deben revisarse también los giros, los traslapes y las demás condiciones antes de atribuir toda la diferencia a ese evento.

    Separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Otros indicadores de la operación

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
        p.mb-4 La eficiencia de campo no describe por sí sola el desempeño del conjunto. También deben evaluarse el consumo, la disponibilidad, el cumplimiento del programa y la calidad obtenida.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Cada indicador necesita una definición que permita repetir el cálculo. Deben utilizarse el mismo periodo, las mismas unidades y criterios comparables al analizar distintas máquinas o jornadas.
        p.mb-0 La siguiente tabla reúne indicadores complementarios y señala las precauciones necesarias para interpretarlos:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t4/img23.png" alt="")

    

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 7.
          span Indicadores complementarios de evaluación de la operación
        .tabla-b.tema1-tabla.mb-4
          table
            thead
              tr
                th(scope="col") Indicador
                th(scope="col") Cálculo o forma de medición
                th(scope="col") Criterio de interpretación
            tbody
              tr
                td Consumo por hectárea.
                td Combustible consumido ÷ área atendida.
                td Comparar labores y condiciones semejantes. Un cambio puede relacionarse con carga, terreno, ajuste, recorridos o medición.
              tr
                td Disponibilidad mecánica.
                td Horas programadas menos horas de indisponibilidad mecánica, dividido entre horas programadas, × 100.
                td Definir qué paradas se consideran mecánicas. No confundir una máquina disponible con una máquina utilizada.
              tr
                td Cumplimiento del programa.
                td Área ejecutada y aceptada ÷ área programada × 100.
                td Utilizar el mismo periodo y comprobar que el trabajo cumple los requisitos.
              tr
                td Traslape.
                td Área contabilizada como repetición adicional ÷ área de referencia × 100.
                td Definir cómo se cuentan las áreas recorridas varias veces y cuál es el área de referencia.
              tr
                td Calidad de la labor.
                td Mediciones de profundidad, espaciamiento, dosis u otro requisito.
                td Comparar con tolerancias establecidas para la labor; el mapa de cobertura no reemplaza esta comprobación.

    p.mb-4 Con el consumo registrado en el ejemplo puede calcularse:

    .tema2-ejemplo-decision.p-4
      .row.justify-content-center
        .col-lg-10
          .tema2-formula.p-4.mb-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 Consumo por hectárea = 34 ÷ 15,2 = 2,24 gal/ha, aprox.
      p.mb-4 Si la referencia interna es de 2,1 gal/ha, conviene revisar las condiciones y los registros antes de concluir que existe una falla. Una diferencia aislada no permite determinar su causa.
      p.mb-0 Los indicadores se interpretan conjuntamente. Aumentar la velocidad puede elevar la capacidad efectiva, pero no representa una mejora si produce una profundidad inadecuada, daños o una aplicación irregular.

    Separador
    #t_4_5.titulo-segundo.color-acento-contenido
      h2 4.5 Fallas: concepto, tipos y origen

    p.mb-4 Una falla del equipo es la pérdida total o parcial de su capacidad para cumplir una función requerida. Durante la operación también pueden presentarse errores de configuración, eventos externos y resultados fuera de especificación que afectan la labor sin implicar necesariamente una avería.

    p.mb-4 Para registrar estas situaciones pueden utilizarse categorías prácticas. Las siguientes orientan la descripción, aunque un mismo evento puede involucrar más de una:

    .row.justify-content-center.mb-4
      .col-lg-10
        .tema4-fallas
          .tema4-falla.tema4-falla--verde.p-3
            .row.align-items-center
              .col-auto
                img.tema4-falla__icono(src="@/assets/curso/temas/t4/img24.svg" alt="")
              .col
                h5.h5.mb-1 Mecánicas e hidráulicas
                p.mb-0 Incluyen roturas, fugas y deterioros que afectan el funcionamiento. Una manguera dañada puede relacionarse con desgaste, roce, montaje u otras condiciones que deben investigarse.
          .tema4-falla.tema4-falla--beige.p-3
            .row.align-items-center
              .col-auto
                img.tema4-falla__icono(src="@/assets/curso/temas/t4/img25.svg" alt="")
              .col
                h5.h5.mb-1 Eléctricas y electrónicas
                p.mb-0 Comprenden problemas de alimentación, conexiones, sensores o componentes de control. La pérdida de RTK debe registrarse inicialmente como una interrupción del posicionamiento, pues también puede tener un origen externo.
          .tema4-falla.tema4-falla--verde.p-3
            .row.align-items-center
              .col-auto
                img.tema4-falla__icono(src="@/assets/curso/temas/t4/img26.svg" alt="")
              .col
                h5.h5.mb-1 De ajuste o configuración
                p.mb-0 Aparecen cuando las medidas o parámetros no corresponden al conjunto. Un implemento desnivelado o un ancho incorrecto pueden producir resultados deficientes, aunque sus componentes estén operativos.
          .tema4-falla.tema4-falla--beige.p-3
            .row.align-items-center
              .col-auto
                img.tema4-falla__icono(src="@/assets/curso/temas/t4/img27.svg" alt="")
              .col
                h5.h5.mb-1 De operación
                p.mb-0 Se relacionan con prácticas que no corresponden a las condiciones de la labor, como una velocidad inadecuada. Su identificación requiere revisar instrucciones, capacitación, carga y entorno.
          .tema4-falla.tema4-falla--verde.p-3
            .row.align-items-center
              .col-auto
                img.tema4-falla__icono(src="@/assets/curso/temas/t4/img28.svg" alt="")
              .col
                h5.h5.mb-1 Desviaciones de la labor
                p.mb-0 Son resultados como franjas sin trabajar, profundidad desigual o dosis fuera de tolerancia. Describen el efecto observado; no identifican por sí solos la causa.

    p.mb-4 El origen puede relacionarse con desgaste, mantenimiento, instalación, preparación, operación o condiciones del terreno. No debe registrarse una hipótesis como causa confirmada ni atribuir automáticamente el evento al operador.

    .row.justify-content-center
      .col-lg-10
        .tema4-nota.p-4
          p.mb-0 Una descripción útil diferencia tres aspectos: qué se observó, qué efecto produjo y qué falta verificar. Esto facilita el diagnóstico posterior y evita aplicar correcciones que no atiendan el problema.

    Separador
    #t_4_6.titulo-segundo.color-acento-contenido
      h2 4.6 Manejo, reporte y prevención de fallas
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        p El manejo inicial busca proteger a las personas, evitar daños adicionales y conservar información para evaluar el evento. La decisión de intervenir depende de la capacitación, la autorización y el procedimiento aplicable.
        p.mb-4 La siguiente secuencia organiza la actuación y el reporte sin reemplazar las instrucciones específicas del equipo:
        LineaTiempoD.color-acento-botones
          p.mb-0(numero="A" titulo="Detención segura") Suspender la labor cuando corresponda, asegurar la máquina y controlar los riesgos antes de inspeccionar. Las partes móviles y las energías acumuladas requieren medidas específicas de aislamiento.
          p.mb-0(numero="B" titulo="Descripción del evento") Registrar síntomas, mensajes, ubicación y condiciones en que apareció. Evitar repetir maniobras que puedan aumentar el daño o exponer al personal.
          p.mb-0(numero="C" titulo="Comunicación y autorización") Informar al responsable y determinar si la revisión está dentro de las competencias del operador o requiere personal técnico. No anular protecciones para continuar trabajando.
          p.mb-0(numero="D" titulo="Registro de la interrupción") Anotar máquina, implemento, horómetro, horarios, duración, acción realizada y resultado. Identificar la causa como probable o confirmada, según la evidencia disponible.
          p.mb-0(numero="E" titulo="Verificación del reinicio") Comprobar que se cumplan las condiciones de seguridad y las autorizaciones previstas. Registrar si la máquina queda operativa, con restricciones o fuera de servicio.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema4-manejo__imagen(src="@/assets/curso/temas/t4/img29.png" alt="")

    
    p.mb-4 Antes de efectuar mantenimiento o retirar una obstrucción deben aplicarse la parada segura y el control de energías peligrosas. Detener el motor no elimina necesariamente todos los movimientos o presiones acumulados.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.g-0.align-items-stretch.tema4-prevencion.mb-4
          .col-lg-4
            img.tema4-prevencion__imagen(src="@/assets/curso/temas/t4/img30.png" alt="")
          .col-lg-8
            .tema4-prevencion__contenido.p-4.h-100.d-flex.flex-column.justify-content-center
              img.tema4-prevencion__icono.mb-4(src="@/assets/curso/temas/t4/img31.svg" alt="").d-none.d-lg-block
              p.mb-0 La prevención se apoya en el alistamiento, el mantenimiento programado, la inspección del terreno y la configuración correcta. El análisis de eventos repetidos permite establecer prioridades, considerando frecuencia, duración, costo y consecuencias para la seguridad.

    .titulo-pastilla.mb-4
      img(src="@/assets/curso/icon.svg" alt="")
      span Ejemplo resuelto: análisis de eventos de un mes

    p.mb-4 Durante un mes se registraron 14 eventos con 38 horas de interrupción. El resumen permite comparar cuáles se repiten más y cuáles producen mayores tiempos de parada:
    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.align-items-stretch.justify-content-center.mb-4
          .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
            .tema2-ejemplo.p-4.h-100.d-flex.align-items-center
              ul.lista-ul--color.mb-0
                li
                  i.fas.fa-seedling
                  span
                    strong Radiador obstruido: seis eventos y nueve horas.
                li
                  i.fas.fa-seedling
                  span
                    strong Pérdida de señal RTK: cuatro eventos y seis horas.
                li
                  i.fas.fa-seedling
                  span
                    strong Rotura de mangueras hidráulicas: dos eventos y quince horas.
                li.mb-0
                  i.fas.fa-seedling
                  span
                    strong Atascamientos en suelo húmedo: dos eventos y ocho horas.
          .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
            img.tema4-eventos__imagen(src="@/assets/curso/temas/t4/img32.png" alt="")

    p.mb-4 El radiador presentó la mayor frecuencia, mientras que las mangueras acumularon el mayor tiempo de interrupción:

    .tema2-ejemplo-decision.p-4.mb-4
      .row.justify-content-center
        .col-lg-10
          .tema2-formula.p-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 15 ÷ 38 × 100 = 39,47 %

    p.mb-4 La prioridad no debe establecerse solo por el número de eventos. Conviene investigar las condiciones que originan las obstrucciones y las roturas, y ajustar las inspecciones conforme al manual y al entorno. Las medidas concretas requieren verificar las causas y evaluar también su importancia para la seguridad.

    .bloque-texto-g.tema4-bloque-evento.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(aria-hidden="true")
      .bloque-texto-g__texto.p-4
        p.mb-0 Una novedad que no se registra puede perderse entre jornadas y dificultar la identificación de un problema. El siguiente relato presenta una situación en la que las primeras señales de deterioro pasaron inadvertidas para el equipo de trabajo y muestra cómo la comunicación influye en la atención de las fallas:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        figure.mb-0
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="Video: manejo, reporte y prevención de fallas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador
    #t_4_7.titulo-segundo.color-acento-contenido
      h2 4.7 Relación entre eficiencia de operación y costos

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.tema4-costos__imagen(src="@/assets/curso/temas/t4/img34.png" alt="")
      .col-lg-9
        p.mb-4 La eficiencia influye en el costo por hectárea porque modifica el tiempo requerido para atender una superficie. Las esperas evitables, los traslapes y las interrupciones pueden aumentar las horas utilizadas y el consumo asociado.
        .tema4-costos__destacado.p-4.mb-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0.d-none.d-lg-block
              img.tema4-costos__icono(src="@/assets/curso/temas/t4/img35.svg" alt="")
            .col
              p.mb-0 Los costos incluyen conceptos de propiedad y de operación. Algunos se distribuyen según el uso anual y otros cambian con el combustible, el mantenimiento o la mano de obra. Por ello, no todos se generan de la misma manera durante cada parada.
        p.mb-0 Una estimación del costo unitario puede obtenerse relacionando el costo horario del conjunto con su capacidad efectiva:

    .tema2-ejemplo-decision.p-4.mb-4
      .row.justify-content-center
        .col-lg-10
          .tema2-formula.p-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 Costo por hectárea = costo horario del conjunto ÷ capacidad efectiva

    p.mb-4 El costo horario y la capacidad deben utilizar una base de tiempo compatible. Tampoco debe confundirse el costo estimado con la tarifa cobrada al cliente, que puede incluir otros conceptos.

    .titulo-pastilla.mb-4
      img(src="@/assets/curso/icon.svg" alt="")
      span Ejemplo resuelto: efecto de la eficiencia en el costo por hectárea

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
        .tema2-ejemplo.p-4.h-100
          p.mb-4 Se supone un costo horario de $150.000 para el conjunto tractor-rastra y una capacidad teórica de 2,1 ha/h. Para aislar el efecto de la eficiencia, el costo horario se mantiene constante en ambos escenarios.
          p.mb-4 Con una eficiencia del 70 %:
          ul.lista-ul--color.mb-4
            li
              i.fas.fa-seedling
              span
                strong Capacidad efectiva = 2,1 × 0,70 = 1,47 ha/h.
            li.mb-0
              i.fas.fa-seedling
              span
                strong Costo por hectárea = $150.000 ÷ 1,47 = $102.041, aproximadamente.
          p.mb-4 Con una eficiencia del 82 %:
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-seedling
              span
                strong Capacidad efectiva = 2,1 × 0,82 = 1,722 ha/h.
            li.mb-0
              i.fas.fa-seedling
              span
                strong Costo por hectárea = $150.000 ÷ 1,722 = $87.108, aproximadamente.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema4-costos__imagen(src="@/assets/curso/temas/t4/img36.png" alt="")

    p.mb-4 La mejora de 12 puntos porcentuales reduce el costo estimado en aproximadamente $14.933 por hectárea. Para 800 ha, el ahorro calculado sin redondear los valores intermedios es cercano a $11.946.242.

    p.mb-4 Este resultado supone condiciones comparables y la misma calidad de trabajo. Si la mejora exige inversiones o genera costos adicionales, estos deben incluirse antes de estimar el beneficio neto. La reducción del costo por hectárea no ocurre en la misma proporción porcentual que el aumento de la eficiencia.

    .titulo-pastilla.mb-4
      img(src="@/assets/curso/icon.svg" alt="")
      span Integración de la evaluación

    p.mb-4 Los registros adquieren utilidad cuando se convierten en indicadores, se analizan y permiten tomar decisiones. El siguiente ciclo relaciona estas etapas y muestra que toda acción debe verificarse mediante nuevos datos de operación:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 4.
          span Ciclo de evaluación de la operación
        figure.mb-4
          img.d-none.d-lg-block.w-100(src="@/assets/curso/temas/t4/img37.svg" alt="Figura 6 que relaciona el ciclo de evaluación de la operación mediante cinco etapas: registrar la operación, calcular indicadores, analizar resultados, definir acciones y verificar resultados.")
          img.d-block.d-lg-none.w-100(src="@/assets/curso/temas/t4/img38.svg" alt="Figura 6 que relaciona el ciclo de evaluación de la operación mediante cinco etapas: registrar la operación, calcular indicadores, analizar resultados, definir acciones y verificar resultados.")
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema1-reflexion
          .row.g-0.align-items-stretch
            .col-lg-1.tema1-reflexion__icono.p-3.py-4
              img(src="@/assets/curso/temas/t4/img39.svg" alt="")
            .col-md-10.tema1-reflexion__contenido.p-4
              h3.h5 Para reflexionar
              p El reporte de eventos menores permite reconocer recurrencias que podrían pasar inadvertidas. Antes de cerrar la evaluación, conviene preguntarse:
              p ¿Se registran todas las interrupciones y sus duraciones? ¿Las causas están verificadas o son hipótesis? ¿Los indicadores comparan labores realizadas bajo condiciones semejantes?
              p.mb-0 Los resultados de la evaluación deben traducirse en correcciones y acciones verificables.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
}
</script>
