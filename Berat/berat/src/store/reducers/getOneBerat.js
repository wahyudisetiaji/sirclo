const initialState = {
    isLoading: false,
    data: [],
    error: []
  }
  
  const getOneReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ONE_BERAT_REQUEST" :
        return {
          ...state,
          isLoading: true,
        }
      case "GET_ONE_BERAT_ERROR" :
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
      case "GET_ONE_BERAT_SUCCESS" :
        return {
          ...state,
          isLoading: true,
          data: action.payload
        }  
      default:
        return state;
    }
  }
  
  export default getOneReducer