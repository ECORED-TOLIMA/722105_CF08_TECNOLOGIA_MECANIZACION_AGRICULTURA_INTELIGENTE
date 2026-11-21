<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Corrección de fallas, informe y mejoramiento continuo

    .row.align-items-stretch
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4 El desempeño de la maquinaria agrícola depende tanto de su funcionamiento como de la capacidad para reconocer problemas, corregirlos y aprender de los resultados. Una falla atendida oportunamente puede evitar daños mayores, mientras que el análisis de los registros permite identificar cambios que favorecen la productividad, la calidad de las labores y el uso responsable de los recursos.
        .tema2-ejemplo.p-4
          p.mb-0 La corrección de fallas, la elaboración de informes y el mejoramiento continuo son actividades relacionadas. Su aplicación requiere decisiones sustentadas en datos, responsabilidades definidas y comprobaciones que permitan establecer si las intervenciones resolvieron el problema y si sus resultados se mantienen durante la operación.
      .col-lg-4
        img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t5/img1.svg" alt="")

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Corrección de fallas: concepto, tipos e importancia

    .row.align-items-stretch.mb-4
      .col-lg-3.mb-4.mb-lg-0
        img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t5/img2.png" alt="")
      .col-lg-9
        .row.align-items-center.mb-4
          .col-md-auto.mb-4.mb-md-0
            img.tema5-icono(src="@/assets/curso/temas/t5/img3.svg" alt="")
          .col
            p.mb-0 La corrección de fallas comprende las acciones realizadas para restablecer el funcionamiento de una máquina o recuperar la calidad de una labor después de detectar un problema. Puede involucrar ajustes, reparaciones, cambios en la operación o intervenciones sobre el trabajo ejecutado. Su importancia radica en limitar las consecuencias de la falla, reducir las interrupciones y proteger a las personas, los equipos y el cultivo.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La intervención debe corresponder a la naturaleza del problema y a las competencias del personal. Que una corrección parezca sencilla no significa que pueda realizarse con la máquina funcionando o sin autorización. Antes de intervenir, es necesario asegurar el equipo y seguir el procedimiento establecido para controlar sus fuentes de energía.
        p.mb-0 Para reconocer las alternativas de intervención, la siguiente clasificación relaciona el tipo de corrección con su aplicación y las condiciones para realizarla:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 8.
          span Alternativas de corrección de fallas en la operación

    
        .tabla-a.color-acento-contenido.tema2-tabla.mb-4
          table
            thead
              tr
                th(scope="col") Tipo de corrección
                th(scope="col") Aplicación y ejemplo
                th(scope="col") Condición para realizarla
            tbody
              tr
                td Inmediata en campo.
                td Restablecer una función mediante una intervención permitida, como reemplazar un pasador especificado por el fabricante.
                td Contar con autorización, competencia, repuesto adecuado y condiciones seguras. Si estas condiciones no se cumplen, retirar el equipo de servicio.
              tr
                td De ajuste o configuración.
                td Corregir parámetros o posiciones, como nivelar un implemento o ajustar la dosificación.
                td Identificar el parámetro afectado, seguir el manual y comprobar el resultado mediante mediciones o una prueba.
              tr
                td De operación.
                td Modificar la forma de trabajar, como ajustar la velocidad o cambiar el recorrido.
                td Confirmar que el cambio sea compatible con la máquina, el implemento y los requisitos de calidad de la labor.
              tr
                td De reparación.
                td Recuperar componentes dañados, como una bomba o un conjunto de dirección.
                td Solicitar personal técnico competente y verificar el funcionamiento antes de autorizar el retorno al trabajo.
              tr
                td De la labor.
                td Atender un resultado no conforme, como una franja sin sembrar.
                td Evaluar el área afectada y la conveniencia agronómica de repetir o complementar la labor.

    p.mb-0 La corrección del equipo y la recuperación de la labor deben evaluarse por separado. Reparar una sembradora no resuelve automáticamente las franjas que quedaron sin semilla; estas requieren una revisión adicional para decidir cómo atenderlas.

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Características, tratamientos y ajustes

    p.mb-4 Una corrección adecuada debe resolver el problema sin introducir nuevos riesgos ni afectar otras funciones de la máquina. Para orientar la intervención, conviene considerar las siguientes características:

    .row.align-items-stretch.mb-4
      .col-lg-8.mb-4.mb-lg-0
        .tema2-ejemplo.p-4.h-100.d-flex.align-items-center
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-seedling
              span
                strong Oportunidad
                br
                | Atender la falla antes de que se agrave, sin improvisar ni omitir las comprobaciones necesarias.
            li
              i.fas.fa-seedling
              span
                strong Seguridad
                br
                | Detener y asegurar el equipo según el procedimiento aplicable, controlar las energías acumuladas y evitar movimientos inesperados.
            li
              i.fas.fa-seedling
              span
                strong Sustento técnico
                br
                | Seleccionar el tratamiento según la causa identificada y las indicaciones del fabricante.
            li
              i.fas.fa-seedling
              span
                strong Verificación
                br
                | Medir nuevamente el parámetro afectado y comprobar el funcionamiento antes de retomar la labor.
            li.mb-0
              i.fas.fa-seedling
              span
                strong Documentación
                br
                | Registrar el problema, la intervención, el responsable y el resultado obtenido.
      .col-lg-4
        img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t5/img4.png" alt="")

    p.mb-4 La revisión posterior a una corrección permite comprobar el estado del implemento antes de realizar una prueba de funcionamiento. Con el equipo detenido y asegurado, el personal verifica las condiciones del conjunto y registra los resultados para decidir si puede retomar la labor, tal como se presenta a continuación:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 5.
          span Verificación del implemento después de una corrección
        figure.mb-4
          img.d-none.d-lg-block.w-100(src="@/assets/curso/temas/t5/img5.png" alt="Figura 5 que presenta la revisión de una sembradora con el tractor detenido y las ruedas calzadas. Una persona comprueba el implemento mientras otra registra las observaciones.")
          img.d-block.d-lg-none.w-100(src="@/assets/curso/temas/t5/img5_1.png" alt="Figura 5 que presenta la revisión de una sembradora con el tractor detenido y las ruedas calzadas. Una persona comprueba el implemento mientras otra registra las observaciones.")

    .row.align-items-stretch.mb-4
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4 El tratamiento depende de la causa identificada. El desgaste puede exigir reemplazar componentes; una configuración incorrecta, revisar medidas o parámetros; y una condición inadecuada del terreno, cambiar el momento de ejecución de la labor. La capacitación resulta pertinente cuando se demuestra una necesidad de conocimiento o habilidad, pero no sustituye la reparación de un equipo defectuoso.
        .tema2-ejemplo.p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              img.tema5-icono(src="@/assets/curso/temas/t5/img6.svg" alt="")
            .col
              p.mb-0 Después de aplicar un ajuste, debe medirse nuevamente el parámetro afectado. La comprobación puede incluir profundidad, dosificación, uniformidad, temperatura o desviación de trayectoria, según el problema. Conviene modificar un parámetro a la vez cuando el procedimiento lo permita, para reconocer el efecto de cada cambio.
      .col-lg-4
        img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t5/img7.png" alt="")

    .titulo-pastilla.mb-4
      img(src="@/assets/curso/icon.svg" alt="")
      span Ejemplo resuelto: corrección de una dosificación insuficiente

    p.mb-4 Durante una siembra de maíz se obtiene un promedio de 5,2 semillas por metro, frente a una meta de 6,5. El registro muestra una velocidad de 9 km/h. Para este ejemplo, el manual del dosificador y las condiciones de trabajo establecen un intervalo de 6 a 7 km/h.

    p.mb-4 Se revisan el dosificador, la alimentación de semillas y la configuración, y se reduce la velocidad a 6,5 km/h. Después se repite el muestreo en varios tramos representativos. El promedio obtenido es de 6,4 semillas por metro.

    p.mb-4 La diferencia respecto a la meta se calcula así:

    .tema2-ejemplo-decision.p-4.mb-4
      .row.justify-content-center
        .col-lg-10
          .tema2-formula.p-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 Diferencia porcentual = |6,4 − 6,5| / 6,5 × 100 = 1,54 %

    .row.align-items-center
      .col-md-auto.mb-4.mb-md-0
        img.tema5-icono(src="@/assets/curso/temas/t5/Group 1196868.svg" alt="")
      .col
        p.mb-0 Si el criterio definido para esta práctica admite una desviación de hasta el 3 %, el promedio cumple ese criterio. Sin embargo, también debe revisarse la distribución de las semillas: un promedio aceptable puede ocultar espacios vacíos o acumulaciones. Los resultados sugieren que la velocidad influyó en el problema, pero no permiten atribuirle toda la causa sin revisar las demás condiciones.

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Medidas correctivas: tipos, criterios de acción e implementación

    p.mb-4 Las medidas o acciones correctivas buscan eliminar las causas de un problema para evitar su repetición. Se diferencian de la corrección, que atiende la situación detectada. Limpiar un radiador obstruido corrige su condición inmediata; revisar y modificar un procedimiento de inspección insuficiente puede constituir una acción correctiva cuando se demuestra que esa deficiencia favoreció la repetición del problema. Esta distinción se utiliza en la gestión de sistemas y en el tratamiento de no conformidades.

    .tema5-acciones.mb-4
      img.tema5-acciones__imagen(src="@/assets/curso/temas/t5/img8.png" alt="")
      .tema5-acciones__contenido.p-4
        p.mb-0 Las acciones pueden ser técnicas, de procedimiento, de capacitación o de organización. Su selección requiere analizar evidencias y priorizar la gravedad, el riesgo, la recurrencia y las consecuencias sobre la labor. Un evento poco frecuente puede exigir atención prioritaria si compromete la seguridad o puede producir un daño importante.

    p.mb-4 El siguiente plan ilustra cómo relacionar una causa identificada con una acción, un responsable y una comprobación de su eficacia:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 9.
          span Ejemplo de plan de acciones correctivas diligenciado
        .tabla-a.color-acento-contenido.tema2-tabla.mb-4
          table
            thead
              tr
                th(scope="col") Problema y causa identificada en el ejemplo
                th(scope="col") Acción correctiva
                th(scope="col") Responsable y plazo
                th(scope="col") Evidencia para evaluar la eficacia
            tbody
              tr
                td Obstrucciones repetidas del radiador. La inspección no considera la acumulación de residuos propia del lote.
                td Ajustar el procedimiento de inspección y limpieza según las condiciones de trabajo y el manual.
                td Coordinador de maquinaria; antes de la siguiente jornada.
                td Registros de las diez jornadas siguientes y comparación de las paradas por obstrucción.
              tr
                td Interrupciones de correcciones RTK. La revisión técnica identifica deterioro en una conexión del enlace.
                td Sustituir la conexión y añadir su revisión al procedimiento de inspección.
                td Técnico autorizado; antes de reiniciar las labores que requieren esa exactitud.
                td Prueba de funcionamiento y registro de interrupciones durante las siguientes labores.
              tr
                td Configuraciones incorrectas de siembra. Los perfiles no se identifican ni verifican al cambiar de implemento.
                td Identificar los perfiles y establecer su verificación antes de iniciar cada combinación de trabajo.
                td Coordinador y operador; antes del próximo cambio de implemento.
                td Perfiles comprobados y muestreos de dosificación y distribución dentro de los criterios definidos.
              tr
                td Atascamientos recurrentes. La programación omite revisar la transitabilidad del suelo.
                td Incorporar una evaluación previa del terreno y criterios para aplazar o modificar la labor.
                td Responsable de programación; antes de la siguiente intervención.
                td Evaluaciones registradas y seguimiento de atascamientos en condiciones comparables.

    p.mb-0 La implementación no termina al ejecutar la actividad. Debe comprobarse si la acción evitó la repetición del problema o redujo sus consecuencias según la meta establecida. Si no fue eficaz, corresponde revisar el análisis de causas y ajustar el plan.

    Separador
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4 Informe de operación: concepto, tipos, estructura y elaboración

    .row.align-items-stretch.mb-4
      .col-lg-9.mb-4.mb-lg-0
        p.mb-4 El informe de operación presenta los resultados de las labores mecanizadas durante un periodo, una intervención o una temporada. Integra los registros, explica las desviaciones y comunica las decisiones necesarias. Mientras el registro conserva datos de un evento o una jornada, el informe los organiza e interpreta para apoyar la gestión.
        .tema5-informe__destacado.p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              img.tema5-icono(src="@/assets/curso/temas/t5/img9.svg" alt="")
            .col
              p.mb-0 Su extensión depende de la finalidad. Un informe de turno puede concentrarse en avances y novedades; uno mensual requiere indicadores y comparaciones; y uno de cierre debe valorar el cumplimiento de las metas y las mejoras pendientes. Los informes de accidentes o incidentes siguen, además, los procedimientos específicos de la organización.
      .col-lg-3
        img.tema5-informe__imagen(src="@/assets/curso/temas/t5/img10.png" alt="")

    p.mb-4 Para elaborar un informe claro y verificable, el contenido puede organizarse en los siguientes apartados:

    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-0(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Identificación y alcance")
            .col-12
              p Precisar el periodo evaluado, los lotes, las labores, los equipos y las personas responsables. También deben indicarse las fuentes utilizadas, como reportes diarios, registros de combustible, archivos del monitor y reportes de mantenimiento. Esta información permite reconocer a qué operación corresponden los resultados.
              p.mb-0 Delimitar el alcance evita comparar datos que representan situaciones diferentes. Si se excluyen traslados externos, se incluye una sola máquina o faltan registros de alguna jornada, debe indicarse. Las limitaciones de la información forman parte del informe y ayudan a interpretar sus conclusiones.
          .row(titulo="Resultados e indicadores")
            .col-12
              p Presentar las labores programadas y ejecutadas, el área trabajada, los tiempos y los indicadores seleccionados. Cada resultado debe conservar su unidad y método de cálculo. Conviene distinguir las horas de motor del tiempo total de campo y utilizar el área efectivamente trabajada, sin duplicar superficies por traslapes.
              p.mb-0 La explicación debe relacionar productividad y calidad. Una mayor superficie por hora no demuestra por sí sola un mejor desempeño si aumentaron las franjas sin trabajar, el consumo o la variación de profundidad. Las comparaciones requieren considerar el terreno, el equipo, la labor y las condiciones de ejecución.
          .row(titulo="Fallas, correcciones y consecuencias")
            .col-12
              p Describir las fallas relevantes, el momento en que ocurrieron, la duración de las paradas y las correcciones realizadas. Diferenciar los hechos observados de las causas probables y de las causas confirmadas. También debe precisarse si hubo consecuencias sobre el equipo, el cultivo, la seguridad o el ambiente.
              p.mb-0 Cuando existan problemas repetidos, conviene agruparlos por tipo y valorar tanto su frecuencia como el tiempo perdido. Una falla frecuente puede ocasionar interrupciones breves, mientras otra menos habitual concentra mayores pérdidas. Esta distinción ayuda a justificar las prioridades de intervención.
          .row(titulo="Conclusiones y acciones propuestas")
            .col-12
              p Las conclusiones deben responder qué se logró, qué se apartó de lo previsto y qué factores explican los resultados con la evidencia disponible. No basta con repetir los datos: es necesario señalar su significado para la programación, el mantenimiento y la calidad de las siguientes labores.
              p.mb-0 Cada acción propuesta debe incluir responsable, plazo y criterio de comprobación. En lugar de escribir únicamente “mejorar el mantenimiento”, conviene especificar qué revisión se realizará, sobre qué equipo y cómo se evaluará su resultado. Así, el informe permite asignar tareas y dar seguimiento a su cumplimiento.
          .row(titulo="Anexos y trazabilidad")
            .col-12
              p Incluir los soportes necesarios para verificar los resultados: reportes diligenciados, mapas de cobertura, registros de consumo, fotografías y comprobaciones de calidad. Cada anexo debe identificarse y relacionarse con el apartado que sustenta, evitando incorporar archivos que no aporten evidencia a las conclusiones.
              p.mb-0 Los archivos digitales deben conservar nombres claros, fecha, equipo y lote, además de una versión identificable cuando se realicen modificaciones. También conviene mantener el archivo original exportado del monitor y distinguirlo de los documentos procesados para el análisis. Esto facilita revisar los cálculos y recuperar la información.

    Separador
    #t_5_5.titulo-segundo.color-acento-contenido
      h2 5.5 Acciones de mejora: concepto, alcance, responsabilidad e importancia

    .row.align-items-stretch.mb-4
      .col-lg-4.mb-4.mb-lg-0
        img.tema5-mejora__imagen(src="@/assets/curso/temas/t5/img11.png" alt="")
      .col-lg-8
        p.mb-4 Una acción de mejora es una intervención planificada para elevar el desempeño de la operación. Puede responder a un problema identificado o aprovechar una oportunidad, incluso cuando los resultados cumplen lo esperado. Las acciones correctivas forman parte de la mejora, pero esta también incluye cambios destinados a aumentar la capacidad, facilitar el trabajo o utilizar mejor los recursos.
        .tema5-mejora__destacado.p-4
          p.mb-0 Su alcance puede limitarse a un equipo o extenderse a toda la flota. Incorporar corte automático por secciones, reorganizar recorridos o mejorar la gestión de archivos son posibilidades que deben evaluarse según la labor y sus beneficios esperados. La incorporación de tecnología requiere comprobar compatibilidad, costos, capacitación y condiciones de uso.

    .titulo-pastilla.mb-4
      img(src="@/assets/curso/icon.svg" alt="")
      span Ejemplo de propuesta de mejora

    p.mb-4 En una cosecha se identifican esperas frecuentes porque los remolques llegan al lote sin coordinación. Se propone reorganizar sus recorridos y establecer un mecanismo de comunicación entre los responsables.

    .row.align-items-stretch
      .col-lg-9.mb-4.mb-lg-0
        .tema2-ejemplo.p-4.h-100
          img.tema5-icono.mb-4(src="@/assets/curso/temas/t5/img12.svg" alt="")
          p.mb-0 La meta consiste en reducir el tiempo de espera por hectárea durante una prueba de cinco jornadas comparables. Se registrarán tiempos, distancias y condiciones del terreno, y se comprobará que el cambio no aumente los riesgos de circulación ni la afectación del suelo. La decisión de ampliar la medida dependerá de los resultados.
      .col-lg-3
        img.tema5-mejora__imagen(src="@/assets/curso/temas/t5/img13.svg" alt="")

    Separador
    #t_5_6.titulo-segundo.color-acento-contenido
      h2 5.6 Mejoramiento continuo: análisis comparativo y validación de medidas

    p.mb-4 El mejoramiento continuo consiste en revisar sistemáticamente los resultados y aplicar cambios sustentados en evidencias. Puede organizarse mediante el ciclo PHVA: Planear, Hacer, Verificar y Actuar. Este enfoque relaciona los objetivos, la ejecución, la medición y las decisiones posteriores, como explica la orientación de ISO sobre el enfoque basado en procesos.

    .bloque-texto-g.tema5-bloque-mejoramiento.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(aria-hidden="true")
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis comparativo permite establecer si una intervención alcanzó su objetivo. Para ello deben conservarse criterios de medición equivalentes y considerar factores como tipo de labor, equipo, humedad del suelo, pendiente y experiencia del personal. Si cambian varias condiciones simultáneamente, la mejora observada no puede atribuirse de manera automática a una sola acción.

    p.mb-4 La comprobación inicial determina si la medida funciona bajo las condiciones de la prueba. El seguimiento posterior permite establecer si el resultado se mantiene. Cuando la intervención es eficaz, se incorpora a los procedimientos y a la formación del personal; si no lo es, se revisan las causas y se ajusta la propuesta.

    .titulo-pastilla.mb-4
      img(src="@/assets/curso/icon.svg" alt="")
      span Ejemplo resuelto: reducción de aplicación repetida

    p.mb-4 Se implementan guiado y corte automático por secciones en un equipo de aplicación. Para este ejemplo se define el porcentaje de aplicación repetida como el área equivalente aplicada adicionalmente dividida entre el área física del lote. Se supone cobertura completa, sin omisiones, y se mantiene el mismo criterio antes y después.

    p.mb-4 En una superficie de 400 ha, la aplicación repetida pasa del 11 % al 3 %. Los cálculos son:

    .row.align-items-stretch.mb-4
      .col-lg-3.mb-4.mb-lg-0
        img.tema5-mejora__imagen(src="@/assets/curso/temas/t5/img15.svg" alt="")
      .col-lg-9
        .tema2-ejemplo.p-4.h-100.d-flex.align-items-center
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-square
              strong Área repetida antes = 400 × 0,11 = 44 ha equivalentes.
            li
              i.fas.fa-square
              strong Área repetida después = 400 × 0,03 = 12 ha equivalentes.
            li.mb-0
              i.fas.fa-square
              strong Reducción de aplicación repetida = 44 − 12 = 32 ha equivalentes.

    p.mb-4 La disminución es de 8 puntos porcentuales. En estas condiciones, el área equivalente aplicada pasa de 444 a 412 ha, incluyendo las repeticiones. No significa que cambie el tamaño del lote.

    p.mb-4 Si la dosis por hectárea permanece constante, las 32 ha equivalentes representan una reducción potencial de insumos aplicados repetidamente. Para confirmar el resultado se revisan los mapas, las omisiones, las cantidades utilizadas y la configuración del equipo. El seguimiento continúa durante las siguientes labores para comprobar que el beneficio se mantiene sin afectar la calidad.

    p.mb-4 Para integrar estas decisiones, el siguiente proceso muestra cómo la información de la operación alimenta un nuevo ciclo de mejora:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0
            b Figura 6.
            |  Ciclo de mejoramiento continuo de la operación de maquinaria
        img.d-none.d-lg-block.w-100(src="@/assets/curso/temas/t5/img16.svg" alt="Figura 6 que ejemplifica el ciclo de mejoramiento continuo de la operación de maquinaria mediante cuatro etapas relacionadas: Planear, Hacer, Verificar y Actuar. Los resultados de cada ciclo sirven para ajustar la siguiente intervención.")
        img.d-block.d-lg-none.w-100(src="@/assets/curso/temas/t5/img16_1.svg" alt="Figura 6 que ejemplifica el ciclo de mejoramiento continuo de la operación de maquinaria mediante cuatro etapas relacionadas: Planear, Hacer, Verificar y Actuar. Los resultados de cada ciclo sirven para ajustar la siguiente intervención.")

    .row.justify-content-center
      .col-lg-10
        .tema1-reflexion
          .row.g-0.align-items-stretch
            .col-md-2.tema1-reflexion__icono.p-4
              img(src="@/assets/curso/temas/t4/img39.svg" alt="")
            .col-md-10.tema1-reflexion__contenido.p-4
              h3.h5 Para reflexionar
              p ¿Qué mejora se implementó en la última temporada, con qué datos se evaluó y qué evidencia demuestra que su resultado se mantuvo?
              p.mb-0 El aprendizaje de cada labor se consolida cuando las observaciones se convierten en registros, los registros sustentan decisiones y los cambios se comprueban en campo. Así, la experiencia contribuye a una operación más eficiente, segura y sostenible.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({}),
}
</script>
