
const initialState = {
  home: {
    count: 0,
  }
}
const pageType="HOME_PAGE"

const mapStateToProps = (state) => {
  return state.home
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: (num) => dispatch(addCount(num)),
    subCount: (num) => dispatch(subCount(num)),
  }
}

function addCount(num) {
  return {
    type: "ADD_COUNT",
    pageType,
    num
  }
}
function subCount(num) {
  return {
    type: "SUB_COUNT",
    pageType,
    num
  }
}

export { initialState, mapStateToProps, mapDispatchToProps }