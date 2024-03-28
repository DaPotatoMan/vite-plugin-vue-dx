import { components, console, devtools, fontaine, imports, jsx } from './exports'

const plugins = { components, console, devtools, fontaine, imports, jsx }

type PluginMap = typeof plugins
type PluginOption<T> = T extends undefined ? T | boolean : T | false

export type VueDXConfig = Partial<{
  [K in keyof PluginMap]: PluginOption<Parameters<PluginMap[K]>[0]>
}>

export function VueDX(config: VueDXConfig = {}) {
  const list: any[] = []

  for (const [key, plugin] of Object.entries(plugins)) {
    const args: any = config[key as keyof PluginMap]

    if (args) {
      list.push(
        plugin(args === true ? undefined : args),
      )
    }
  }

  return list
}

export * from './exports'
