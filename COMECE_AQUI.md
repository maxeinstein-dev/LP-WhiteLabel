# 🚀 Guia Rápido - Landing Page White Label

## ⚡ Setup Rápido (2 minutos)

### 1. Instale dependências

```bash
npm install
```

### 2. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Abre automaticamente em `http://localhost:3000` 🎉

### 3. Customize sua página

Edite apenas este arquivo:

```
src/config/config.js  ← Toda customização aqui!
```

## 📝 O que você pode customizar

### Cores e Fontes

```javascript
export const COLORS = {
  primary: "#0055FF", // Cor principal
  primaryDark: "#003399", // Hover/destaque
  secondary: "#111111", // Texto secundário
  background: "#FFFFFF", // Fundo
};

export const TYPOGRAPHY = {
  serif: "'Playfair Display', serif",
  sans: "'Inter', sans-serif",
  googleFontsUrl: "https://fonts.googleapis.com/css2?family=...",
};
```

### Conteúdo da Página

```javascript
export const CONTENT = {
  companyName: "Nome da Empresa",
  companySlogan: "Seu slogan aqui",

  hero: {
    title: "Título Principal",
    highlight: "palavra destacada",
    subtitle: "Subtítulo explicativo",
    cta: "Botão de Ação",
  },

  features: [
    {
      icon: "Trophy",
      title: "Benefício 1",
      description: "Descrição do benefício",
    },
    // ... mais features
  ],

  // ... projects, about, contact, footer
};
```

## 🎯 Fluxo de Trabalho

1. **Edite** `src/config/config.js`
2. **Salve** - navegador recarrega automaticamente
3. **Veja** as mudanças em tempo real
4. **Commit** e **push** para `main`
5. **GitHub Actions** faz deploy automático

## 📦 Deploy

### Automático (Recomendado)

Push para branch `main` → GitHub Actions → GitHub Pages

### Manual

```bash
npm run build   # Gera pasta dist/
npm run preview # Testa build localmente
```

## 📚 Documentação Completa

- [README.md](README.md) - Documentação principal
- [WHITE_LABEL_GUIDE.md](WHITE_LABEL_GUIDE.md) - Guia avançado
- [GUIA_VISUAL.md](GUIA_VISUAL.md) - Design e layout

## ✅ Checklist de Customização

- [ ] Atualizar COLORS com paleta do cliente
- [ ] Atualizar TYPOGRAPHY com fontes do cliente
- [ ] Alterar CONTENT.companyName e companySlogan
- [ ] Personalizar CONTENT.hero (título, subtítulo, CTA)
- [ ] Configurar CONTENT.features (mínimo 3)
- [ ] Adicionar CONTENT.projects (portfólio)
- [ ] Preencher CONTENT.contact (endereço, telefone, email)
- [ ] Configurar CONTENT.footer.social (redes sociais)
- [ ] Atualizar SEO (title, description, keywords)
- [ ] Testar em dispositivos móveis
- [ ] Fazer deploy

## 🆘 Ajuda Rápida

**Problema:** Página não carrega

- Verifique console do navegador (F12)
- Confirme que `npm run dev` está rodando
- Limpe cache do navegador

**Problema:** Mudanças não aparecem

- Salve o arquivo `config.js`
- Recarregue página (Ctrl+R ou Cmd+R)
- Verifique se há erros no console

**Problema:** Build falha

- Rode `npm install` novamente
- Verifique sintaxe em `config.js`
- Veja logs do GitHub Actions

## 🎨 Dicas de Design

- Use paleta de **2-3 cores** principais
- Escolha fontes que combinem (serif + sans-serif)
- Otimize imagens (máx 500KB cada)
- Teste em mobile first
- Mantenha hierarquia visual clara

## 🚀 Próximos Passos

1. Explore `src/config/USAGE_EXAMPLES.md` para exemplos práticos
2. Veja `src/config/MULTI_BRAND_EXAMPLE.md` para múltiplas marcas
3. Leia `WHITE_LABEL_GUIDE.md` para customizações avançadas

