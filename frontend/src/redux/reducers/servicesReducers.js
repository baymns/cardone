

export default (state = [], action) => {
  switch (action.type) {
    case "OUTPUT_WORD":
      return {
        ...state,
        data: action.payload,
      };
    
    default:
      return state;
  }
};
