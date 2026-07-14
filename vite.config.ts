import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'
import path from 'path'

// O array deve ser substituído por uma chamada à API/Base de Dados no processo de build
// para garantir que o sitemap nunca fica dessincronizado com os projetos reais.
const portfolioProjects = [
  'cidade-nova', 
  'estacao-tortosendo', 
  'faculdade-medicina', 
  'erpi-do-peso', 
  'quinta-do-pinheiro'
];

const dynamicRoutes = portfolioProjects.map(id => `/portfolio/${id}`);

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://www.virgilioroque.com',
      dynamicRoutes: dynamicRoutes,
      // O Google sinaliza erros se o sitemap contiver rotas que disparam redirecionamentos (301/302).
      exclude: ['/sobre'], 
      generateRobotsTxt: true
    })
  ]
})