import * as Actions from '../counter-actions'

export default function mapDispatchToProps(dispatch) {
  return {
    action: {
      increase: () => dispatch(Actions.increase()),
      decrease: () => dispatch(Actions.decrease())
    }
  }
}

// export default mapDispatchToProps
