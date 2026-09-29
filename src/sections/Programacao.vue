<script setup>
/* SEÇÃO PROGRAMAÇÃO — os dias e atividades vêm de "programacao" em conteudo.js.
   Itens com "exemplo: true" aparecem com a etiqueta "Exemplo — a preencher". */
import { programacao, avisoProgramacao } from '../data/conteudo.js'
</script>

<template>
  <section id="programacao" class="secao">
    <div class="secao__conteudo">
      <div class="secao__cabecalho" v-revelar>
        <hr class="linha-dourada" />
        <h2 class="secao__titulo">Programação</h2>
        <p class="secao__intro">{{ avisoProgramacao }}</p>
      </div>

      <div class="prog__dias">
        <article v-for="dia in programacao" :key="dia.dia" class="prog__dia" v-revelar>
          <h3>{{ dia.dia }}</h3>
          <ol class="prog__lista">
            <li v-for="(item, i) in dia.atividades" :key="i">
              <span class="prog__hora">{{ item.horario }}</span>
              <div>
                <p class="prog__atividade">{{ item.atividade }}</p>
                <p v-if="item.descricao" class="prog__descricao">{{ item.descricao }}</p>
                <span v-if="item.exemplo" class="etiqueta-exemplo">Exemplo — a preencher</span>
              </div>
            </li>
          </ol>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prog__dias { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.prog__dia { border: 1px solid var(--champagne-claro); border-radius: var(--raio); padding: 1.6rem; }
.prog__dia h3 { font-size: 1.4rem; margin-bottom: 1rem; }
.prog__lista li { display: grid; grid-template-columns: 4.2rem 1fr; gap: 1rem; padding: 1rem 0; border-top: 1px solid var(--marfim); }
.prog__hora { font-family: var(--fonte-titulo); color: var(--champagne); font-size: 1.2rem; }
.prog__atividade { font-weight: 700; }
.prog__descricao { color: var(--texto-suave); font-size: .95rem; margin: .15rem 0 .5rem; }
</style>
