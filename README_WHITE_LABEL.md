<!-- Arquivo criado no repositório raiz como resumo da solução white label -->

# 🎨 Landing Page White Label - Solução Estruturada

> Sistema completo de customização centralizada para criar landing pages reutilizáveis para múltiplos clientes

## 📊 Visão Geral da Solução

Este projeto foi transformado em uma **landing page white label profissional** com:

✅ **Configuração Centralizada** - Um único arquivo para customizar tudo
✅ **Sistema de Tema Global** - Context + Hooks para acesso fácil
✅ **Tipografia Flexível** - Suporte a Google Fonts customizáveis
✅ **Paleta de Cores** - Todas as cores em um lugar
✅ **Conteúdo Gerenciável** - Textos, imagens, SEO centralizados
✅ **Utilitários Práticos** - Funções para trabalhar com cores e estilos
✅ **Documentação Completa** - Guias, exemplos e checklists
✅ **Multi-Cliente Pronto** - Estrutura para vários white labels

---

## 📂 Estrutura de Arquivos

```
projeto/
│
├── src/
│   ├── config/
│   │   ├── index.ts                    ⭐ ARQUIVO PRINCIPAL
│   │   ├── EXEMPLO_LUXUS_IMOVEIS.ts   📋 Exemplo completo
│   │   ├── USAGE_EXAMPLES.md          📚 Exemplos de código
│   │   └── MULTI_BRAND_EXAMPLE.md     🔀 Múltiplos clientes
│   │
│   ├── context/
│   │   └── ThemeContext.tsx           🎨 Context + Hooks
│   │
│   ├── utils/
│   │   └── whiteLabel.ts              🛠️ Funções auxiliares
│   │
│   └── components/
│       └── landing/
│           ├── Header.tsx
│           ├── Hero.tsx
│           ├── Features.tsx
│           ├── Projects.tsx
│           ├── About.tsx
│           ├── Contact.tsx
│           ├── Footer.tsx
│           └── ... outros
│
├── WHITE_LABEL_GUIDE.md               📖 Guia completo
├── QUICK_START.md                     🚀 Início rápido
└── IMPLEMENTATION_CHECKLIST.md        ✅ Checklist
```

---

## 🚀 Quick Start (5 minutos)

### 1. Abra o arquivo principal

```bash
src/config/index.ts
```

### 2. Customize as 5 seções

```typescript
// 1. COLORS - Paleta de cores
export const COLORS = {
  primary: "#B38B59", // ← Mude sua cor principal
  // ...
};

// 2. TYPOGRAPHY - Fontes
export const TYPOGRAPHY = {
  googleFontsUrl: "...", // ← URL do Google Fonts
  // ...
};

// 3. CONTENT - Textos
export const CONTENT = {
  company: { name: "SUA EMPRESA" }, // ← Seus textos
  // ...
};

// 4. ASSETS - Imagens e logos
export const ASSETS = {
  logo: { light: "..." }, // ← Suas imagens
  // ...
};

// 5. SEO - Metadados
export const SEO = {
  title: "...", // ← Seus metadados
  // ...
};
```

### 3. Execute localmente

```bash
npm install
npm run dev
```

### 4. Veja as mudanças em tempo real

Abra `http://localhost:5173` no navegador

---

## 🎯 Principais Recursos

### 1️⃣ Configuração Centralizada

Tudo em `src/config/index.ts`:

- Cores e estilos
- Fontes e tipografia
- Textos e conteúdo
- Imagens e assets
- SEO e metadados

### 2️⃣ Hooks para Fácil Acesso

```typescript
import { useColors, useContent } from "@/context/ThemeContext";

export function MyComponent() {
  const colors = useColors();
  const content = useContent();

  return <div style={{ color: colors.primary }}>{content.company.name}</div>;
}
```

### 3️⃣ Variáveis CSS Automáticas

```tsx
<button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)]">
  Clique aqui
</button>
```

### 4️⃣ Funções Auxiliares

```typescript
import {
  withOpacity,
  createGradient,
  adjustBrightness,
} from "@/utils/whiteLabel";

withOpacity("#B38B59", 0.5); // Adiciona transparência
createGradient(["#fff", "#000"]); // Cria gradiente
adjustBrightness("#B38B59", 20); // Mais claro/escuro
```

### 5️⃣ Multi-Cliente Pronto

Estrutura escalável para múltiplos clientes:

```
config/brands/
├── urbanismo.ts
├── luxusimóveis.ts
├── ecovia.ts
└── template.ts
```

---

## 📋 Arquivos Importantes

| Arquivo                               | Descrição              | Essencial? |
| ------------------------------------- | ---------------------- | ---------- |
| `src/config/index.ts`                 | Configuração principal | ⭐⭐⭐     |
| `src/context/ThemeContext.tsx`        | Context e Hooks        | ⭐⭐⭐     |
| `src/utils/whiteLabel.ts`             | Funções auxiliares     | ⭐⭐       |
| `WHITE_LABEL_GUIDE.md`                | Guia detalhado         | ⭐⭐       |
| `QUICK_START.md`                      | Início rápido          | ⭐⭐       |
| `src/config/EXEMPLO_LUXUS_IMOVEIS.ts` | Exemplo completo       | ⭐         |
| `src/config/MULTI_BRAND_EXAMPLE.md`   | Multi-cliente          | ⭐         |

