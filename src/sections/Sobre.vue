<script setup>

import { sobre } from '../data/conteudo.js'
</script>

<template>
  <section id="sobre" class="secao secao--marfim">
    <div class="secao__conteudo sobre">
      <div class="secao__cabecalho" v-revelar>
        <hr class="linha-dourada" />
        <h2 class="secao__titulo">{{ sobre.titulo }}</h2>
        <p class="sobre__texto">{{ sobre.texto }}</p>
      </div>

      <ul class="sobre__lista">
        <li v-for="item in sobre.destaques" :key="item.titulo" v-revelar>
          <h3>{{ item.titulo }}</h3>
          <p>{{ item.texto }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.sobre__texto { margin-top: 1.4rem; max-width: 34ch; font-family: var(--fonte-titulo); font-size: clamp(1.3rem, 3vw, 1.9rem); line-height: 1.45; }
.sobre__lista { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; }
.sobre__lista li { border-top: 1px solid var(--champagne); padding-top: 1.1rem; }
.sobre__lista h3 { font-size: 1.3rem; }
.sobre__lista p { margin-top: .4rem; color: var(--texto-suave); }
</style>
