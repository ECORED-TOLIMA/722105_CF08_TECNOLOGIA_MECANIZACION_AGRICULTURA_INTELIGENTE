<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

const mensajeCorrecto =
  '¡Excelente trabajo! Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para operar, evaluar y mejorar la maquinaria agrícola con seguridad, precisión y uso eficiente de los recursos.'
const mensajeIncorrecto =
  'Revise nuevamente el contenido del componente formativo.'
const idsOpciones = ['a', 'b', 'c', 'd']

const crearPregunta = (id, texto, correcta, opciones) => ({
  id,
  texto,
  imagen: `@/assets/actividad/imagen${((id - 1) % 10) + 1}.png`,
  barajarRespuestas: true,
  opciones: opciones.map((opcion, indice) => ({
    id: idsOpciones[indice],
    texto: opcion,
    esCorrecta: idsOpciones[indice] === correcta,
  })),
  mensaje_correcto: mensajeCorrecto,
  mensaje_incorrecto: mensajeIncorrecto,
})

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Operación, evaluación y mejoramiento de la maquinaria agrícola',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los criterios técnicos para operar y evaluar maquinaria agrícola, considerando la seguridad, la gestión ambiental, los sistemas GNSS, el piloto automático, los registros, los indicadores de desempeño y las acciones de mejora.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        crearPregunta(
          1,
          'Un tractor queda atascado durante una labor. ¿Qué debe hacerse antes de intentar recuperarlo?',
          'b',
          [
            'Reducir la carga y repetir el avance con mayor aceleración.',
            'Detener los intentos, asegurar el equipo y evaluar el terreno.',
            'Conectar otro tractor al punto de enganche más accesible.',
            'Mantener las ruedas girando para identificar una salida firme.',
          ],
        ),
        crearPregunta(
          2,
          '¿Qué información orienta la selección de un respirador para manipular agroquímicos?',
          'd',
          [
            'La duración de la jornada y el tamaño del lote.',
            'La marca del producto y la capacidad del tanque.',
            'La temperatura ambiental y el tipo de cultivo.',
            'El contaminante y las condiciones de exposición.',
          ],
        ),
        crearPregunta(
          3,
          '¿Para qué se utiliza una matriz de compatibilidad química?',
          'a',
          [
            'Para orientar el almacenamiento y la separación de sustancias.',
            'Para establecer las dosis y proporciones de una mezcla agrícola.',
            'Para calcular el consumo de productos durante una aplicación.',
            'Para determinar la cantidad de envases requeridos por jornada.',
          ],
        ),
        crearPregunta(
          4,
          'Antes de trasladar un tractor con implemento por una vía pública, ¿qué condición debe comprobarse?',
          'c',
          [
            'Que el implemento conserve la profundidad utilizada durante el trabajo.',
            'Que el recorrido seleccionado sea el de menor distancia disponible.',
            'Que el implemento esté asegurado en su posición de transporte.',
            'Que los neumáticos mantengan la presión usada en el último lote.',
          ],
        ),
        crearPregunta(
          5,
          '¿Qué función cumple el segmento de control de un sistema GNSS?',
          'b',
          [
            'Generar las líneas guía que seguirá el tractor dentro del lote.',
            'Supervisar los satélites y actualizar información de navegación.',
            'Controlar el giro del volante mediante sensores y actuadores.',
            'Registrar el consumo de combustible y el área de cada labor.',
          ],
        ),
        crearPregunta(
          6,
          'Una señal GNSS se refleja en una construcción antes de llegar a la antena. ¿Qué fenómeno se presenta?',
          'a',
          [
            'Multitrayecto.',
            'Pérdida de correcciones.',
            'Geometría desfavorable.',
            'Obstrucción de señales.',
          ],
        ),
        crearPregunta(
          7,
          '¿Qué diferencia básica existe entre coordenadas geográficas y planas?',
          'd',
          [
            'Las geográficas expresan alturas y las planas indican profundidades.',
            'Las geográficas se utilizan en campo y las planas solo en oficinas.',
            'Las geográficas requieren referencia y las planas pueden utilizarse sin ella.',
            'Las geográficas expresan ángulos y las planas suelen expresarse en metros.',
          ],
        ),
        crearPregunta(
          8,
          'Para reutilizar líneas guía RTK de una temporada anterior, ¿qué condición favorece la repetibilidad?',
          'c',
          [
            'Conservar el nombre del lote, aunque cambie la referencia de posición.',
            'Trasladar la base manteniendo las coordenadas de su ubicación anterior.',
            'Mantener una referencia consistente entre las distintas temporadas.',
            'Utilizar el mismo monitor, aunque se desconozca la ubicación de la base.',
          ],
        ),
        crearPregunta(
          9,
          'Una sembradora trabaja efectivamente 9,0 m, pero las líneas guía se separan 9,2 m. Sin otras desviaciones, ¿qué ocurre entre pasadas?',
          'a',
          [
            'Queda una franja de 0,2 m sin sembrar.',
            'Se produce un traslape de 0,2 m.',
            'Queda una franja de 0,4 m sin sembrar.',
            'Se produce un traslape de 0,4 m.',
          ],
        ),
        crearPregunta(
          10,
          '¿Qué patrón permite definir pasadas rectas y paralelas mediante dos puntos?',
          'c',
          [
            'Curva adaptativa.',
            'Pivote o círculo.',
            'Línea recta A-B.',
            'Curva idéntica.',
          ],
        ),
        crearPregunta(
          11,
          'Durante una labor se pierden las correcciones RTK y deja de alcanzarse la exactitud requerida. ¿Qué actuación corresponde?',
          'd',
          [
            'Aumentar la sensibilidad de dirección y conservar la velocidad.',
            'Continuar mientras la trayectoria siga apareciendo en pantalla.',
            'Cambiar el ancho configurado para compensar el desplazamiento.',
            'Tomar el control o detenerse, según el procedimiento previsto.',
          ],
        ),
        crearPregunta(
          12,
          'Antes de actualizar el sistema de guiado, ¿qué preparación es adecuada?',
          'b',
          [
            'Borrar los perfiles anteriores y conservar únicamente las líneas guía.',
            'Revisar la compatibilidad y respaldar la información exportable.',
            'Instalar la nueva versión y revisar después los requisitos del equipo.',
            'Desconectar el receptor y actualizar cada componente por separado.',
          ],
        ),
        crearPregunta(
          13,
          '¿Qué práctica mejora la confiabilidad de un reporte diario de operación?',
          'c',
          [
            'Estimar las paradas a partir del consumo total de combustible.',
            'Completar los horómetros al cierre semanal según el área atendida.',
            'Registrar oportunamente lecturas, actividades, paradas y unidades.',
            'Registrar las horas productivas y excluir las esperas de la jornada.',
          ],
        ),
        crearPregunta(
          14,
          'Una máquina tiene una capacidad teórica de 2,0 ha/h y trabaja 12 ha en 8 horas de campo. ¿Cuál es su eficiencia de campo?',
          'b',
          ['60 %.', '75 %.', '80 %.', '90 %.'],
        ),
        crearPregunta(
          15,
          'El radiador presenta seis obstrucciones y nueve horas de parada; las mangueras, dos roturas y quince horas de parada. ¿Qué conclusión es correcta?',
          'a',
          [
            'El radiador falla más veces y las mangueras acumulan más horas de parada.',
            'Las mangueras fallan más veces y el radiador acumula más horas de parada.',
            'El radiador presenta mayor frecuencia y también mayor tiempo de parada.',
            'Las mangueras presentan mayor frecuencia y también mayor tiempo de parada.',
          ],
        ),
        crearPregunta(
          16,
          'Un conjunto cuesta $150.000 por hora y tiene una capacidad efectiva de 1,5 ha/h. Con una base de tiempo compatible, ¿cuál es su costo por hectárea?',
          'd',
          [
            '$75.000 por hectárea.',
            '$150.000 por hectárea.',
            '$225.000 por hectárea.',
            '$100.000 por hectárea.',
          ],
        ),
        crearPregunta(
          17,
          'Se confirma que las obstrucciones repetidas de un radiador se relacionan con un procedimiento de inspección insuficiente. ¿Qué acción atiende la causa?',
          'c',
          [
            'Limpiar el radiador después de cada obstrucción detectada.',
            'Registrar las horas perdidas y conservar la inspección existente.',
            'Modificar la inspección y comprobar si disminuye la recurrencia.',
            'Reiniciar la labor y esperar otro evento para decidir cambios.',
          ],
        ),
        crearPregunta(
          18,
          'Después de ajustar una sembradora, el promedio de semillas por metro cumple la tolerancia. ¿Qué debe comprobarse también?',
          'a',
          [
            'La distribución de semillas a lo largo de los tramos evaluados.',
            'La velocidad máxima que puede alcanzar el tractor en el lote.',
            'El área pendiente para calcular la duración restante de la jornada.',
            'La capacidad de la tolva para programar el próximo abastecimiento.',
          ],
        ),
        crearPregunta(
          19,
          '¿Qué distingue un informe de operación de un registro diario?',
          'd',
          [
            'El informe contiene datos del equipo y el registro solo identifica al operador.',
            'El informe debe ser digital y el registro debe conservarse en papel.',
            'El informe sustituye los soportes y el registro reúne las recomendaciones.',
            'El informe interpreta resultados y el registro conserva datos de la actividad.',
          ],
        ),
        crearPregunta(
          20,
          'Se comparan los resultados de una mejora con la meta definida y con la situación anterior. ¿A qué etapa del ciclo PHVA corresponde?',
          'b',
          ['Planear.', 'Verificar.', 'Hacer.', 'Actuar.'],
        ),
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
