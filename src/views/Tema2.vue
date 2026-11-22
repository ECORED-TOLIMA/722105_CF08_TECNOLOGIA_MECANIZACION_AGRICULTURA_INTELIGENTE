<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de navegación global por satélite y coordenadas

    p.mb-4 La agricultura de precisión se apoya en la capacidad de conocer la posición de una máquina dentro del lote con la exactitud que requiere cada labor. Los sistemas globales de navegación por satélite, conocidos como GNSS, proporcionan información para orientar los recorridos, registrar las operaciones y relacionar los datos de campo con una ubicación.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-g.tema1-bloque-empresa.p-3.p-sm-4.p-md-5.mb-0.tema2-bloque-apertura
          .bloque-texto-g__img(aria-hidden="true")
          .bloque-texto-g__texto.p-4
            p.mb-0 La utilidad de esta tecnología depende de la calidad de las señales, las correcciones disponibles y la configuración de los equipos. También requiere interpretar correctamente las coordenadas y las alturas. Una posición puede parecer estable en la pantalla y, aun así, presentar diferencias respecto a un mapa o una línea guía si los datos utilizan referencias distintas.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 GNSS: conceptos, constelaciones y segmentos

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        p.mb-4 GNSS corresponde a la expresión inglesa Global Navigation Satellite System, que significa sistema global de navegación por satélite. Estos sistemas permiten calcular posición, velocidad y tiempo a partir de las señales transmitidas por satélites.
        .tema2-nota.p-4.mb-4
          p.mb-0 El receptor utiliza el tiempo de propagación de las señales para estimar distancias, denominadas seudodistancias, porque incluyen errores de reloj y otras fuentes de incertidumbre. En una solución básica se necesitan al menos cuatro satélites para resolver las tres componentes de posición y el desfase del reloj del receptor. Disponer de cuatro satélites no garantiza, por sí solo, una posición adecuada para labores de precisión.
        p.mb-0 Las principales constelaciones globales son GPS, de Estados Unidos; GLONASS, de Rusia; Galileo, de la Unión Europea; y BeiDou, de China. Los receptores compatibles pueden utilizar señales de varias constelaciones, lo que amplía las posibilidades de observación y mejora la disponibilidad del posicionamiento.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t2/img2.png" alt="")

    p.mb-4 El funcionamiento de estos sistemas se organiza en tres segmentos que cumplen funciones complementarias. Los siguientes apartados permiten distinguir de dónde proceden las señales, cómo se supervisan y de qué manera se utilizan en la maquinaria agrícola:

    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Segmento espacial")
            .col-12
              .row.align-items-center.mb-3
                .col-md-auto.mb-3.mb-md-0
                  img.tema2-icono(src="@/assets/curso/temas/t2/img3.svg" alt="")
                .col
                  p.mb-0 Comprende los satélites que orbitan alrededor de la tierra y transmiten señales con información de tiempo y datos para determinar su posición orbital. El receptor utiliza estas señales para estimar su distancia a los satélites y calcular una posición. La distribución de los satélites observados influye en la calidad de ese cálculo.
              p.mb-0 En el trabajo agrícola, la recepción puede cambiar cuando la máquina se aproxima a árboles, construcciones o relieves que obstruyen parte del cielo. Por ello, percibir varios satélites no significa que todos aporten mediciones de igual calidad. La disponibilidad de distintas constelaciones amplía las posibilidades de recepción, pero no elimina las dificultades del entorno.
          .row(titulo="Segmento de control")
            .col-12
              .row.align-items-center.mb-3
                .col-md-auto.mb-3.mb-md-0
                  img.tema2-icono(src="@/assets/curso/temas/t2/img4.svg" alt="")
                .col
                  p.mb-0 Está formado por estaciones terrestres que supervisan el funcionamiento de la constelación. Estas instalaciones siguen las señales de los satélites, analizan su comportamiento y permiten actualizar la información de navegación relacionada con las órbitas y los relojes. Su función es mantener el funcionamiento del sistema y la calidad de la información transmitida.
              p.mb-0 Este segmento debe distinguirse de una estación base RTK instalada en una finca. La base proporciona datos de referencia para el posicionamiento de receptores cercanos, mientras que el segmento de control forma parte de la infraestructura de la constelación. Aunque ambos emplean instalaciones terrestres, cumplen funciones diferentes.
          .row(titulo="Segmento de usuario")
            .col-12
              .row.align-items-center.mb-3
                .col-md-auto.mb-3.mb-md-0
                  img.tema2-icono(src="@/assets/curso/temas/t2/img5.svg" alt="")
                .col
                  p.mb-0 Incluye las antenas, los receptores y los equipos de procesamiento que utilizan las señales GNSS. En agricultura, estos componentes pueden instalarse en tractores, cosechadoras, drones y equipos de levantamiento. La posición calculada puede mostrarse en un monitor o integrarse con otras funciones, como el guiado y el registro de labores.
              p.mb-0 Su desempeño depende de la compatibilidad del receptor, la instalación de la antena, la configuración y las condiciones de recepción. El operador debe reconocer los indicadores de calidad y las alertas del sistema. Una ubicación visible en pantalla no demuestra, por sí sola, que se haya alcanzado la exactitud necesaria para ejecutar una labor.

    p.mb-0 Esta organización permite comprender que el receptor calcula su posición con las señales recibidas; los satélites no envían una ubicación individual a cada máquina (GPS.gov, s. f.).

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Vulnerabilidades y sistemas de corrección

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img.w-100(src="@/assets/curso/temas/t2/img6.png" alt="")
      .col-lg-8
        p.mb-4 Las señales GNSS pueden verse afectadas durante su recorrido y recepción. Los retrasos atmosféricos, los errores de órbita y reloj, la distribución de los satélites y las condiciones del entorno influyen en la posición calculada.
        .cajon.color-secundario.p-4.mb-0
          p.mb-0 En el trabajo agrícola, algunas dificultades se presentan al cambiar de zona dentro del lote o al perderse la comunicación con un servicio de corrección. Los siguientes factores ayudan a reconocer las causas de una disminución en la calidad del posicionamiento:

    SlyderF.mb-4(columnas="col-md-6 col-xl-4")
      .tarjeta.BGTARG.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/temas/t2/img7.svg" alt="")
        h5.text-center Obstrucción de señales
        p.mb-0.text-center Los árboles densos, las construcciones y los relieves pronunciados pueden bloquear las señales e impedir que lleguen a la antena. Esto reduce los satélites observados y puede afectar la continuidad y la exactitud del posicionamiento durante el recorrido.
      .tarjeta.BGTARG.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/temas/t2/img8.svg" alt="")
        h5.text-center Multitrayecto
        p.mb-0.text-center Ocurre cuando una señal llega a la antena después de reflejarse en superficies cercanas, como paredes, estructuras metálicas o partes de la máquina. Ese recorrido adicional altera la distancia estimada y puede producir variaciones en la posición calculada.
      .tarjeta.BGTARG.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/temas/t2/img9.svg" alt="")
        h5.text-center Geometría desfavorable
        p.mb-0.text-center Se presenta cuando los satélites observados se concentran en una misma región del cielo, debilitando el cálculo de la posición. Por ello, no basta con disponer de varios satélites; también importa su distribución.
      .tarjeta.BGTARG.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/temas/t2/img10.svg" alt="")
        h5.text-center Interferencias
        p.mb-0.text-center Las emisiones de radio y otras perturbaciones pueden dificultar la recepción y el procesamiento de las señales GNSS. Sus efectos incluyen inestabilidad de la posición o pérdida de seguimiento de satélites, incluso cuando existe una vista despejada del cielo.
      .tarjeta.BGTARG.p-4.h-100
        .row.justify-content-center.mb-3
          .col-6
            img(src="@/assets/curso/temas/t2/img11.svg" alt="")
        h5.text-center Pérdida de correcciones
        p.mb-0.text-center Una interrupción del enlace de radio, internet o del servicio contratado puede impedir que lleguen las correcciones al receptor. Aunque continúe mostrando una posición, su exactitud puede disminuir, por lo que deben revisarse el estado de la solución y las alertas.

    p.mb-4 La aumentación y los servicios de corrección aportan información adicional para reducir determinados errores. Sin embargo, no eliminan todas las limitaciones: una corrección no reemplaza una instalación adecuada de la antena ni resuelve cualquier obstrucción local.

    p.mb-4 Para comparar las alternativas disponibles es necesario considerar tanto su desempeño como las condiciones que requieren. La siguiente tabla presenta opciones habituales y sus posibles usos agrícolas. Los niveles indicados son orientativos y no constituyen garantías para cualquier receptor, lugar o condición de trabajo:

    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Alternativas de posicionamiento y criterios para su utilización
        .tabla-b.tema1-tabla.mb-4
          table
            thead
              tr
                th(scope="col") Alternativa
                th(scope="col") Desempeño horizontal orientativo
                th(scope="col") Condiciones y limitaciones
                th(scope="col") Uso agrícola posible
            tbody
              tr
                td GNSS autónomo, sin correcciones externas.
                td Errores que pueden ser de varios metros.
                td Depende del receptor, las señales disponibles y el entorno.
                td Ubicación general de lotes, recorridos y registros que admitan ese error.
              tr
                td Aumentación regional SBAS.
                td Orden métrico o submétrico, según el sistema y las condiciones.
                td Requiere receptor compatible y cobertura efectiva del servicio; no debe suponerse disponibilidad mundial.
                td Guiado y labores extensivas cuya tolerancia sea compatible con el desempeño comprobado.
              tr
                td Servicios comerciales de corrección.
                td Desde nivel submétrico hasta centimétrico, según el servicio.
                td Pueden exigir suscripción, receptor compatible y tiempo de convergencia.
                td Guiado, siembra y otras labores, según la especificación contratada.
              tr
                td RTK con base local o red.
                td Orden centimétrico cuando se obtiene y mantiene una solución fija adecuada.
                td Requiere observaciones de calidad, correcciones oportunas y una referencia confiable.
                td Siembra de precisión, tráfico controlado y levantamientos compatibles con la exactitud obtenida.

        .tema2-nota.p-4
          p.mb-0 Antes de seleccionar una alternativa se debe comprobar su cobertura en la finca, la compatibilidad del receptor y el desempeño exigido por la labor. También es necesario distinguir entre exactitud absoluta, exactitud entre pasadas y repetibilidad a largo plazo; son características relacionadas, pero diferentes.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 RTK y aplicaciones del GNSS en la operación

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
        p.mb-4 RTK significa Real-Time Kinematic, o posicionamiento cinemático en tiempo real. Esta técnica utiliza mediciones de la fase de la señal portadora y datos de una estación base o una red de referencia para obtener una posición de alta exactitud.
        .tarjeta.tema2-formula.p-4.mb-4
          p.mb-0 En una configuración con base local, la estación permanece en un punto de coordenadas conocidas y transmite información al receptor móvil de la máquina, denominado rover. El intercambio puede realizarse por radio o mediante una conexión a internet. En RTK de red, varias estaciones proporcionan información que se procesa para generar las correcciones utilizadas por el móvil.
        p.mb-0 El receptor puede mostrar estados como fijo o flotante, que representan distintas condiciones de resolución de las mediciones. La solución fija suele permitir el desempeño centimétrico esperado, pero debe evaluarse junto con los indicadores de calidad y las condiciones de recepción.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t2/img12.png" alt="")    

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.w-100(src="@/assets/curso/temas/t2/img13.svg" alt="")
      .col-lg-9
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La repetibilidad entre temporadas requiere conservar una referencia consistente. Si se cambia la ubicación de la base sin determinar correctamente sus coordenadas, pueden desplazarse las líneas almacenadas. Por ello, RTK permite regresar con alta exactitud a recorridos anteriores, pero no garantiza pasar exactamente por el mismo punto en cualquier circunstancia (NovAtel, s. f.).
        p.mb-0 Para reconocer los equipos utilizados en una configuración con base local, la figura 2 muestra una estación de referencia y un tractor con antena GNSS. La ilustración permite distinguir el equipo que permanece en una ubicación fija del receptor que se desplaza con la máquina:

    .row.justify-content-center.align-items-center
      .col-lg-10

        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span Estación de referencia y receptor GNSS en maquinaria agrícola
    
        figure.mb-4
          img.d-none.d-md-block.w-100(src="@/assets/curso/temas/t2/img14.png" alt="Figura 2 que ejemplifica una configuración GNSS con estación de referencia sobre un trípode y receptor instalado en un tractor para apoyar las labores agrícolas.")
          img.d-block.d-md-none.w-100(src="@/assets/curso/temas/t2/img14_1.png" alt="Figura 2 que ejemplifica una configuración GNSS con estación de referencia sobre un trípode y receptor instalado en un tractor para apoyar las labores agrícolas.")

    .titulo-pastilla
      img(src="@/assets/curso/icon.svg" alt="")
      span Aplicaciones en la maquinaria

    p.mb-4 La posición calculada puede utilizarse en diferentes funciones del conjunto máquina-implemento. Los siguientes usos muestran su relación con la orientación, el control de insumos y el registro de información. Cada aplicación requiere equipos y configuraciones adicionales; instalar un receptor GNSS no las habilita automáticamente:
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema1-panel.p-4.mb-4
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-seedling
              div
                strong Guiado y dirección automática
                p.mb-0 Ayudan a seguir recorridos definidos mediante indicaciones en pantalla o actuación sobre la dirección.
            li
              i.fas.fa-seedling
              div
                strong Control de secciones y dosificación
                p.mb-0 Permiten coordinar la apertura de secciones y la aplicación de insumos según la ubicación y la configuración del sistema.
            li
              i.fas.fa-seedling
              div
                strong Tráfico controlado
                p.mb-0 Facilita repetir recorridos para concentrar el tránsito de la maquinaria en franjas planificadas.
            li
              i.fas.fa-seedling
              div
                strong Mapeo y registro
                p.mb-0 Relaciona labores, rendimientos y observaciones con coordenadas.
            li
              i.fas.fa-seedling
              div
                strong Nivelación y gestión de flotas
                p.mb-0 Aporta información para trabajos que requieren control de alturas o seguimiento de equipos, con las verificaciones técnicas correspondientes.

    .titulo-pastilla
      img(src="@/assets/curso/icon.svg" alt="")
      span Ejemplo resuelto: ahorro por reducción de traslapes

    p.mb-4 La reducción de áreas tratadas más de una vez puede disminuir el consumo de insumos. El siguiente ejemplo muestra cómo estimar ese ahorro a partir de un porcentaje de traslape, sin atribuir todo el resultado al receptor GNSS:

    .tema2-ejemplo-decision.p-4.mb-4
      p.mb-4 Una fumigadora de 18 m trabaja en un área de referencia de 200 ha. Se supone que el área tratada de forma repetida equivale al 10 % de esa superficie y que, con guiado GNSS y corte por secciones, disminuye al 2 %.
      p.mb-4 La diferencia entre ambos porcentajes permite calcular el área repetida que se evita:
      .row.justify-content-center.align-items-center
        .col-lg-10
          .tema2-formula.p-4.mb-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 Área repetida evitada = (0,10 − 0,02) × 200 = 16 ha
      p.mb-4 Si el costo del producto aplicado es de $150.000 por hectárea, el ahorro estimado en insumos sería:
      .row.justify-content-center.align-items-center
        .col-lg-10
          .tema2-formula.p-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 Ahorro = 16 × $150.000 = $2.400.000

    p.mb-0 El resultado corresponde únicamente al supuesto de reducción de traslapes. No incluye áreas sin tratar, combustible, tiempo ni costos de adquisición y operación del sistema. El ancho de 18 m caracteriza la máquina, pero no interviene en este cálculo porcentual.

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Coordenadas geográficas y planas y sistema sexagesimal

    p.mb-4 Las coordenadas permiten expresar numéricamente una posición. Para interpretarlas se deben conocer sus unidades, el orden de los valores y el sistema de referencia utilizado.
    
    .bloque-texto-g.tema1-bloque-empresa.p-3.p-sm-4.p-md-5.mb-0.tema2-bloque-coordenadas.mb-4
      .bloque-texto-g__img(aria-hidden="true")
      .bloque-texto-g__texto.p-4
        p.mb-0 Las coordenadas geográficas expresan la posición mediante latitud y longitud. La latitud indica la ubicación angular al norte o al sur del ecuador; la longitud, al este o al oeste del meridiano de referencia. Pueden escribirse en grados, minutos y segundos o en grados decimales.

    .row.align-items-center.mb-4
      .col-md-auto.mb-4.mb-md-0.d-none.d-lg-block
        img.tema2-icono(src="@/assets/curso/temas/t2/img16.svg" alt="")
      .col
        p.mb-0 Las coordenadas planas se obtienen mediante una proyección cartográfica. Se expresan generalmente en metros como valores este y norte. Facilitan el trabajo con mapas, distancias y áreas, aunque las proyecciones introducen deformaciones que deben considerarse cuando se necesitan mediciones de alta exactitud.

    p.mb-4 La siguiente tabla compara ambas representaciones según sus valores, unidades y usos. También identifica los datos que deben acompañar a las coordenadas para interpretarlas y utilizarlas correctamente:

    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span Diferencias entre coordenadas geográficas y planas
        .tabla-b.tema1-tabla.mb-4
          table
            thead
              tr
                th(scope="col") Aspecto
                th(scope="col") Coordenadas geográficas
                th(scope="col") Coordenadas planas
            tbody
              tr
                td Valores principales.
                td Latitud y longitud.
                td Este y norte.
              tr
                td Unidades habituales.
                td Grados decimales o grados, minutos y segundos.
                td Metros.
              tr
                td Representación.
                td Posición angular respecto a un elipsoide y un sistema de referencia.
                td Posición sobre un plano definido por una proyección cartográfica.
              tr
                td Uso frecuente
                td Intercambio de ubicaciones y datos GNSS.
                td Cartografía y cálculos de distancias y áreas con los controles de escala correspondientes.
              tr
                td Información necesaria
                td Sistema de referencia, unidades, hemisferios y orden de las coordenadas.
                td Sistema de referencia, proyección, origen o zona, unidades y orden de los ejes.

    p.mb-4 En Colombia, MAGNA-SIRGAS es la referencia geodésica oficial. Origen Nacional es la proyección cartográfica utilizada para la cartografía básica oficial; ambos conceptos cumplen funciones distintas. Los equipos y archivos deben utilizar referencias compatibles o transformaciones correctamente definidas. No basta con cambiar el nombre del sistema en un programa para transformar las coordenadas (IGAC, 2020).

    .titulo-pastilla
      img(src="@/assets/curso/icon.svg" alt="")
      span Conversión del sistema sexagesimal a grados decimales

    p.mb-4 En el sistema sexagesimal, una circunferencia tiene 360 grados; cada grado contiene 60 minutos y cada minuto, 60 segundos. Para convertir una coordenada a grados decimales se suman los grados, los minutos divididos entre 60 y los segundos divididos entre 3.600:

    .tema2-ejemplo-decision.p-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-10
          .tema2-formula.p-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 Grados decimales = grados + (minutos ÷ 60) + (segundos ÷ 3.600)
      p.mb-4 La operación se realiza con la magnitud del ángulo y después se asigna el signo del hemisferio: norte y este positivos; sur y oeste negativos, cuando el programa utiliza esa convención.
      p.mb-4 Los siguientes cálculos muestran la conversión de una latitud norte y una longitud oeste. En ambos casos se conserva la ubicación del punto; únicamente cambia la forma de expresar el ángulo:
      
      .titulo-sexto.color-acento-contenido.tema2-factor-titulo.d-inline-block.px-4.py-1.mb-3
        span.text-bold Latitud
      p.mb-4 Para 4° 36′ 30″ N, se suman los tres componentes y se mantiene el signo positivo por corresponder al hemisferio norte.
      .row.justify-content-center.mb-4
        .col-lg-10
          .tema2-formula.p-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 4 + (36 ÷ 60) + (30 ÷ 3.600) = 4,608333…°
      .titulo-sexto.color-acento-contenido.tema2-factor-titulo.d-inline-block.px-4.py-1.mb-3
        span.text-bold Longitud
      p.mb-4 Para 74° 04′ 48″ O, se calcula la magnitud y se asigna el signo negativo por corresponder al hemisferio oeste.
      .row.justify-content-center
        .col-lg-10
          .tema2-formula.p-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 −[74 + (4 ÷ 60) + (48 ÷ 3.600)] = −74,08°

    p.mb-4 Para realizar la conversión inversa se toma la parte entera como grados, se multiplica la fracción por 60 para obtener los minutos y se repite la operación con la fracción restante para obtener los segundos. Si se utiliza el valor redondeado de 4,60833°, el resultado es aproximadamente 4° 36′ 30″.

    p.mb-4 Al ingresar los datos se verifica si el programa solicita primero latitud o longitud y si utiliza coma o punto como separador decimal. Cambiar el formato entre grados decimales y sexagesimales no equivale a transformar el datum ni la proyección.

    img.w-100(src="@/assets/curso/temas/t2/img16.png" alt="")

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2
        | 2.5 
        em Datum
        | , elipsoide, geoide y alturas

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        p Las coordenadas y las alturas necesitan superficies y referencias que permitan interpretarlas. El elipsoide, el geoide y el datum se relacionan entre sí, pero no representan lo mismo.
        p.mb-4 Los siguientes conceptos permiten diferenciar la superficie matemática utilizada en el posicionamiento, la referencia relacionada con la gravedad y el marco en el que se expresan las coordenadas:
        LineaTiempoD.color-acento-botones
          p.mb-0(numero="1" titulo="Elipsoide") Superficie matemática regular, ligeramente achatada en los polos, que aproxima la forma general de la Tierra. Sirve de referencia para calcular coordenadas geodésicas, como latitud y longitud, y alturas elipsoidales. Su geometría permite realizar cálculos de posicionamiento, aunque no representa las irregularidades del terreno ni el nivel medio del mar.
          p.mb-0(numero="2" titulo="Geoide") Superficie equipotencial del campo de gravedad terrestre que aproxima el nivel medio del mar y se prolonga bajo los continentes. Su forma es irregular debido a las variaciones en la distribución de las masas terrestres. Se utiliza como referencia para las alturas ortométricas y permite relacionarlas con las alturas elipsoidales obtenidas mediante GNSS.
          p.mb-0(numero="3" titulo="<em>Datum</em> y marco de referencia") Establecen la referencia respecto de la cual se expresan las coordenadas y permiten relacionar las mediciones con la Tierra. El marco materializa esa referencia mediante estaciones con coordenadas determinadas. Para integrar datos de distintos equipos es necesario comprobar su compatibilidad; en trabajos de alta exactitud también importan la realización del marco y la época de las coordenadas.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.w-100(src="@/assets/curso/temas/t2/img17.png" alt="")

    p.mb-4 Los receptores GNSS determinan alturas elipsoidales. Un programa puede mostrar alturas convertidas si tiene configurado un modelo vertical. Por eso, una lectura denominada “altura” no debe interpretarse automáticamente como una cota sobre el nivel del mar.

    .tema2-ejemplo-decision.p-4.mb-4
      p.mb-4 Para las alturas ortométricas, la relación básica se expresa mediante la diferencia entre la altura elipsoidal y la ondulación geoidal:
      .row.justify-content-center.mb-4
        .col-lg-10
          .tema2-formula.p-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 H ≈ h − N
      p.mb-4 En esta relación, h es la altura elipsoidal, H la altura ortométrica y N la ondulación geoidal.
      p.mb-4 El siguiente ejemplo permite reconocer por qué dos valores de altura pueden ser diferentes sin que necesariamente exista un error de medición. Si una posición tiene una altura elipsoidal de 120 m y una ondulación geoidal de 25 m, su altura ortométrica aproximada es:
      .row.justify-content-center
        .col-lg-10
          .tema2-formula.p-4
            .tema2-calculo.p-4
              p.tema2-calculo__operacion.mb-0 H ≈ 120 − 25 = 95 m

    p.mb-4 Estos valores son ilustrativos. La conversión requiere un modelo compatible con las referencias utilizadas; además, no deben confundirse las alturas ortométricas con las alturas normales ni el geoide con el cuasigeoide. geodesy.noaa.gov

    p.mb-4 En labores de nivelación se comprueba el tipo de altura, el modelo vertical y la calidad de las mediciones. La exactitud horizontal centimétrica no asegura la misma exactitud vertical, por lo que el desempeño debe validarse antes de utilizar las cotas para diseñar pendientes o drenajes.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema1-reflexion
          .row.g-0.align-items-stretch
            .col-lg-1.tema1-reflexion__icono.p-3.py-4
              img(src="@/assets/curso/temas/t2/img18.svg" alt="")
            .col-md-10.tema1-reflexion__contenido.p-4
              h3.h5 Para reflexionar
              p La coincidencia visual de dos mapas no demuestra que utilicen la misma referencia. Antes de combinar información del tractor, el dron y el programa cartográfico, conviene revisar la configuración y la procedencia de los datos a partir de estas preguntas:
              p ¿Qué sistema de coordenadas utiliza cada equipo? ¿Se conocen las unidades, el orden de los valores y el tipo de altura? ¿Se conservaron las coordenadas de la base y la referencia de las líneas guía anteriores?
              p.mb-0 La posición obtenida mediante GNSS constituye una entrada para el guiado de la maquinaria. Su aprovechamiento depende de configurar correctamente el sistema de piloto automático, sus parámetros y las condiciones de operación.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>
