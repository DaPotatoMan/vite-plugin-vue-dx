import type { PluginConfigMap } from './exports'
import * as plugins from './exports'

export type VueDXConfig = Partial<{
  [K in keyof PluginConfigMap]: boolean | PluginConfigMap[K]
}>

export function VueDX(config: VueDXConfig = {}) {
  const list: any[] = []

  for (const [key, plugin] of Object.entries(plugins)) {
    const args: any = config[key as keyof VueDXConfig]

    if (args) {
      list.push(
        (plugin as any)(args === true ? undefined : args),
      )
    }
  }

  return list
}

export * from './exports'
