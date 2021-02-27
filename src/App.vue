<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {

  data() {

    return {
      titulo: "Alurapic",
      fotos: [
        {
          url: "https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-opengraph_1200-1.jpg",
          titulo: "cachorro"
        },
        {
          url: "https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-opengraph_1200-1.jpg",
          titulo: "cachorro2"
        }
      ]
    }

  }
  
}
</script>

<style>

</style>
