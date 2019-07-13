/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import React from 'react'
import { IntlProvider, intlShape } from 'react-intl'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
const messages = require('../.config/intl/en.json') // en.json

// Create the IntlProvider to retrieve context for wrapping around.
const intlProvider = new IntlProvider({ locale: 'en', messages }, {})
const { intl } = intlProvider.getChildContext()

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node) {
  return React.cloneElement(node, { intl })
}

/**
 * Export these methods.
 */
export function shallowWithIntl(node) {
  return shallow(nodeWithIntlProp(node), { context: { intl } })
}

export function mountWithIntl(node) {
  return mount(nodeWithIntlProp(node), {
    context: { intl },
    childContextTypes: { intl: intlShape }
  })
}

/**
 * @param { String } locale
 * @param { Object } messages
 */
export function createMounter(locale, messages) {
  return function mountWithConfiguredIntl(node) {
    const intlProvider = new IntlProvider({ locale, messages })
    const { intl } = intlProvider.getChildContext()

    return mount(React.cloneElement(node, { intl }), {
      context: { intl },
      childContextTypes: { intl: intlShape }
    })
  }
}
