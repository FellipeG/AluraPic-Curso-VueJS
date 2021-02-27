<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img :src="foto.url" :alt="foto.titulo" />
  </div>
</template>

<script>
export default {

  data() {

    return {
      titulo: "Alurapic",
      foto: {
        url: "https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-opengraph_1200-1.jpg",
        titulo: "cachorro"
      }
    }

  }
  
}
</script>

<style>

</style>
