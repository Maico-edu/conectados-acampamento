<script setup>

import { ref, computed, watch } from 'vue'
import { oQueLevar, avisoOQueLevar } from '../data/conteudo.js'

const CHAVE = 'conectados-checklist'

// "marcados" guarda os textos dos itens já separados
function carregar() {
  try { return JSON.parse(localStorage.getItem(CHAVE)) || [] } catch { return [] }
}
const marcados = ref(carregar())

watch(marcados, (v) => {
  try { localStorage.setItem(CHAVE, JSON.stringify(v)) } catch { /* sem problema se não puder salvar */ }
})

const separados = computed(() => oQueLevar.filter((i) => marcados.value.includes(i)).length)
</script>

<template>
  <section id="o-que-levar" class="secao secao--marfim">
    <div class="secao__conteudo levar">
      <div class="secao__cabecalho" v-revelar>
        <hr class="linha-dourada" />
        <h2 class="secao__titulo">O que levar</h2>
        <p class="secao__intro">Marque o que você já separou.</p>
      </div>

      <div class="levar__caixa">
        <ul class="levar__lista">
          <li v-for="item in oQueLevar" :key="item">
            <label>
              <input type="checkbox" v-model="marcados" :value="item" />
              <span class="levar__marca" aria-hidden="true"></span>
              <span class="levar__texto">{{ item }}</span>
            </label>
          </li>
        </ul>
        <p class="levar__contador" aria-live="polite">{{ separados }} de {{ oQueLevar.length }} itens separados</p>
      </div>

      <p class="levar__aviso"><strong>Importante:</strong> {{ avisoOQueLevar }}</p>
    </div>
  </section>
</template>

<style scoped>
.levar__caixa { background: var(--branco); border: 1px solid var(--champagne-claro); border-radius: var(--raio); padding: clamp(1rem, 3vw, 2rem); max-width: 640px; }
.levar__lista li + li { border-top: 1px solid var(--marfim); }
.levar label { display: flex; align-items: center; gap: .9rem; padding: .85rem .25rem; cursor: pointer; }
.levar input { position: absolute; opacity: 0; width: 1px; height: 1px; }
.levar__marca {
  flex: none; width: 24px; height: 24px; border-radius: 7px; border: 1.5px solid var(--champagne);
  display: grid; place-items: center; transition: background .2s ease;
}
.levar__marca::after { content: ''; width: 6px; height: 11px; border: solid var(--branco); border-width: 0 2px 2px 0; transform: rotate(45deg) scale(0); transition: transform .2s ease; margin-top: -2px; }
input:checked + .levar__marca { background: var(--champagne); }
input:checked + .levar__marca::after { transform: rotate(45deg) scale(1); }
input:checked ~ .levar__texto { color: var(--texto-suave); text-decoration: line-through; }
/* Foco visível ao usar o teclado */
input:focus-visible + .levar__marca { outline: 3px solid var(--roxo); outline-offset: 3px; }
.levar__contador { margin-top: 1rem; font-size: .9rem; color: var(--texto-suave); }
.levar__aviso { margin-top: 1.5rem; max-width: 640px; padding: 1rem 1.25rem; border-left: 3px solid var(--champagne); background: var(--branco); border-radius: 0 var(--raio) var(--raio) 0; }
</style>
