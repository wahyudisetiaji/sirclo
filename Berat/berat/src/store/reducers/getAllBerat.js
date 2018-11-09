const initialState = {
    isLoading: false,
    data: [],
    error: []
}
  
  const getData= (state = initialState, action) => {
    switch (action.type) {
      case "GET_ALL_BERAT_REQUEST" :
        return {
          ...state,
          isLoading: true,
        }
      case "GET_ALL_BERAT_ERROR" :
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
      case "GET_ALL_BERAT_SUCCESS" :
        return {
          ...state,
          isLoading: true,
          data: action.payload
        }   
      default:
        return state;
    }
  }
  
  export default getData