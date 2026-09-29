<script setup>
/* SEÇÃO EXPERIÊNCIAS E DEPOIMENTOS — carrossel responsivo.
   Os depoimentos vêm da lista "depoimentos" em conteudo.js.
   Como funciona: os cards ficam numa faixa que rola na horizontal (com "encaixe").
   Os botões ‹ › apenas rolam a faixa. No celular, a pessoa também pode deslizar o dedo. */
import { ref } from 'vue'
import { depoimentos } from '../data/conteudo.js'

const faixa = ref(null) // referência ao elemento da faixa

function rolar(direcao) {
  if (!faixa.value) return
  // rola a largura de um card (aprox.) para a esquerda (-1) ou direita (1)
  const largura = faixa.value.firstElementChild?.getBoundingClientRect().width || 300
  faixa.value.scrollBy({ left: direcao * (largura + 20), behavior: 'smooth' })
}
const inicial = (nome) => (nome ? nome.trim().charAt(0).toUpperCase() : '?')
</script>

<template>
  <section id="experiencias" class="secao">
    <div class="secao__conteudo">
      <div class="secao__cabecalho dep__topo" v-revelar>
        <div>
          <hr class="linha-dourada" />
          <h2 class="secao__titulo">Experiências</h2>
          <p class="secao__intro">O que viveram os jovens que já participaram do retiro.</p>
        </div>
        <div class="dep__controles">
          <button type="button" aria-label="Depoimento anterior" @click="rolar(-1)">‹</button>
          <button type="button" aria-label="Próximo depoimento" @click="rolar(1)">›</button>
        </div>
      </div>

      <ul ref="faixa" class="dep__faixa" tabindex="0" aria-label="Depoimentos (role para os lados)">
        <li v-for="(dep, i) in depoimentos" :key="i" class="dep__card">
          <blockquote>{{ dep.texto }}</blockquote>
          <footer>
            <img v-if="dep.foto" :src="dep.foto" :alt="`Foto de ${dep.nome}`" class="dep__foto" loading="lazy" />
            <span v-else class="dep__foto dep__foto--vazia" aria-hidden="true">{{ inicial(dep.nome) }}</span>
            <div>
              <p class="dep__nome">{{ dep.nome }}</p>
              <span v-if="dep.exemplo" class="etiqueta-exemplo">Faz Parte Do Conectados</span>
            </div>
          </footer>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.dep__topo { display: flex; justify-content: space-between; align-items: flex-end; gap: 1rem; }
.dep__controles { display: flex; gap: .6rem; flex: none; }
.dep__controles button { width: 48px; height: 48px; border-radius: 50%; border: 1px solid var(--champagne); background: var(--branco); font-size: 1.6rem; line-height: 1; color: var(--noite); transition: background .2s ease; }
.dep__controles button:hover { background: var(--champagne-claro); }

.dep__faixa { display: flex; gap: 1.25rem; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 1rem; scrollbar-width: thin; }
.dep__card { flex: 0 0 min(88%, 380px); scroll-snap-align: start; background: var(--marfim); border-radius: var(--raio); padding: 1.75rem; display: flex; flex-direction: column; justify-content: space-between; gap: 1.5rem; }
.dep__card blockquote { margin: 0; font-family: var(--fonte-titulo); font-size: 1.2rem; line-height: 1.5; }
.dep__card footer { display: flex; align-items: center; gap: .9rem; }
.dep__foto { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; flex: none; }
.dep__foto--vazia { display: grid; place-items: center; background: var(--branco); border: 1px dashed var(--champagne); color: var(--champagne); font-family: var(--fonte-titulo); }
.dep__nome { font-weight: 700; }
</style>
