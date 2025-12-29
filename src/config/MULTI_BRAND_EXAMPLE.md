/\*\*

- ============================================================================
- EXEMPLO: ESTRUTURA PARA MÚLTIPLOS WHITE LABELS
- ============================================================================
-
- Este arquivo demonstra como organizar diferentes configurações
- para múltiplos clientes/marcas usando o sistema white label.
-
- ESTRUTURA DE PASTAS RECOMENDADA:
-
- src/
- ├── config/
- │ ├── index.ts (configuração padrão)
- │ └── brands/ (múltiplas marcas)
- │ ├── urbanismo.ts (cliente 1)
- │ ├── luxusimóveis.ts (cliente 2)
- │ ├── ecovia.ts (cliente 3)
- │ └── template.ts (template para novo cliente)
-
- ============================================================================
  \*/

/\*\*

- ESTRATÉGIA 1: Usar variável de ambiente para selecionar a marca
-
- 1.  Crie um arquivo .env.local na raiz do projeto:
-
- VITE_BRAND=urbanismo
-
- 2.  Em src/config/index.ts, importe dinamicamente:
-
- const brandName = import.meta.env.VITE_BRAND || 'urbanismo';
- export { THEME } from `./brands/${brandName}`;
-
- 3.  Na linha de comando, execute:
-
- npm run dev (usa URBANISMO)
- VITE_BRAND=luxusimóveis npm run dev (usa LUXUSMÓVEIS)
- VITE_BRAND=ecovia npm run build (build para ECOVIA)
  \*/

/\*\*

- ESTRATÉGIA 2: Versão simplificada da configuração
-
- Se você quiser apenas mudar nomes e cores principais,
- use esta versão mais compacta:
  \*/

export interface BrandConfig {
// Identidade
id: string;
name: string;
description: string;

// Cores
colors: {
primary: string;
primaryDark: string;
secondary: string;
};

// Contato
contact: {
phone: string;
email: string;
address: string;
};
}

/\*\*

- EXEMPLO DE TRÊS CLIENTES DIFERENTES
  \*/

export const BRANDS: Record<string, BrandConfig> = {
urbanismo: {
id: 'urbanismo',
name: 'URBANISMO',
description: 'Transformamos espaços em experiências',
colors: {
primary: '#B38B59',
primaryDark: '#9A764A',
secondary: '#1A1A1A',
},
contact: {
phone: '+55 (11) 3000-0000',
email: 'contato@urbanismo.com.br',
address: 'São Paulo, SP - Brasil',
},
},

luxusimóveis: {
id: 'luxusimóveis',
name: 'LUXUS IMÓVEIS',
description: 'Luxo e elegância em imóveis premium',
colors: {
primary: '#C4AF6F', // Ouro mais claro
primaryDark: '#A89860',
secondary: '#2C2C2C',
},
contact: {
phone: '+55 (11) 2345-6789',
email: 'contato@luxusimoveis.com.br',
address: 'Jardins, São Paulo - Brasil',
},
},

ecovia: {
id: 'ecovia',
name: 'ECOVIA',
description: 'Desenvolvimento sustentável e responsável',
colors: {
primary: '#2D7A6F', // Verde água
primaryDark: '#1E5450',
secondary: '#1A1A1A',
},
contact: {
phone: '+55 (11) 9876-5432',
email: 'contato@ecovia.com.br',
address: 'Santos, SP - Brasil',
},
},
};

/\*\*

- ESTRATÉGIA 3: Usar localStorage para selecionar marca
-
- import { useEffect, useState } from 'react';
- import { BRANDS } from '@/config/brands/multi';
-
- export function BrandSelector() {
- const [currentBrand, setCurrentBrand] = useState(() => {
-     return localStorage.getItem('selectedBrand') || 'urbanismo';
- });
-
- useEffect(() => {
-     localStorage.setItem('selectedBrand', currentBrand);
-     // Recarrega a página ou atualiza o tema
-     window.location.reload();
- }, [currentBrand]);
-
- return (
-     <select value={currentBrand} onChange={(e) => setCurrentBrand(e.target.value)}>
-       {Object.entries(BRANDS).map(([key, brand]) => (
-         <option key={key} value={key}>
-           {brand.name}
-         </option>
-       ))}
-     </select>
- );
- }
  \*/

/\*\*

- ESTRATÉGIA 4: URL Path para seleção
-
- URLs possíveis:
- - https://landing.com/urbanismo
- - https://landing.com/luxusimóveis
- - https://landing.com/ecovia
-
- Implementação:
-
- import { useEffect, useState } from 'react';
- import { BRANDS } from '@/config/brands/multi';
-
- export function App() {
- const pathSegments = window.location.pathname.split('/');
- const brandId = pathSegments[1]; // Pega primeiro segmento após /
-
- const brand = BRANDS[brandId] || BRANDS['urbanismo'];
-
- return <YourApp brand={brand} />;
- }
  \*/

/\*\*

- ESTRATÉGIA 5: Subdomain para seleção
-
- URLs possíveis:
- - https://urbanismo.landing.com
- - https://luxusimóveis.landing.com
- - https://ecovia.landing.com
-
- Implementação:
-
- const hostname = window.location.hostname;
- const subdomain = hostname.split('.')[0];
- const brand = BRANDS[subdomain] || BRANDS['urbanismo'];
  \*/

/\*\*

- DEPLOYMENT - Como fazer deploy de múltiplos white labels
-
- OPÇÃO A: Um único deploy com seleção por variável de ambiente
- - Deploy uma vez
- - Mude VITE_BRAND na plataforma (Vercel, Netlify, etc)
- - Redeploye automaticamente
-
- OPÇÃO B: Deploy separado para cada marca
- - Clone o repositório
- - Configure VITE_BRAND especificamente
- - Deploy em domínios diferentes
-
- OPÇÃO C: Deploy dinâmico com API
- - Deploy único
- - Carregue config de uma API
- - Permite mudanças sem redeploar
    \*/

/\*\*

- EXEMPLO COMPLETO: App com seleção de marca
-
- import { useState, useMemo } from 'react';
- import { BRANDS } from '@/config/brands/multi';
- import { THEME } from '@/config';
- import { ThemeProvider } from '@/context/ThemeContext';
-
- function AppWithBrandSelection() {
- const [brandId, setBrandId] = useState('urbanismo');
- const brand = BRANDS[brandId];
-
- // Cria tema customizado baseado na marca
- const customTheme = useMemo(() => ({
-     ...THEME,
-     colors: {
-       ...THEME.colors,
-       primary: brand.colors.primary,
-       primaryDark: brand.colors.primaryDark,
-       secondary: brand.colors.secondary,
-     },
-     content: {
-       ...THEME.content,
-       company: {
-         name: brand.name,
-         description: brand.description,
-       },
-     },
- }), [brand]);
-
- return (
-     <ThemeProvider theme={customTheme}>
-       <YourApp />
-     </ThemeProvider>
- );
- }
  \*/

export {};
