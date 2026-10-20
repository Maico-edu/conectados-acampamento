<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue'

const ATRASO_INICIAL_MS = 400     
const DURACAO_REVELACAO_MS = 1000  
const DURACAO_SAIDA_MS = 1100      

const CAMINHO_LOGO = '/images/logo-conectados.png'


const emit = defineEmits(['terminou'])

const revelada = ref(false)   
const podeEntrar = ref(false) 
const saindo = ref(false)    

const temporizadores = []

onMounted(() => {
  temporizadores.push(setTimeout(() => (revelada.value = true), ATRASO_INICIAL_MS))
  temporizadores.push(setTimeout(() => (podeEntrar.value = true), ATRASO_INICIAL_MS + DURACAO_REVELACAO_MS))
})
onBeforeUnmount(() => temporizadores.forEach(clearTimeout))

function entrar() {
  if (!podeEntrar.value || saindo.value) return
  saindo.value = true 
  setTimeout(() => emit('terminou'), DURACAO_SAIDA_MS)
}
</script>

<template>
  <button
    type="button"
    class="abertura"
    :class="{ 'abertura--revelada': revelada, 'abertura--saindo': saindo }"
    :style="{
      '--revelacao': DURACAO_REVELACAO_MS + 'ms',
      '--saida': DURACAO_SAIDA_MS + 'ms',
    }"
    :disabled="!podeEntrar"
    aria-label="CONECTADOS — toque para entrar no site"
    @click="entrar"
  >
    <span class="abertura__brilho" aria-hidden="true"></span>
    <span class="abertura__orbita" aria-hidden="true"></span>
    <span class="abertura__esfera" aria-hidden="true"></span>

    <img class="abertura__logo" :src="CAMINHO_LOGO" alt="CONECTADOS" />

    <!-- Indicação discreta para entrar -->
    <span class="abertura__dica" :class="{ 'abertura__dica--visivel': podeEntrar }">Toque para entrar</span>
  </button>
</template>

<style scoped>
.abertura {
  position: fixed; inset: 0; z-index: 1000; width: 100%; height: 100%; border: 0; padding: 0;
  display: grid; grid-template-columns: minmax(0, 1fr); grid-template-rows: minmax(0, 1fr);
  place-items: center; overflow: hidden; color: var(--branco);
  background:
    radial-gradient(60% 55% at 0% 70%, rgba(40, 30, 200, .38), transparent 70%),
    radial-gradient(60% 55% at 100% 70%, rgba(40, 30, 200, .38), transparent 70%),
    radial-gradient(40% 40% at 50% 0%, rgba(255, 120, 40, .25), transparent 70%),
    #07050f;
  transition: opacity var(--saida) ease, transform var(--saida) cubic-bezier(.5, 0, .2, 1);
}
.abertura:disabled { cursor: default; opacity: 1; }
.abertura:not(:disabled) { cursor: pointer; }
.abertura > * { grid-area: 1 / 1; }

.abertura { --tam: min(80vw, 62vh, 540px); }

.abertura__esfera {
  width: var(--tam); height: var(--tam); border-radius: 50%;
  background: var(--degrade-esfera);
  box-shadow:
    inset 0 0 0 2px rgba(255, 255, 255, .18),
    inset 0 0 60px rgba(255, 255, 255, .18),
    0 0 90px rgba(255, 90, 60, .35), 0 0 160px rgba(110, 60, 255, .3);
  opacity: 0; transform: scale(.9);
  transition: opacity 1s ease .1s, transform 1.4s cubic-bezier(.2, .7, .2, 1) .1s;
}
.abertura__brilho {
  width: calc(var(--tam) * 1.5); height: calc(var(--tam) * 1.5); border-radius: 50%;
  background: radial-gradient(closest-side, rgba(255, 140, 50, .28), transparent);
  opacity: 0; transition: opacity 1.4s ease;
}
/* Anel que cruza a esfera */
.abertura__orbita {
  width: calc(var(--tam) * 1.55); height: calc(var(--tam) * .32); border-radius: 50%;
  border: 2px solid rgba(255, 61, 139, .75); box-shadow: 0 0 14px rgba(255, 61, 139, .55);
  transform: rotate(-14deg) scale(.9); opacity: 0; transition: opacity 1.2s ease .4s, transform 1.6s ease .3s;
}
.abertura--revelada .abertura__esfera { opacity: 1; transform: none; }
.abertura--revelada .abertura__brilho { opacity: 1; }
.abertura--revelada .abertura__orbita { opacity: .8; transform: rotate(-14deg); }

.abertura__logo {
  width: min(calc(var(--tam) * 1.05), 86vw); height: auto; position: relative;
  filter: drop-shadow(0 2px 14px rgba(0, 0, 0, .35));
  clip-path: inset(0 100% 0 0);
}
.abertura--revelada .abertura__logo {
  clip-path: inset(0 0 0 0);
  transition: clip-path var(--revelacao) cubic-bezier(.65, 0, .35, 1);
}

.abertura__dica {
  align-self: end; margin-bottom: max(2.2rem, env(safe-area-inset-bottom)); font-size: .9rem;
  letter-spacing: .18em; color: rgba(255, 255, 255, .7); opacity: 0; transition: opacity .8s ease;
}
.abertura__dica--visivel { opacity: 1; animation: pulsar 2.4s ease-in-out infinite; }
@keyframes pulsar { 50% { opacity: .45; } }

.abertura--saindo { opacity: 0; transform: scale(1.12); pointer-events: none; }
.abertura--saindo .abertura__esfera { transform: scale(1.5); transition: transform var(--saida) ease; }

@media (max-width: 600px) { .abertura__dica { letter-spacing: .12em; } }
</style>
