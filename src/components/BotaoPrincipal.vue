<script setup>
/* BOTÃO REUTILIZÁVEL
   Usado no início, na inscrição etc.
   - href: destino do botão. Pode ser link externo ("https://...") ou seção ("#sobre").
   - variante: 'destaque' (preenchido) | 'secundario' (só contorno) | 'claro' (para fundos escuros)
   - Se href estiver VAZIO, ao clicar mostra a mensagem "Informações em breve"
     (em vez de levar a uma página que não existe). */
import { ref } from 'vue'

const props = defineProps({
  href: { type: String, default: '' },
  variante: { type: String, default: 'destaque' },
})

const mostrarAviso = ref(false)
function avisarEmBreve() {
  mostrarAviso.value = true
  setTimeout(() => (mostrarAviso.value = false), 3500) // some depois de 3,5 segundos
}
const ehExterno = () => /^https?:\/\//.test(props.href)
</script>

<template>
  <span class="botao-area">
    <a
      v-if="href"
      :href="href"
      :target="ehExterno() ? '_blank' : null"
      :rel="ehExterno() ? 'noopener' : null"
      class="botao"
      :class="`botao--${variante}`"
    >
      <slot />
    </a>
    <button v-else type="button" class="botao" :class="`botao--${variante}`" @click="avisarEmBreve">
      <slot />
    </button>
    <span class="botao-aviso" :class="{ 'botao-aviso--claro': variante === 'claro' }" role="status" aria-live="polite">
      <template v-if="mostrarAviso">Informações em breve.</template>
    </span>
  </span>
</template>

<style scoped>
.botao-area { display: inline-flex; flex-direction: column; align-items: flex-start; gap: .5rem; }
.botao {
  display: inline-block; text-decoration: none; text-align: center; font-weight: 700; font-size: 1rem;
  padding: .95rem 2rem; border-radius: 999px; border: 1.5px solid transparent;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease;
}
.botao:hover { transform: translateY(-2px); }
.botao--destaque { background: var(--noite); color: var(--branco); box-shadow: 0 8px 24px rgba(20, 16, 31, .22); }
.botao--destaque:hover { box-shadow: 0 12px 28px rgba(20, 16, 31, .3); }
.botao--secundario { background: transparent; color: var(--noite); border-color: var(--champagne); }
.botao--secundario:hover { background: var(--champagne-claro); }
.botao--claro { background: var(--branco); color: var(--noite); }
.botao-aviso { min-height: 1.4em; font-size: .9rem; color: var(--champagne); }
.botao-aviso--claro { color: var(--champagne-claro); }
</style>
