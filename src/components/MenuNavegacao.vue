<script setup>
/* MENU HAMBÚRGUER
   - Botão fixo no canto superior direito que abre/fecha o painel de links.
   - Os links vêm de "itensMenu" em src/data/conteudo.js (edite lá para adicionar/remover opções).
   - Ao clicar em um link, o menu fecha e a página rola suavemente até a seção
     (a rolagem suave está em style.css: "scroll-behavior: smooth").
   - Tecla ESC também fecha o menu. */
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { itensMenu, evento } from '../data/conteudo.js'

const aberto = ref(false) // true = menu aberto

function alternar() { aberto.value = !aberto.value }
function fechar() { aberto.value = false }
function aoApertarTecla(e) { if (e.key === 'Escape') fechar() }

onMounted(() => window.addEventListener('keydown', aoApertarTecla))
onBeforeUnmount(() => window.removeEventListener('keydown', aoApertarTecla))

// Trava a rolagem da página enquanto o menu está aberto
watch(aberto, (v) => document.body.classList.toggle('sem-rolagem-menu', v))
</script>

<template>
  <header class="menu">
    <button
      class="menu__botao"
      :class="{ 'menu__botao--aberto': aberto }"
      type="button"
      :aria-expanded="aberto"
      aria-controls="painel-menu"
      :aria-label="aberto ? 'Fechar menu' : 'Abrir menu'"
      @click="alternar"
    >
      <span></span><span></span><span></span>
    </button>

    <Transition name="painel">
      <nav v-if="aberto" id="painel-menu" class="menu__painel" aria-label="Menu principal">
        <p class="menu__nome">{{ evento.nome }}</p>
        <ul>
          <li v-for="item in itensMenu" :key="item.id">
            <a :href="`#${item.id}`" @click="fechar">{{ item.texto }}</a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.menu__botao {
  position: fixed; top: 1rem; right: 1rem; z-index: 60; width: 52px; height: 52px; border-radius: 50%;
  border: 1px solid var(--champagne-claro); background: rgba(255, 255, 255, .92); backdrop-filter: blur(8px);
  display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 5px;
  box-shadow: 0 6px 20px rgba(20, 16, 31, .12);
}
.menu__botao span { width: 22px; height: 2px; background: var(--noite); transition: transform .3s ease, opacity .3s ease; }
.menu__botao--aberto span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu__botao--aberto span:nth-child(2) { opacity: 0; }
.menu__botao--aberto span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.menu__painel {
  position: fixed; inset: 0; z-index: 50; background: var(--noite); color: var(--branco);
  display: flex; flex-direction: column; justify-content: center; padding: 5rem clamp(1.5rem, 8vw, 6rem) 2rem;
  overflow-y: auto;
}
.menu__nome { font-family: var(--fonte-titulo); letter-spacing: .35em; color: var(--champagne-claro); margin-bottom: 1.5rem; font-size: .95rem; }
.menu__painel a {
  display: block; padding: .45rem 0; text-decoration: none; color: var(--branco);
  font-family: var(--fonte-titulo); font-size: clamp(1.5rem, 4.5vw, 2.2rem); transition: color .2s ease, transform .2s ease;
}
.menu__painel a:hover { color: var(--champagne-claro); transform: translateX(6px); }

/* Animação de abrir/fechar do painel */
.painel-enter-active, .painel-leave-active { transition: opacity .35s ease, clip-path .5s cubic-bezier(.6, 0, .2, 1); }
.painel-enter-from, .painel-leave-to { opacity: 0; clip-path: circle(0% at calc(100% - 2.6rem) 2.6rem); }
.painel-enter-to, .painel-leave-from { clip-path: circle(150% at calc(100% - 2.6rem) 2.6rem); }
</style>
