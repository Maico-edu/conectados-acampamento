<script setup>
/* SEÇÃO INÍCIO (HERO) — primeira parte do site principal.
   Textos, data, valor e link de inscrição vêm de src/data/conteudo.js (objeto "evento").
   A esfera colorida é feita só com CSS (veja o <style>): para mudar as cores, edite --degrade-esfera em style.css. */
import BotaoPrincipal from '../components/BotaoPrincipal.vue'
import { evento } from '../data/conteudo.js'
</script>

<template>
  <section id="inicio" class="inicio">
    <div class="inicio__esfera" aria-hidden="true"><span class="inicio__orbita"></span></div>

    <div class="inicio__conteudo">
      <hr class="linha-dourada" />
      <h1 class="inicio__titulo">{{ evento.nome }}</h1>
      <p class="inicio__subtitulo">{{ evento.subtitulo }}</p>
      <p class="inicio__frase">{{ evento.frase }}</p>

      <dl class="inicio__info">
        <div><dt>Datas</dt><dd>{{ evento.datas }}</dd></div>
        <div><dt>Valor</dt><dd>{{ evento.valor }}</dd></div>
      </dl>

      <div class="inicio__botoes">
        <!-- Botão de inscrição: usa o link definido em conteudo.js -->
        <BotaoPrincipal :href="evento.linkInscricao">Quero me inscrever</BotaoPrincipal>
        <!-- Botão secundário: rola até a seção "Sobre" (troque "#sobre" para mudar o destino) -->
        <BotaoPrincipal href="#sobre" variante="secundario">Conhecer o acampamento</BotaoPrincipal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.inicio {
  position: relative; min-height: 100svh; display: flex; align-items: center; overflow: hidden;
  padding: 6rem 1.5rem 4rem; background: linear-gradient(180deg, var(--branco), var(--marfim));
}
.inicio__conteudo { position: relative; z-index: 1; max-width: var(--largura-max); width: 100%; margin: 0 auto; }
.inicio__conteudo > * { max-width: 34rem; }
.inicio__titulo { font-size: clamp(2.6rem, 9vw, 5.5rem); letter-spacing: .06em; font-weight: 400; }
.inicio__subtitulo { margin-top: .8rem; font-family: var(--fonte-titulo); font-size: clamp(1.1rem, 2.6vw, 1.5rem); color: var(--champagne); }
.inicio__frase { margin-top: 1.4rem; font-size: 1.1rem; color: var(--texto-suave); }
.inicio__info { display: flex; gap: 2.5rem; margin: 2rem 0; }
.inicio__info dt { font-size: .85rem; color: var(--texto-suave); }
.inicio__info dd { margin: 0; font-family: var(--fonte-titulo); font-size: 1.6rem; color: var(--noite); }
.inicio__botoes { display: flex; flex-wrap: wrap; gap: 1rem; align-items: flex-start; max-width: none; }

/* Esfera decorativa (referência da logo) */
.inicio__esfera {
  position: absolute; right: -14vmin; top: 50%; width: min(82vmin, 760px); aspect-ratio: 1; border-radius: 50%;
  transform: translateY(-50%); background: var(--degrade-esfera); opacity: .9;
  box-shadow: 0 0 120px rgba(255, 100, 60, .25);
  animation: flutuar 9s ease-in-out infinite;
}
.inicio__orbita {
  position: absolute; left: -22%; right: -22%; top: 38%; height: 26%; border-radius: 50%;
  border: 2px solid rgba(255, 61, 139, .7); transform: rotate(-14deg);
}
@keyframes flutuar { 50% { transform: translateY(-52%); } }

/* No celular, a esfera vira um fundo suave atrás do texto (para o texto continuar legível) */
@media (max-width: 800px) {
  .inicio__esfera { right: -40vmin; top: 18%; opacity: .28; }
}
</style>
