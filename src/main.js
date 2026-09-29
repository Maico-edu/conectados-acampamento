// ARQUIVO DE ENTRADA: liga o Vue à página (index.html) e cria a animação de "aparecer ao rolar".
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// DIRETIVA v-revelar
// Uso: <h2 v-revelar>Título</h2>
// O elemento começa levemente transparente e aparece quando entra na tela.
// Para remover o efeito de um elemento, basta apagar o "v-revelar" dele.
app.directive('revelar', {
  mounted(el) {
    el.classList.add('revelar')
    // Se o navegador não tiver IntersectionObserver, mostramos tudo direto.
    if (!('IntersectionObserver' in window)) {
      el.classList.add('revelado')
      return
    }
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('revelado')
            observador.unobserve(entrada.target) // só anima uma vez
          }
        })
      },
      { threshold: 0.15 },
    )
    observador.observe(el)
  },
})

app.mount('#app')
