/\*\*

- ============================================================================
- EXEMPLO DE USO - SISTEMA WHITE LABEL
- ============================================================================
-
- Este arquivo mostra como utilizar o sistema de tema e customização
- em seus componentes.
  \*/

/\*\*

- EXEMPLO 1: Acessar o tema via Hook useTheme()
-
- import { useTheme } from '@/context/ThemeContext';
-
- export function MyComponent() {
- const { theme } = useTheme();
-
- return (
-     <div style={{ color: theme.colors.primary }}>
-       {theme.content.company.name}
-     </div>
- );
- }
  \*/

/\*\*

- EXEMPLO 2: Usar hooks específicos para partes do tema
-
- import { useColors, useContent } from '@/context/ThemeContext';
-
- export function HeroSection() {
- const colors = useColors();
- const content = useContent();
-
- return (
-     <section style={{ backgroundColor: colors.background }}>
-       <h1 style={{ color: colors.primary }}>
-         {content.company.name}
-       </h1>
-     </section>
- );
- }
  \*/

/\*\*

- EXEMPLO 3: Usar utilitários para trabalhar com cores
-
- import { withOpacity, createGradient } from '@/utils/whiteLabel';
- import { useColors } from '@/context/ThemeContext';
-
- export function Button() {
- const colors = useColors();
-
- return (
-     <button
-       style={{
-         background: createGradient([colors.primary, colors.primaryDark]),
-         color: withOpacity(colors.textInverse, 0.9),
-       }}
-     >
-       Clique aqui
-     </button>
- );
- }
  \*/

/\*\*

- EXEMPLO 4: Em arquivos TSX com TypeScript
-
- import React from 'react';
- import { useContent } from '@/context/ThemeContext';
-
- interface CardProps {
- title: string;
- description: string;
- }
-
- export function Card({ title, description }: CardProps) {
- const content = useContent();
-
- return (
-     <div className="card">
-       <h2>{title}</h2>
-       <p>{description}</p>
-     </div>
- );
- }
  \*/

/\*\*

- EXEMPLO 5: Integração com Tailwind CSS
-
- Você pode usar as variáveis CSS definidas no App.tsx
- junto com classes do Tailwind:
-
- <button className="bg-[var(--primary)] text-[var(--text-inverse)] hover:bg-[var(--primary-dark)]">
- Botão Customizado
- </button>
  */

/\*\*

- CHECKLIST: Como customizar a landing page
-
- ✅ PASSO 1: Edite src/config/index.ts
- - Altere COLORS (paleta de cores)
- - Customize TYPOGRAPHY (fontes)
- - Atualize CONTENT (textos e mensagens)
- - Configure ASSETS (logos e imagens)
- - Defina SEO (metadados)
-
- ✅ PASSO 2: Execute o projeto
- npm install
- npm run dev
-
- ✅ PASSO 3: Verifique se as mudanças foram aplicadas
- - Cores aparecem corretamente
- - Fontes são carregadas
- - Textos aparecem em português/idioma correto
-
- ✅ PASSO 4: Customize componentes específicos se necessário
- - Use useTheme() ou hooks específicos
- - Mantenha a consistência de cores
-
- ✅ PASSO 5: Build para produção
- npm run build
- npm run preview
  \*/

export {};