---

**Dúvidas?** Consulte o [README.md](README.md) principal

````

Altere cores e textos:

```javascript
// Cores
export const COLORS = {
  primary: "#NOVA_COR", // Cor do cliente
};

// Textos
export const CONTENT = {
  company: { name: "Seu Cliente" },
  hero: { title: "Novo Título" },
  // ...
};
````

**Pronto! Site customizado! 🚀**

---

## 📚 Documentação (Escolha Uma)

### Se Você Tem 5 minutos ⏱️

→ Leia **QUICK_START.md**

- Como customizar rapidinho
- Estrutura básica
- FAQ rápido

### Se Você Tem 15 minutos ⏱️

→ Leia **WHITE_LABEL_GUIDE.md**

- Guia completo com exemplos
- Como usar em componentes
- Troubleshooting detalhado

### Se Você Quer Tudo 📖

→ Leia **README_WHITE_LABEL.md**

- Visão geral completa
- Todos os recursos
- Deployment e performance

### Se Você Vai Implementar 🚀

→ Siga **IMPLEMENTATION_CHECKLIST.md**

- Checklist passo a passo
- Validações necessárias
- Deploy automático

---

## 🎨 O Que Você Pode Customizar

✅ **Cores** - Paleta completa de cores
✅ **Fontes** - Google Fonts customizáveis
✅ **Textos** - Todo conteúdo gerenciável
✅ **Imagens** - URLs de logos e fotos
✅ **SEO** - Metadados para buscadores
✅ **Estrutura** - Mantém-se responsiva e limpa

---

## 🔧 Tecnologia Usada

- React 18 - Framework
- TypeScript - Tipagem segura
- Tailwind CSS - Estilos
- Vite - Build rápido
- Context API - Tema global
- Google Fonts - Tipografia

---

## 📂 Arquivos Importantes

| Arquivo                        | O que é            | Quando usar                |
| ------------------------------ | ------------------ | -------------------------- |
| `src/config/index.ts`          | ⭐ PRINCIPAL       | Sempre (customização)      |
| `src/context/ThemeContext.tsx` | Context + Hooks    | Se criar componentes novos |
| `src/utils/whiteLabel.ts`      | Funções auxiliares | Quando trabalhar com cores |
| `QUICK_START.md`               | Quick start        | Primeira vez (5 min)       |
| `WHITE_LABEL_GUIDE.md`         | Guia completo      | Precisa detalhe (20 min)   |
| `IMPLEMENTATION_CHECKLIST.md`  | Checklist          | Antes de fazer deploy      |

---

## 🎯 Exemplos de Uso

### Alterar cores

Edite `COLORS` em `src/config/index.ts`:

```typescript
primary: "#FF0000",  // Mude para vermelha
```

### Alterar fontes

Configure em `TYPOGRAPHY`:

```typescript
googleFontsUrl: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
sans: "'Roboto', sans-serif",
```

### Alterar textos

Atualize `CONTENT`:

```typescript
company: {
  name: "NOVA EMPRESA",
  tagline: "Novo slogan aqui",
}
```

### Usar em Componentes

```tsx
import { useColors, useContent } from "@/context/ThemeContext";

