export const ADD_ONE = "ADD_ONE";
export const MEMORY_ADD = "MEMORY_ADD";
export const CLEAR_DATA = "CLEAR_DATA";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMORY_CLEAR = "MEMORY_CLEAR";
export const MEMORY_R = "MEMORY_R";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperator = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const clearData = () => {
  return { type: CLEAR_DATA };
};
export const memoryAdd = () => {
  return { type: MEMORY_ADD };
};

export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};

export const memoryR = () => {
  return { type: MEMORY_R };
};
