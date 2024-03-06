import type { Plugin } from 'vite'
import type { PartialDeep } from 'type-fest'
import { deepMerge } from '@antfu/utils'

export function applyPlugin<
  T extends (...args: any[]) => Plugin,
  Config extends Parameters<T>[0] | false,
>(plugin: T, config?: Config, defaults?: PartialDeep<Config>, optional?: boolean): Plugin<any> | any[] {
  if (config === false || (optional && !config))
    return []

  return plugin(defaults ? deepMerge(defaults, config || {}) : config)
}
