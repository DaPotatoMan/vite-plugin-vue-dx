import { FontaineTransform } from 'fontaine'

export {
  /** Vue JSX using {@link https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx @vitejs/plugin-vue-jsx} */
  default as jsx,
} from '@vitejs/plugin-vue-jsx'

export {
  /** Vue {@link https://devtools-next.vuejs.org/ devtools} */
  default as devtools,
} from 'vite-plugin-vue-devtools'

export {
  /** Supercharge your console using {@link https://github.com/unplugin/unplugin-turbo-console unplugin-turbo-console} */
  default as console,
} from 'unplugin-turbo-console/vite'

export {
  /** Auto import components using {@link https://github.com/unplugin/unplugin-vue-components unplugin-vue-components} */
  default as components,
} from 'unplugin-vue-components/vite'

export * from 'unplugin-vue-components/resolvers'

export {
  /** Auto imports using {@link https://github.com/unplugin/unplugin-auto-import unplugin-auto-import} */
  default as imports,
} from 'unplugin-auto-import/vite'

export type ImportPresets = Parameters<typeof import('unplugin-auto-import')['default']['vite']>[0]['imports']

/** Improve font loading using {@link https://github.com/unjs/fontaine fontaine} */
export const fontaine = FontaineTransform.vite
