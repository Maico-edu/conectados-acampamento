<script setup>
/* GALERIA DE FOTOS E VÍDEOS
   - Fotos e vídeos: use os dados em src/data/conteudo.js.
   - Vídeos locais usam tipo 'arquivo'; vídeos incorporados usam tipo 'embed'.
   - O modal de imagem fecha com ESC e clique fora, e também tem suporte por teclado. */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { galeriaFotos, galeriaVideos } from '../data/conteudo.js'

const fotoAtiva = ref(null)
const videoAtivo = ref(null)

const fotos = galeriaFotos
const videos = galeriaVideos
const temFotos = computed(() => fotos.length > 0)
const temVideos = computed(() => videos.length > 0)
const fotoSelecionada = computed(() => (fotoAtiva.value !== null ? fotos[fotoAtiva.value] : null))
const videoSelecionado = computed(() => videoAtivo.value)

function abrirFoto(indice) { fotoAtiva.value = indice }
function fecharFoto() { fotoAtiva.value = null }
function abrirVideo(video) { videoAtivo.value = video }
function fecharVideo() { videoAtivo.value = null }

function aoTecla(e) {
  if (e.key === 'Escape') {
    fecharFoto()
    fecharVideo()
  }
}

onMounted(() => window.addEventListener('keydown', aoTecla))
onBeforeUnmount(() => window.removeEventListener('keydown', aoTecla))
</script>

<template>
  <section id="galeria" class="secao secao--marfim">
    <div class="secao__conteudo">
      <div class="secao__cabecalho" v-revelar>
        <hr class="linha-dourada" />
        <h2 class="secao__titulo">Fotos e momentos</h2>
        <p class="secao__intro">Registros do acampamento e dos encontros do CONECTADOS.</p>
      </div>

      <div v-if="temFotos" class="galeria__grid" aria-label="Galeria de fotos do acampamento">
        <button
          v-for="(foto, index) in fotos"
          :key="`${foto.src}-${index}`"
          type="button"
          class="galeria__item"
          @click="abrirFoto(index)"
          :aria-label="`Abrir imagem ${foto.titulo || 'do acampamento'}`"
        >
          <img :src="foto.src" :alt="foto.alt || 'Foto do acampamento'" loading="lazy" />
        </button>
      </div>
      <p v-else class="galeria__vazio">As fotos dos encontros serão adicionadas em breve.</p>

      <div class="galeria__separador" aria-hidden="true"></div>

      <div class="galeria__cabecalho-video" v-revelar>
        <h3>Vídeos</h3>
      </div>

      <div v-if="temVideos" class="videos__grid" aria-label="Galeria de vídeos do acampamento">
        <article v-for="(video, index) in videos" :key="`${video.src}-${index}`" class="video__card">
          <button type="button" class="video__miniatura" @click="abrirVideo(video)" :aria-label="`Reproduzir ${video.titulo || 'vídeo do acampamento'}`">
            <img v-if="video.poster" :src="video.poster" :alt="video.titulo || 'Miniatura do vídeo'" loading="lazy" />
            <span v-else class="video__sem-poster" aria-hidden="true">Vídeo</span>
            <span class="video__play">▶</span>
          </button>
          <h4 v-if="video.titulo">{{ video.titulo }}</h4>
        </article>
      </div>
      <p v-else class="galeria__vazio">A galeria de vídeos ficará disponível quando houver registros oficiais para compartilhar.</p>
    </div>

    <div
      v-if="fotoSelecionada"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da foto"
      @click.self="fecharFoto"
    >
      <div class="lightbox__conteudo">
        <button type="button" class="lightbox__fechar" @click="fecharFoto" aria-label="Fechar imagem">×</button>
        <img :src="fotoSelecionada.src" :alt="fotoSelecionada.alt || 'Foto ampliada do acampamento'" />
        <p v-if="fotoSelecionada.titulo">{{ fotoSelecionada.titulo }}</p>
      </div>
    </div>

    <div
      v-if="videoSelecionado"
      class="video__modal"
      role="dialog"
      aria-modal="true"
      aria-label="Reprodução do vídeo"
      @click.self="fecharVideo"
    >
      <div class="video__modal-conteudo">
        <button type="button" class="lightbox__fechar" @click="fecharVideo" aria-label="Fechar vídeo">×</button>
        <video
          v-if="videoSelecionado.tipo === 'arquivo'"
          :src="videoSelecionado.src"
          :poster="videoSelecionado.poster"
          :aria-label="videoSelecionado.titulo || 'Vídeo do acampamento'"
          controls
          autoplay
          playsinline
        ></video>
        <iframe
          v-else
          :src="videoSelecionado.src"
          :title="videoSelecionado.titulo || 'Vídeo do acampamento'"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.galeria__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}
