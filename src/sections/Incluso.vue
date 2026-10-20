<script setup>
import { incluso, evento } from '../data/conteudo.js'
</script>

<template>
  <section id="incluso" class="secao">
    <div class="secao__conteudo">
      <div class="secao__cabecalho" v-revelar>
        <hr class="linha-dourada" />
        <h2 class="secao__titulo">O que está incluso</h2>
        <p class="secao__intro">Tudo isto já está no valor de {{ evento.valor }}.</p>
      </div>

      <ul class="incluso__grade">
        <li v-for="item in incluso" :key="item.texto" class="incluso__card">
          <span class="incluso__icone" aria-hidden="true">{{ item.icone }}</span>
          <span>{{ item.texto }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.incluso__grade { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; }
.incluso__card {
  display: flex; align-items: center; gap: 1rem; padding: 1.1rem 1.25rem; border: 1px solid var(--champagne-claro);
  border-radius: var(--raio); background: var(--branco); font-weight: 600; transition: border-color .25s ease, transform .25s ease;
}
.incluso__card:hover { border-color: var(--champagne); transform: translateY(-3px); }
.incluso__icone { flex: none; width: 46px; height: 46px; display: grid; place-items: center; border-radius: 50%; background: var(--marfim); font-size: 1.4rem; }
</style>
