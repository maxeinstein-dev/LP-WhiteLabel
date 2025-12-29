/**
 * ============================================================================
 * THEME CONTEXT - Gerenciador Global de Tema
 * ============================================================================
 *
 * Fornece acesso ao tema e configurações em toda a aplicação via Context API.
 * Evita prop drilling e centraliza o acesso às configurações.
 */

import React, { createContext, ReactNode, useContext } from "react";
import { THEME } from "../config";

// Tipo do Contexto
interface ThemeContextType {
  theme: typeof THEME;
}

// Criar o Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider Component
interface ThemeProviderProps {
  children: ReactNode;
  theme?: typeof THEME;
}

/**
 * ThemeProvider - Wrapper que fornece acesso ao tema
 *
 * @example
 * ```tsx
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider({ children, theme = THEME }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

/**
 * useTheme - Hook para acessar o tema em qualquer componente
 *
 * @example
 * ```tsx
 * const { theme } = useTheme();
 * return <div style={{ color: theme.colors.primary }} />
 * ```
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }

  return context;
}

/**
 * Hooks específicos para acesso facilitado a partes do tema
 */

export function useColors() {
  return useTheme().theme.colors;
}

export function useTypography() {
  return useTheme().theme.typography;
}

export function useContent() {
  return useTheme().theme.content;
}

export function useAssets() {
  return useTheme().theme.assets;
}

export function useSEO() {
  return useTheme().theme.seo;
}
