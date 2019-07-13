export default function mapStateToProps(state) {
  return {
    data: {
      count: state.counter.count
    }
  }
}
