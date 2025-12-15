import type { Theme } from '../types';

export const lightTheme: Theme = {
  mode: 'light',
  primary: '#007AFF',
  secondary: '#5856D6',
  accent: '#FF2D55',
  background: '#F2F2F7',
  text: '#FF2D55',
};

export const darkTheme: Theme = {
  mode: 'dark',
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  accent: '#FF375F',
  background: '#000000',
  text: '#FFFFFF',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const applyTheme = (_: Theme) => {
  console.log('theme applied');
  // const root = document.documentElement;
  // root.style.setProperty('--color-primary', theme.primary);
  // root.style.setProperty('--color-secondary', theme.secondary);
  // root.style.setProperty('--color-accent', theme.accent);
  // root.style.setProperty('--color-background', theme.background);
  // root.style.setProperty('--color-text', theme.text);
};
