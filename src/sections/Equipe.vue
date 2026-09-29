<script setup>
/* SEÇÃO NOSSA EQUIPE — as pessoas vêm da lista "equipe" em conteudo.js.
   Sem foto? Aparece um círculo com a inicial. Com foto: coloque o caminho em "foto". */
import { equipe } from '../data/conteudo.js'

// Pega a primeira letra do nome (para o círculo quando não há foto)
const inicial = (nome) => (nome ? nome.trim().charAt(0).toUpperCase() : '?')
</script>

<template>
  <section id="equipe" class="secao secao--marfim">
    <div class="secao__conteudo">
      <div class="secao__cabecalho" v-revelar>
        <hr class="linha-dourada" />
        <h2 class="secao__titulo">Nossa equipe</h2>
        <p class="secao__intro">Quem está cuidando de cada detalhe do CONECTADOS.</p>
      </div>

      <ul class="equipe__grade">
        <li v-for="(pessoa, i) in equipe" :key="i" class="equipe__card">
          <img v-if="pessoa.foto" :src="pessoa.foto" :alt="`Foto de ${pessoa.nome}`" class="equipe__foto" loading="lazy" />
          <div v-else class="equipe__foto equipe__foto--vazia" aria-hidden="true">{{ inicial(pessoa.nome) }}</div>
          <h3>{{ pessoa.nome }}</h3>
          <p class="equipe__funcao">{{ pessoa.funcao }}</p>
          <p class="equipe__descricao">{{ pessoa.descricao }}</p>
          <span v-if="pessoa.exemplo" class="etiqueta-exemplo">Espaço reservado</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.equipe__grade { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1.5rem; }
.equipe__card { background: var(--branco); border-radius: var(--raio); padding: 1.75rem; text-align: center; display: grid; justify-items: center; gap: .4rem; border: 1px solid var(--champagne-claro); transition: transform .25s ease; }
.equipe__card:hover { transform: translateY(-4px); }
.equipe__foto { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: .6rem; }
.equipe__foto--vazia { display: grid; place-items: center; background: var(--marfim); border: 1px dashed var(--champagne); font-family: var(--fonte-titulo); font-size: 2.4rem; color: var(--champagne); }
.equipe__funcao { color: var(--champagne); font-weight: 600; }
.equipe__descricao { color: var(--texto-suave); font-size: .95rem; margin-bottom: .5rem; }
</style>
