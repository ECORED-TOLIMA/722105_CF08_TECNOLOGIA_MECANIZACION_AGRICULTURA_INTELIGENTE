<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.mb-4
      .col-lg-1
        figure
          img(src="@/assets/curso/temas/intro/img1.svg" alt="")
      .col-lg-11
        p.mb-0 La operación de maquinaria agrícola requiere aplicar parámetros técnicos que permitan ejecutar las labores con seguridad, precisión y uso eficiente de los recursos. Además del manejo de los equipos, es necesario verificar las condiciones de trabajo, registrar los resultados e identificar oportunidades para mejorar el desempeño.

    .row.align-items-stretch.mb-4
      .col-lg-3.mb-4.mb-lg-0
        
          figure
            img.h-100.w-100.object-fit-cover.rounded-3(src="@/assets/curso/temas/intro/img2.png" alt="")
      .col-lg-9
        .cajon.color-secundario.p-3.mb-4
          p.mb-0 En este contexto, los sistemas de navegación global por satélite y el piloto automático apoyan el posicionamiento y el guiado de la maquinaria. Su utilización exige comprender sus principios, configurar sus parámetros y reconocer sus limitaciones. De igual manera, las medidas de seguridad, salud en el trabajo y protección ambiental orientan una ejecución responsable de las labores.
        p.mb-0 A lo largo de este componente formativo se abordarán las condiciones de seguridad y ambiente, los sistemas GNSS, las coordenadas y la configuración del piloto automático. También se estudiarán los registros, los indicadores de eficiencia, las fallas y su corrección, la elaboración de informes y las acciones de mejora. Estos conocimientos permitirán sustentar la operación, evaluar sus resultados e implementar mejoras conforme a los hallazgos identificados.

    p.mb-4 Para complementar la comprensión de los temas abordados, se recomienda acceder al siguiente video:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        figure.mb-0
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
}
</script>
