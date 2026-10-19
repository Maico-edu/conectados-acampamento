<script setup>
/* SEÇÃO INSCRIÇÃO — chamada final. Valor e link vêm de "evento" em conteudo.js.
   Sem link? O botão mostra "Informações em breve" ao ser clicado. */
import BotaoPrincipal from '../components/BotaoPrincipal.vue'
import { evento } from '../data/conteudo.js'
</script>

<template>
  <section id="inscricao" class="inscricao">
    <div class="inscricao__esfera" aria-hidden="true"></div>
    <div class="inscricao__conteudo" v-revelar>
      <h2>Inscrição — {{ evento.valor }}</h2>
      <p>Nos dias {{ evento.datas }}. Venha viver o CONECTADOS com a gente.</p>
      <BotaoPrincipal :href="evento.linkInscricao" variante="claro">Quero participar</BotaoPrincipal>
    </div>
  </section>
</template>

<style scoped>
.inscricao { position: relative; overflow: hidden; background: #14101f; color: #ffffff; padding: var(--espaco-secao) 1.5rem; text-align: center; }
.inscricao__esfera { position: absolute; left: 50%; top: 50%; width: min(90vmin, 620px); aspect-ratio: 1; border-radius: 50%; transform: translate(-50%, -50%); background: var(--degrade-esfera); opacity: .3; filter: blur(2px); }
.inscricao__conteudo { position: relative; display: grid; gap: 1.25rem; justify-items: center; max-width: 620px; margin: 0 auto; }
.inscricao h2 { color: #ffffff; font-size: clamp(2rem, 6vw, 3.4rem); }
.inscricao p { color: rgba(255, 255, 255, .85); font-size: 1.1rem; }
.inscricao :deep(.botao-area) { align-items: center; }
</style>
