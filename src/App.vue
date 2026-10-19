<script setup>
/* COMPONENTE PRINCIPAL — junta todas as partes do site na ordem em que aparecem.
   - Para mudar a ORDEM das seções, mude a ordem das linhas dentro de <main>.
   - Para REMOVER uma seção, apague a linha dela (e o item no menu, em conteudo.js).
   - A tela de abertura fica por cima do site até a pessoa clicar. Para desligá-la
     durante os testes, troque "true" por "false" na linha "aberturaVisivel". */
import { ref, watch, onMounted } from 'vue'

import TelaAbertura from './components/TelaAbertura.vue'
import MenuNavegacao from './components/MenuNavegacao.vue'
import Rodape from './components/Rodape.vue'

import Inicio from './sections/Inicio.vue'
import Galeria from './sections/Galeria.vue'
import Sobre from './sections/Sobre.vue'
import Incluso from './sections/Incluso.vue'
import OQueLevar from './sections/OQueLevar.vue'
import Programacao from './sections/Programacao.vue'
import Equipe from './sections/Equipe.vue'
import Depoimentos from './sections/Depoimentos.vue'
import PerguntasFrequentes from './sections/PerguntasFrequentes.vue'
import Localizacao from './sections/Localizacao.vue'
import Inscricao from './sections/Inscricao.vue'

const aberturaVisivel = ref(true) // true = mostra a tela de abertura ao entrar
const tema = ref('claro')

function alternarTema() {
  tema.value = tema.value === 'claro' ? 'escuro' : 'claro'
}

watch(tema, (valor) => {
  const raiz = document.documentElement
  raiz.setAttribute('data-theme', valor)
  localStorage.setItem('conectados-tema', valor)
})

watch(aberturaVisivel, (v) => document.body.classList.toggle('sem-rolagem', v))
onMounted(() => {
  const temaSalvo = localStorage.getItem('conectados-tema')
  if (temaSalvo === 'escuro' || temaSalvo === 'claro') {
    tema.value = temaSalvo
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    tema.value = 'escuro'
  }

  document.body.classList.toggle('sem-rolagem', aberturaVisivel.value)
})
</script>

<template>
  <TelaAbertura v-if="aberturaVisivel" @terminou="aberturaVisivel = false" />

  <button
    type="button"
    class="tema__botao"
    :aria-label="tema === 'claro' ? 'Ativar modo escuro' : 'Ativar modo claro'"
    :title="tema === 'claro' ? 'Tema escuro' : 'Tema claro'"
    @click="alternarTema"
  >
    <span class="tema__icone" aria-hidden="true">{{ tema === 'claro' ? '☾' : '☀' }}</span>
  </button>

  <MenuNavegacao />

  <main>
    <Inicio />
    <Galeria />
    <Sobre />
    <Incluso />
    <OQueLevar />
    <Equipe />
    <Depoimentos />
    <PerguntasFrequentes />
    <Localizacao />
    <Inscricao />
  </main>

  <Rodape />
</template>

<style scoped>
.tema__botao {
  position: fixed;
  top: 1rem;
  right: 4.8rem;
  z-index: 70;
  width: 52px;
  height: 52px;
  border: 1px solid var(--champagne-claro);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.84);
  color: var(--noite);
  box-shadow: 0 8px 22px rgba(20, 16, 31, 0.12);
  display: grid;
  place-items: center;
  backdrop-filter: blur(10px);
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
}
.tema__botao:hover,
.tema__botao:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(20, 16, 31, 0.16);
}
.tema__icone {
  font-size: 1.35rem;
  line-height: 1;
}

@media (max-width: 640px) {
  .tema__botao {
    right: 4.25rem;
    top: .85rem;
  }
}
</style>
