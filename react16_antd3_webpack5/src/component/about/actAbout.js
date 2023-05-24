
const initialState = {
  about: {
    count: 0,
  }
}

const pageType="ABOUT_PAGE"



const mapStateToProps = (state) => {
  return state.about
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