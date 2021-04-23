<template>
    <button @click="disparaAcao()" class="botao" :class="this.estiloBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>

export default {

    props: {
        tipo: {
            required: true,
            type: String
        },

        rotulo: {
            required: true,
            type: String
        },

        confirmacao: {
            required: false,
            type: Boolean
        },

        estilo: {
            required: false,
            type: String
        }
    },
    
    methods: {
        disparaAcao() {

            if (this.confirmacao) {
                if (confirm('Confirma operação?')) {
                    this.$emit('botaoAtivado', new Date());
                }

                return;
            }

            this.$emit('botaoAtivado', new Date());
        }
    },

    computed: {
        estiloBotao() {
            if (this.estilo == 'perigo') return 'botao-perigo';
            return 'botao-padrao'
        }
    }
}
</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>