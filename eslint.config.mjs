import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Reglas recomendadas para TypeScript
    'eslint:recommended', // Reglas recomendadas por ESLint
    'plugin:prettier/recommended', // Configuración de Prettier
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // Puedes personalizar las reglas aquí
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    'no-console': 'warn', // Te avisa si usas console.log
    'prettier/prettier': 'error', // Fuerza las reglas de Prettier
    'no-explicit-any': 'off', // Si prefieres permitir "any", desactívalo
  },
  env: {
    node: true,
    es2020: true,
  },
});