export function MeuComponente() {
  const colors = useColors();
  const content = useContent();

  return <div style={{ color: colors.primary }}>{content.company.name}</div>;
}
```

---

## ✅ Checklist Rápido

Quando tiver customizado `src/config/index.ts`:

- [ ] Alterei `COLORS` com minhas cores
- [ ] Atualizei `TYPOGRAPHY` com minhas fontes
- [ ] Preenchi `CONTENT` com meus textos
- [ ] Configurei `ASSETS` com minhas imagens
- [ ] Defini `SEO` com meus metadados
- [ ] Executei `npm run dev` e testei
- [ ] Validei em mobile, tablet e desktop
- [ ] Fiz `npm run build` sem erros
- [ ] Pronto para fazer deploy! 🚀

---

## 🚀 Deploy (Escolha Uma Opção)

### Opção 1: Vercel (Mais Fácil) 🌟

```bash
npm install -g vercel
vercel --prod
```

1 comando e pronto!

### Opção 2: Netlify

```bash
npm run build
# Drag & drop pasta 'dist/'
```

Bem visual e fácil.

### Opção 3: Servidor Comum

```bash
npm run build
# Upload pasta 'dist/' via FTP
```

Hospedagem tradicional.

---

## 💡 Dicas Profissionais

1. **Use CSS Variables** - Compatível com Tailwind
2. **Teste em Mobile** - Responsivo é essencial
3. **Valide Cores** - Contraste para acessibilidade
4. **Otimize Imagens** - Não use imagens muito grandes
5. **Teste SEO** - Use Google Lighthouse

---

## 🆘 Problemas Comuns?

### As cores não mudaram

**Solução:** Limpe cache (Ctrl+Shift+Del) e reinicie server

### Fonte não carrega

**Solução:** Valide URL do Google Fonts

### Imagens aparecem quebradas

**Solução:** Confirme que URLs são válidas

### Preciso de mais ajuda?

→ Veja [WHITE_LABEL_GUIDE.md](./WHITE_LABEL_GUIDE.md) seção Troubleshooting

---

## 📞 Contatos Rápidos

**Dúvida sobre inicio rápido?**
→ QUICK_START.md

**Precisa de exemplos de código?**
→ src/config/USAGE_EXAMPLES.md

**Quer implementar múltiplos clientes?**
→ src/config/MULTI_BRAND_EXAMPLE.md

**Checklist completo para deploy?**
→ IMPLEMENTATION_CHECKLIST.md

---

## 🎓 Roadmap de Aprendizado

**Tempo Total Estimado: 30 minutos**

1. **5 min** - Leia QUICK_START.md
2. **10 min** - Edite src/config/index.ts
3. **5 min** - Execute `npm run dev`
4. **5 min** - Teste no navegador
5. **Pronto!** - Sua primeira versão funcionando ✨

---

## 🎉 Você Está Pronto!

A solução white label está **100% implementada** e **pronta para usar**.

### O que fazer agora:

**IMEDIATAMENTE:**

1. Abra `src/config/index.ts`
2. Customize as 5 seções (cores, fontes, conteúdo, imagens, SEO)
3. Execute `npm run dev`

**DEPOIS:**

1. Valide no navegador
2. Teste em mobile
3. Faça build: `npm run build`
4. Deploy!

---

## 🌟 Recursos Especiais

✨ **Sistema totalmente centralizado** - Um arquivo
✨ **Hooks prontos** - useColors(), useContent(), etc
✨ **Utilitários** - Gradientes, cores, etc
✨ **Documentação completa** - 6 guias inclusos
✨ **Exemplos reais** - 2 clientes + template
✨ **Multi-cliente pronto** - 5 estratégias
✨ **TypeScript** - Tipagem completa
✨ **Pronto para produção** - Sem configurações extras

---

## 📊 Estatísticas da Solução

| Métrica                  | Valor          |
| ------------------------ | -------------- |
| Arquivos de Configuração | 1              |
| Arquivos de Contexto     | 1              |
| Arquivos de Utilitários  | 1              |
| Guias de Documentação    | 6              |
| Exemplos de Clientes     | 2 + 1 template |
| Hooks Disponíveis        | 6              |
| Linhas de Documentação   | ~2,500         |
| Tempo para Começar       | ~5 minutos     |

---

## 🎯 Próximo Passo

### → Abra agora: `src/config/index.ts`

Comece a customizar! 🚀

---

**Última Atualização:** 28 de dezembro de 2025
**Status:** ✅ Completo e Pronto
**Versão:** 1.0.0
