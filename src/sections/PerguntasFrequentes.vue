<script setup>
/* SEÇÃO PERGUNTAS FREQUENTES — acordeão (clica na pergunta e a resposta abre).
   As perguntas vêm de "perguntas" em conteudo.js. Resposta vazia ('') mostra "Informações em breve". */
import { ref } from 'vue'
import { perguntas } from '../data/conteudo.js'

const abertaIndice = ref(null) // qual pergunta está aberta (null = nenhuma)
function alternar(i) { abertaIndice.value = abertaIndice.value === i ? null : i }
</script>

<template>
  <section id="perguntas" class="secao secao--marfim">
    <div class="secao__conteudo faq">
      <div class="secao__cabecalho" v-revelar>
        <hr class="linha-dourada" />
        <h2 class="secao__titulo">Perguntas frequentes</h2>
      </div>

      <div class="faq__lista">
        <div v-for="(item, i) in perguntas" :key="item.pergunta" class="faq__item" :class="{ 'faq__item--aberto': abertaIndice === i }">
          <h3>
            <button type="button" :id="`faq-botao-${i}`" :aria-expanded="abertaIndice === i" :aria-controls="`faq-resposta-${i}`" @click="alternar(i)">
              <span>{{ item.pergunta }}</span>
              <span class="faq__sinal" aria-hidden="true"></span>
            </button>
          </h3>
          <div :id="`faq-resposta-${i}`" class="faq__resposta" role="region" :aria-labelledby="`faq-botao-${i}`">
            <p>{{ item.resposta || 'Informações em breve.' }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq__lista { max-width: 760px; }
.faq__item { border-bottom: 1px solid var(--champagne-claro); }
.faq__item h3 { font-family: var(--fonte-texto); font-size: 1rem; }
.faq__item button { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 1rem; text-align: left; background: none; border: 0; padding: 1.2rem 0; font-weight: 700; font-size: 1.05rem; color: var(--noite); }
.faq__sinal { position: relative; flex: none; width: 16px; height: 16px; }
.faq__sinal::before, .faq__sinal::after { content: ''; position: absolute; left: 0; top: 7px; width: 16px; height: 2px; background: var(--champagne); transition: transform .3s ease; }
.faq__sinal::after { transform: rotate(90deg); }
.faq__item--aberto .faq__sinal::after { transform: rotate(0); }
/* Truque para animar a altura: a linha da grade vai de 0fr (fechado) para 1fr (aberto) */
.faq__resposta { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s ease; }
.faq__resposta > p { overflow: hidden; color: var(--texto-suave); }
.faq__item--aberto .faq__resposta { grid-template-rows: 1fr; }
.faq__item--aberto .faq__resposta > p { padding-bottom: 1.2rem; }
</style>
