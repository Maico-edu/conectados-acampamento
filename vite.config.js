// Configuração do Vite (a ferramenta que roda e empacota o site).
// Você normalmente NÃO precisa mexer aqui.
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
