import { ADD_NUMBER, SUB_NUMBER } from "./type";
export const addCount = (num) => ({
  type: ADD_NUMBER,
  num,
});
export const subCount = (num) => ({
  type: SUB_NUMBER,
  num,
});

const mapStateToProps=(state)=>{
  return {count:state.count}
}

const mapDispatchToProps=(dispatch)=>({
  addCount:function(num){
    dispatch(addCount(num))
  },
  subCount:function(num){
    dispatch(subCount(num))
  }
})

export {mapStateToProps,mapDispatchToProps}