<template>
	<div class="corpo">
		<div class="painel">
			<h2 class="painel-titulo">{{ titulo }}</h2>
				<slot class="painel-conteudo">
				</slot>
		</div>
	</div>
</template>

<script>
export default {

	props: ['titulo']

}
</script>


<!-- Scoped serve para isolar todas as classes declaradas dentro do componente para serem utilizadas somente pelos elementos do componente -->
<style scoped>

	/* estilo do painel */ 

	.painel {
		padding: 0 auto;
		border: solid 2px grey;
		display: inline-block;
		margin: 5px;
		box-shadow: 5px 5px 10px grey;
		width: 200px;
		height: 100%;
		vertical-align: top;
		text-align: center;
	}

	.painel .painel-titulo {
		text-align: center;
		border: solid 2px;
		background: lightblue;
		margin: 0 0 15px 0;
		padding: 10px;
		text-transform: uppercase;
	}

</style>
