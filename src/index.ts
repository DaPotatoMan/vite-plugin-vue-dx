import * as DX from './exports'
import { type Plugin, applyPlugin } from './utils'

export * from './exports'

export interface Config {
  /** {@link https://devtools-next.vuejs.org/ devtools-next} */
  devtools: import('vite-plugin-vue-devtools').VitePluginVueDevToolsOptions

  /** {@link https://github.com/unplugin/unplugin-turbo-console unplugin-turbo-console} */
  console: import('unplugin-turbo-console/types').Options

  /** {@link https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx @vitejs/plugin-vue-jsx} */
  jsx: import('@vitejs/plugin-vue-jsx').Options | false

  /** {@link https://github.com/unplugin/unplugin-auto-import unplugin-auto-import} */
  autoimport: import('unplugin-auto-import/types').Options | false

  /** {@link https://github.com/unplugin/unplugin-vue-components unplugin-vue-components} */
  components: import('unplugin-vue-components/types').Options
}

export default (config: Partial<Config>): Plugin[] => {
  return [
    DX.VueDevTools(config.devtools),
    DX.TurboConsole(config.console),
    applyPlugin(DX.VueJSX, config.jsx, undefined, true),
    applyPlugin(DX.Imports, config.autoimport, undefined, true),
    applyPlugin(DX.Components, config.components, undefined, true),
  ]
    .flatMap(e => e)
}
