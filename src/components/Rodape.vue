<script setup>
/* RODAPÉ — logo, nome, data, redes sociais e contato.
   Os dados vêm de src/data/conteudo.js (objetos "evento" e "rodape").
   Instagram e contato só aparecem quando você preenche no conteudo.js. */
import { evento, rodape } from '../data/conteudo.js'
</script>

<template>
  <footer class="rodape">
    <div class="rodape__conteudo">
      <img class="rodape__logo" src="/images/logo-conectados.png" alt="CONECTADOS" />
      <p class="rodape__nome">{{ evento.subtitulo }}</p>
      <p class="rodape__data">{{ evento.datas }}</p>
      <p class="rodape__frase">{{ evento.fraseRodape }}</p>

      <ul class="rodape__contatos">
        <li v-if="rodape.instagram"><a :href="rodape.instagram" target="_blank" rel="noopener">Instagram</a></li>
        <li v-else class="rodape__vazio">Instagram: Conectadosjoinville</li>
        <li v-if="rodape.contato">{{ rodape.contato }}</li>
        <li v-else class="rodape__vazio">Contato: +55 47 9165-8352 (Lider Wellington)</li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.rodape { background: var(--noite); color: var(--branco); padding: 4rem 1.5rem 3rem; text-align: center; }
.rodape__conteudo { max-width: var(--largura-max); margin: 0 auto; display: grid; gap: .8rem; justify-items: center; }
.rodape__logo { width: min(320px, 70vw); height: auto; margin-bottom: 1rem; }
.rodape__nome { color: var(--champagne-claro); }
.rodape__data { font-family: var(--fonte-titulo); font-size: 1.5rem; }
.rodape__frase { max-width: 40ch; color: rgba(255, 255, 255, .7); font-style: italic; }
.rodape__contatos { display: flex; flex-wrap: wrap; justify-content: center; gap: .6rem 2rem; margin-top: 1.2rem; }
.rodape__contatos a { color: var(--branco); text-underline-offset: 4px; }
.rodape__vazio { color: rgba(255, 255, 255, .5); }
</style>
