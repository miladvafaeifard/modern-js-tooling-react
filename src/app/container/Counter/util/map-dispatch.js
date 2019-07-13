import * as Actions from './../Counter.actions'

const mapDispatchToProps = dispatch => ({
  action: {
    increase: () => dispatch(Actions.increase()),
    decrease: () => dispatch(Actions.decrease())
  }
})

export default mapDispatchToProps
