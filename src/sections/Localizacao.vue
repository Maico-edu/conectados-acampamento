<script setup>

import { localizacao } from '../data/conteudo.js'
import BotaoPrincipal from '../components/BotaoPrincipal.vue'
</script>

<template>
  <section id="localizacao" class="secao">
    <div class="secao__conteudo" v-revelar>
      <hr class="linha-dourada" />
      <h2 class="secao__titulo">Localização</h2>

      <div class="local__caixa">
        <template v-if="localizacao.endereco || localizacao.linkMapa || localizacao.mapaIncorporado">
          <p v-if="localizacao.endereco" class="local__endereco">{{ localizacao.endereco }}</p>
          <iframe
            v-if="localizacao.mapaIncorporado"
            class="local__mapa"
            :src="localizacao.mapaIncorporado"
            title="Mapa do local do acampamento"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <BotaoPrincipal v-if="localizacao.linkMapa" :href="localizacao.linkMapa" variante="secundario">Abrir no mapa</BotaoPrincipal>
        </template>
        <p v-else class="local__breve">{{ localizacao.mensagemEmBreve }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.local__caixa { margin-top: 2rem; display: grid; gap: 1.25rem; justify-items: start; }
.local__breve { font-family: var(--fonte-titulo); font-size: clamp(1.3rem, 3vw, 1.8rem); padding: 2rem; border: 1px dashed var(--champagne); border-radius: var(--raio); width: 100%; max-width: 720px; }
.local__endereco { font-size: 1.15rem; }
.local__mapa { width: 100%; max-width: 900px; height: 360px; border: 0; border-radius: var(--raio); }
</style>
