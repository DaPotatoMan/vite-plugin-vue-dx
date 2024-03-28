import * as DX from './exports'

export * from './exports'

const plugins = {
  devtools: DX.devtools,
  console: DX.console,
  jsx: DX.jsx,
  imports: DX.imports,
  components: DX.components,
}

type PluginMap = typeof plugins

type Config = {
  [K in keyof PluginMap]: Parameters<PluginMap[K]>[0] | false
}

export function VueDX(config: Partial<Config>) {
  const list: any[] = []

  for (const [key, plugin] of Object.entries(plugins)) {
    const pluginArgs = config[key as keyof PluginMap]

    // Skip disabled plugin
    if (pluginArgs === false)
      continue

    list.push(
      plugin(pluginArgs as any),
    )
  }

  return list
}
