const initialState = {
    isLoading: false,
    total: [],
    error: []
}
  
  const getData= (state = initialState, action) => {
    switch (action.type) {
      case "GET_TOTAL_BERAT_REQUEST" :
        return {
          ...state,
          isLoading: true,
        }
      case "GET_TOTAL_BERAT_ERROR" :
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
      case "GET_TOTAL_BERAT_SUCCESS" :
        return {
          ...state,
          isLoading: true,
          total: action.payload
        }   
      default:
        return state;
    }
  }
  
  export default getData