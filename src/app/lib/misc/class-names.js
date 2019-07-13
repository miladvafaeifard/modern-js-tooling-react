import isString from 'lodash/isString'
import isObject from 'lodash/isObject'
import _ from 'lodash'
export default class ClassNames {
  /**
   * Helper function for conditionally creating css class strings.
   *
   * Example usage:
   *   classNames('foo', ['bar', ''], { baz: false, bob: true });
   *   => 'foo bar bob'
   *
   * @module helpers/classNames
   * @param {...(String|String[]|Object)} args
   * @returns {String}
   */

  static getClassNames(...args) {
    const classes = []
    for (const arg of args) {
      if (isString(arg)) {
        classes.push(_.kebabCase(arg))
      } else if (Array.isArray(arg)) {
        classes.push(this.getClassNames(...arg))
      } else if (isObject(arg)) {
        classes.push(
          this.getClassNames(
            ...Object.keys(arg)
              .filter(k => arg[k])
              .map(_.kebabCase)
          )
        )
      }
    }
    return classes.join(' ')
  }
}
