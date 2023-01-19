import { IntlShape, DataSource } from 'jimu-core'

/**
 * Toggle items in an array
 */
export const toggleItemInArray = (item, items = []) => items.includes(item) ? items.filter(i => i !== item) : [...items, item]

export interface DataSourceMap {
  [dataSourceId: string]: DataSource
}

export type GetI18nMessageType = (id: string, options?: {messages?: any, values?: any}) => string
/**
 * A factory to create a function of getting i18n message
 */
export function createGetI18nMessage (options: {intl: IntlShape, defaultMessages?: any}) {
  const { intl, defaultMessages = {} } = options || {}
  const getI18nMessage: GetI18nMessageType = (id, options) => {
    const { messages, values } = options || {}
    return intl.formatMessage({ id, defaultMessage: (messages || defaultMessages)[id] }, values)
  }
  return getI18nMessage
}
