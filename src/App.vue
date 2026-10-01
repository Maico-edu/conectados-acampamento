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

// Enquanto a abertura está na tela, a página não rola
watch(aberturaVisivel, (v) => document.body.classList.toggle('sem-rolagem', v))
onMounted(() => document.body.classList.toggle('sem-rolagem', aberturaVisivel.value))
</script>

<template>
  <TelaAbertura v-if="aberturaVisivel" @terminou="aberturaVisivel = false" />

  <MenuNavegacao />

  <main>
    <Inicio />
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
