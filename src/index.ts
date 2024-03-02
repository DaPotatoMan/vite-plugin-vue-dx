import type { Plugin } from 'vite'

import VueDevTools, { type VitePluginVueDevToolsOptions } from 'vite-plugin-vue-devtools'
import TurboConsole from 'unplugin-turbo-console/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export interface Config {
  /** {@link https://devtools-next.vuejs.org/ devtools-next} */
  devtools: VitePluginVueDevToolsOptions

  /** {@link https://github.com/unplugin/unplugin-turbo-console unplugin-turbo-console} */
  console: import('unplugin-turbo-console/types').Options

  /** {@link https://github.com/unplugin/unplugin-auto-import unplugin-auto-import} */
  autoimport: import('unplugin-auto-import/types').Options

  /** {@link https://github.com/unplugin/unplugin-vue-components unplugin-vue-components} */
  components: import('unplugin-vue-components/types').Options
}

export default (config: Partial<Config>): Plugin[] => {
  return [
    VueDevTools(config.devtools),
    TurboConsole(config.console),
    AutoImport(config.autoimport),
    Components(config.components),
  ]
    .flatMap(e => e)
}
