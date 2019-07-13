export function functionCheckCustomizer(objValue, othValue) {
  if (typeof objValue === 'function' && objValue.name === othValue.name) {
    return true
  }
}
