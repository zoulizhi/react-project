import { ADD_NUMBER, SUB_NUMBER } from "./type";
export const addCount = (num) => ({
  type: ADD_NUMBER,
  num,
});
export const subCount = (num) => ({
  type: SUB_NUMBER,
  num,
});
