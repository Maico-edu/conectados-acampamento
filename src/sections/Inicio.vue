<script setup>
/* SEÇÃO INÍCIO (HERO) — primeira parte do site principal.
   Textos, data, valor e link de inscrição vêm de src/data/conteudo.js (objeto "evento").
   A esfera colorida é feita só com CSS (veja o <style>): para mudar as cores, edite --degrade-esfera em style.css. */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import BotaoPrincipal from '../components/BotaoPrincipal.vue'
import { compartilhamento, evento } from '../data/conteudo.js'

const tempoRestante = ref({ dias: 0, horas: 0, minutos: 0, segundos: 0 })
let temporizador = null

function atualizarContador() {
  const alvo = new Date(evento.contagemRegressiva.alvo)
  const diferenca = Math.max(0, alvo.getTime() - Date.now())

  if (diferenca === 0) {
    tempoRestante.value = { dias: 0, horas: 0, minutos: 0, segundos: 0 }
    return
  }

  const totalSegundos = Math.floor(diferenca / 1000)
  const dias = Math.floor(totalSegundos / 86400)
  const horas = Math.floor((totalSegundos % 86400) / 3600)
  const minutos = Math.floor((totalSegundos % 3600) / 60)
  const segundos = totalSegundos % 60

  tempoRestante.value = { dias, horas, minutos, segundos }
}

function compartilharSite() {
  const url = (evento.siteUrl || compartilhamento.url || window.location.href).trim()
  const mensagem = `${compartilhamento.mensagem} ${url}`

  if (navigator.share) {
    navigator.share({ title: evento.nome, text: compartilhamento.mensagem, url }).catch(() => {})
    return
  }

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(mensagem)}`
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}

onMounted(() => {
  atualizarContador()
  temporizador = window.setInterval(atualizarContador, 1000)
})

onBeforeUnmount(() => {
  if (temporizador) window.clearInterval(temporizador)
})
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

      <div class="inicio__contador" aria-live="polite" aria-label="Contagem regressiva para o acampamento">
        <span class="inicio__contador-label">Abertura em</span>
        <div class="inicio__contador-grid">
          <span><strong>{{ String(tempoRestante.dias).padStart(2, '0') }}</strong><small>Dias</small></span>
          <span><strong>{{ String(tempoRestante.horas).padStart(2, '0') }}</strong><small>Horas</small></span>
          <span><strong>{{ String(tempoRestante.minutos).padStart(2, '0') }}</strong><small>Minutos</small></span>
          <span><strong>{{ String(tempoRestante.segundos).padStart(2, '0') }}</strong><small>Segundos</small></span>
        </div>
      </div>
      <p class="inicio__convite">Chame um amigo para viver essa experiência com você e compartilhe o acampamento!</p>

      <div class="inicio__botoes">
        <BotaoPrincipal :href="evento.linkInscricao">Quero me inscrever</BotaoPrincipal>
        <BotaoPrincipal href="#sobre" variante="secundario">Conhecer o acampamento</BotaoPrincipal>
        <button type="button" class="inicio__compartilhar" @click="compartilharSite">Compartilhar</button>
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
.inicio__contador {
  margin: 0 0 2rem; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid rgba(184, 148, 90, .38);
  background: #ffffff; box-shadow: 0 12px 28px rgba(20,16,31,.04);
}
.inicio__contador-label { display: block; margin-bottom: .7rem; font-size: .76rem; letter-spacing: .12em; text-transform: uppercase; color: #6b6577; }
.inicio__contador-grid {
  display: grid; grid-template-columns: repeat(4, minmax(64px, 1fr)); gap: .65rem;
}
.inicio__contador-grid span {
  display: grid; gap: .15rem; justify-items: center; padding: .7rem .4rem; border-radius: 14px;
  background: linear-gradient(180deg, rgba(184, 148, 90, .1), rgba(184, 148, 90, .03));
  border: 1px solid rgba(184, 148, 90, .22);
}
.inicio__contador-grid strong {
  font-family: var(--fonte-titulo); font-size: clamp(1.5rem, 4vw, 2.2rem); color: #14101f;
}
.inicio__contador-grid small {
  text-transform: uppercase; letter-spacing: .08em; font-size: .68rem; color: #6b6577;
}
.inicio__convite { margin: -1rem 0 2rem; max-width: 34rem; color: var(--texto-suave); font-size: .95rem; }
.inicio__botoes { display: flex; flex-wrap: wrap; gap: 1rem; align-items: flex-start; max-width: none; }
.inicio__compartilhar {
  display: inline-flex; align-items: center; justify-content: center; min-height: 3.1rem; padding: .95rem 1.4rem; border-radius: 999px;
  border: 1px solid var(--champagne); background: var(--branco); color: var(--noite); font-weight: 700; transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
}
.inicio__compartilhar:hover, .inicio__compartilhar:focus-visible { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(20,16,31,.1); background: var(--champagne-claro); }

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

@media (max-width: 800px) {
  .inicio__esfera { right: -40vmin; top: 18%; opacity: .28; }
  .inicio__contador-grid { grid-template-columns: repeat(2, minmax(72px, 1fr)); }
}
</style>
