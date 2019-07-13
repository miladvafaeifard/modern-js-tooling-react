import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import _ from 'lodash'

import IntlUtils from './intl-utils'

const intlUtils = new IntlUtils(require('config').intl)

function mapStateToProps(state) {
  const locale = _.get(state, 'intl.locales.lang', intlUtils.getDefaultLocale())
  const messages = intlUtils.getMessages(locale)
  const defaultLocale = intlUtils.getDefaultLocale()

  return {
    locale,
    messages,
    defaultLocale
  }
}

export default connect(mapStateToProps)(IntlProvider)
