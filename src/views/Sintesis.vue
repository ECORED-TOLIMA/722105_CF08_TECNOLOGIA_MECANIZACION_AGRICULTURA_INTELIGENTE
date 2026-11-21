<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El componente formativo aborda los fundamentos técnicos necesarios para operar, evaluar y mejorar la maquinaria agrícola con criterios de seguridad, precisión y uso eficiente de los recursos. Comprende la identificación de riesgos, las medidas preventivas, la protección personal, la actuación ante emergencias, la gestión ambiental y el traslado por vías públicas. Asimismo, desarrolla los sistemas de navegación global por satélite, las correcciones de posicionamiento, las coordenadas y las referencias de altura, junto con la configuración, calibración y utilización del piloto automático. También integra los registros y archivos digitales, el cálculo de indicadores de eficiencia y consumo, la relación entre desempeño y costos, y el reconocimiento, reporte y prevención de fallas. Finalmente, contempla las correcciones, las acciones correctivas, la elaboración de informes y la validación de mejoras mediante el ciclo PHVA, con el propósito de sustentar las decisiones de operación, verificar la calidad de las labores y fortalecer el desempeño de los equipos y del personal.

    .row.justify-content-center.mb-4
      .col-lg-12
        figure.mb-0
          img(src="@/assets/curso/sintesis.svg" alt="La síntesis presenta la operación, evaluación y mejoramiento de la maquinaria agrícola, organizada en cinco temas: seguridad, salud en el trabajo y normativa ambiental; sistemas de navegación global por satélite y coordenadas; configuración del sistema de piloto automático; registros, eficiencia de operación y fallas; y corrección de fallas, informe y mejoramiento continuo.")
    .row.justify-content-center.mb-0
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank" rel="noopener noreferrer")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg" alt="")
          .anexo__texto
            p.mb-0 Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
}
</script>