.galeria__item {
  position: relative;
  overflow: hidden;
  border: 0;
  border-radius: var(--raio);
  padding: 0;
  cursor: pointer;
  background: var(--noite);
  aspect-ratio: 4 / 3;
  box-shadow: 0 12px 30px rgba(20, 16, 31, .08);
  transition: transform .25s ease, box-shadow .25s ease;
}
.galeria__item:hover,
.galeria__item:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 18px 32px rgba(20, 16, 31, .12);
}
.galeria__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .35s ease;
}
.galeria__item:hover img,
.galeria__item:focus-visible img {
  transform: scale(1.03);
}
.galeria__vazio {
  margin-top: 1rem;
  color: var(--texto-suave);
  font-family: var(--fonte-titulo);
  font-size: 1.1rem;
}
.galeria__separador {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--champagne), transparent);
  margin: 2.5rem 0 1.5rem;
}
.galeria__cabecalho-video { margin-bottom: 1.25rem; }
.galeria__cabecalho-video h3 {
  font-size: clamp(1.7rem, 4vw, 2.3rem);
}
.videos__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
}
.video__card {
  display: grid;
  gap: .75rem;
}
.video__miniatura {
  position: relative;
  border: 0;
  border-radius: var(--raio);
  overflow: hidden;
  background: var(--noite);
  cursor: pointer;
  padding: 0;
  box-shadow: 0 10px 25px rgba(20, 16, 31, 0.09);
  transition: transform .25s ease, box-shadow .25s ease;
}
.video__miniatura:hover,
.video__miniatura:focus-visible {
  transform: translateY(-3px);
  box-shadow: 0 18px 30px rgba(20, 16, 31, 0.12);
}
.video__miniatura img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}
.video__sem-poster {
  display: grid;
  aspect-ratio: 16 / 9;
  place-items: center;
  color: var(--branco);
  font-family: var(--fonte-titulo);
  font-size: 1.4rem;
}
.video__play {
  position: absolute;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, .9);
  color: var(--noite);
  font-size: 1.5rem;
  box-shadow: 0 10px 28px rgba(20, 16, 31, .15);
}
.video__card h4 {
  font-size: 1.05rem;
  color: var(--noite);
}
.lightbox,
.video__modal {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(20, 16, 31, .8);
}
.lightbox__conteudo,
.video__modal-conteudo {
  position: relative;
  width: min(92vw, 980px);
  max-height: 92vh;
  border-radius: var(--raio);
  overflow: hidden;
  background: var(--marfim);
  box-shadow: 0 24px 80px rgba(20, 16, 31, .28);
}
.lightbox__conteudo img {
  width: 100%;
  max-height: 78vh;
  object-fit: contain;
  background: var(--noite);
}
.lightbox__conteudo p {
  padding: 1rem 1.2rem 1.3rem;
  color: var(--texto-suave);
}
.video__modal-conteudo {
  padding: 1rem;
  background: rgba(20, 16, 31, .9);
}
.video__modal-conteudo iframe,
.video__modal-conteudo video {
  width: 100%;
  min-height: min(70vh, 560px);
  border: 0;
  border-radius: 12px;
  background: var(--noite);
}
.video__modal-conteudo video {
  display: block;
  height: auto;
  max-height: 78vh;
}
.lightbox__fechar {
  position: absolute;
  top: .8rem;
  right: .8rem;
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, .9);
  color: var(--noite);
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  z-index: 1;
}
@media (max-width: 540px) {
  .galeria__grid { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); }
  .video__play { width: 56px; height: 56px; }
}
</style>
