<template>
	<div>
		<h1 class="centralizado">{{ titulo }}</h1>

		<input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtre pelo título" />
		<ul class="lista-fotos">
			<li class="lista-fotos-item" v-for="foto of fotosComFiltro">
				<meu-painel :titulo="foto.titulo">
					<imagem-responsiva  v-meu-transform:scale.animate="1.5" :src="foto.url" :alt="foto.titulo" />
					<!--<botao tipo="button" rotulo="Remover" @botaoAtivado="remove($event, foto)" />-->
					<botao 
						tipo="button" 
						rotulo="Remover" 
						@botaoAtivado="remove(foto)" 
						:confirmacao="true"
						estilo="perigo" />
				</meu-painel>
			</li>
		</ul>
		
	</div>
</template>

<script>

import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue'

export default {

	components: {
		'meu-painel': Painel,
		'imagem-responsiva': ImagemResponsiva,
		'botao': Botao
	},

	data() {

		return {
			titulo: "Alurapic",
			fotos: [],
			filtro: ''
		}

	},

	methods: {
		// $event = Dado passado pelo elemento filho 'Botao'
		//remove($event, foto) {
		//	alert('Remover a foto! ' + foto.titulo + ' ' + $event);
		//}

		remove(foto) {
			alert('Remover a foto! ' + foto.titulo);
		}


	},

	computed: {

		fotosComFiltro() {
			if (this.filtro) {
				let exp = new RegExp(this.filtro.trim(), 'i');
				return this.fotos.filter(foto => exp.test(foto.titulo));
			}

			return this.fotos;
		}
	},
	
	created() {


		this.$http.get('http://localhost:3000/v1/fotos')
			.then(res => res.json())
			.then(fotos => this.fotos = fotos, err => console.log(err));
	}
	
}
</script>

<style scoped>

	.centralizado {
		text-align: center;
	}

	.lista-fotos {
		list-style: none;
	}

	.lista-fotos .lista-fotos-item {
		display: inline-block;
	}

	.filtro {
		display: block;
		width: 100%;
	}

</style>