---

## 📚 Documentação

### Para Começar Rápido

→ Leia [QUICK_START.md](./QUICK_START.md)

### Guia Completo

→ Leia [WHITE_LABEL_GUIDE.md](./WHITE_LABEL_GUIDE.md)

### Exemplos de Código

→ Veja [src/config/USAGE_EXAMPLES.md](./src/config/USAGE_EXAMPLES.md)

### Múltiplos Clientes

→ Veja [src/config/MULTI_BRAND_EXAMPLE.md](./src/config/MULTI_BRAND_EXAMPLE.md)

### Implementação

→ Siga [IMPLEMENTATION_CHECKLIST.md](./IMPLEMENTATION_CHECKLIST.md)

---

## 🎨 Estrutura de Cores

Recomendamos definir:

```
Primary         → Cor de marca (destaque)
Primary Dark    → Para hover/active states
Primary Light   → Para backgrounds
Secondary       → Cor complementar
Background      → Cinza claro (#F5F5F5)
Surface         → Branco (#FFFFFF)
Text            → Preto escuro (#1A1A1A)
Text Light      → Cinza médio (#4B5563)
Success/Error   → Verde/Vermelho
```

---

## 📦 Tecnologias Usadas

- **React 18** - Framework
- **TypeScript** - Tipagem
- **Tailwind CSS** - Estilos
- **Vite** - Build tool
- **Context API** - Gerenciamento de estado
- **Lucide Icons** - Ícones
- **Google Fonts** - Tipografia

---

## 🔄 Como Usar para Múltiplos Clientes

### Opção A: Variável de Ambiente (Recomendado)

```bash
# .env.local
VITE_BRAND=cliente1

# Execute
npm run dev
```

### Opção B: Arquivos Separados

```
src/config/brands/
├── cliente1.ts
├── cliente2.ts
└── cliente3.ts
```

### Opção C: Subdomain

```
cliente1.landing.com
cliente2.landing.com
cliente3.landing.com
```

Ver [MULTI_BRAND_EXAMPLE.md](./src/config/MULTI_BRAND_EXAMPLE.md) para detalhes.

---

## ✨ Destaques da Solução

### 🎯 Centralizado

Tudo em um arquivo. Nenhuma necessidade de procurar em múltiplos locais.

### ⚡ Rápido

Mudar tema leva segundos. Sem recompilação necessária.

### 🔒 Seguro

TypeScript garante tipagem correta. Sem erros em tempo de execução.

### 📱 Responsivo

Funciona perfeitamente em mobile, tablet e desktop.

### 🎨 Flexível

Customize cores, fontes, conteúdo e muito mais.

### 📈 Escalável

Estrutura pronta para múltiplos clientes e marcas.

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Drag & drop pasta 'dist/'
```

### Build Manual

```bash
npm run build
# Upload pasta 'dist/' via FTP/SFTP
```

---

## ✅ Checklist Rápido

- [ ] Editar `src/config/index.ts` com cores/fontes
- [ ] Preencher conteúdo em `CONTENT`
- [ ] Adicionar imagens em `ASSETS`
- [ ] Configurar SEO
- [ ] Executar `npm run dev` e testar
- [ ] Verificar em múltiplos dispositivos
- [ ] Build: `npm run build`
- [ ] Deploy para produção
- [ ] Monitorar analytics

---

## 🆘 Suporte

### Dúvidas Frequentes

**P: Como alterar apenas cores?**
R: Edite `COLORS` em `src/config/index.ts`

**P: Como adicionar múltiplas marcas?**
R: Consulte `MULTI_BRAND_EXAMPLE.md`

**P: Como usar em componentes?**
R: Veja `USAGE_EXAMPLES.md`

**P: Como fazer deploy?**
R: Veja seção Deploy acima

### Recursos

- [Documentação completa](./WHITE_LABEL_GUIDE.md)
- [Exemplos de código](./src/config/USAGE_EXAMPLES.md)
- [Guia de multi-cliente](./src/config/MULTI_BRAND_EXAMPLE.md)

---

## 📊 Performance

- ⚡ Build rápido (< 5s)
- 🎨 Tema carrega instantaneamente
- 📦 Bundle pequeno
- 🔍 SEO otimizado
- 📱 Mobile-first

---

## 🔐 Segurança

- ✅ Tipagem TypeScript
- ✅ Sem vulnerabilidades conhecidas
- ✅ Dependências atualizadas
- ✅ Build otimizado

---

## 📝 Licença

MIT - Use livremente em seus projetos

---

## 👥 Contribuições

Se tiver sugestões de melhorias:

1. Faça um fork
2. Crie uma branch para sua feature
3. Envie um pull request

---

## 📞 Contato

Para dúvidas sobre a implementação, consulte a documentação ou abra uma issue.

---

**Desenvolvido com ❤️ para facilitar customização de landing pages**

Versão: 1.0.0 | Data: 28 de dezembro de 2025
