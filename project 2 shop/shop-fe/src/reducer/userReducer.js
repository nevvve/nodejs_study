import * as types from "../constants/user.constants";
const initialState = {
  loading:true
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type){
    case types.REGISTER_USER_REQUEST:
      case types.LOGIN_REQUEST:
      case types.LOGIN_WITH_TOKEN_REQUEST:
        return{...state,loading:true}
      case types.LOGIN_SUCCESS:
      case types.LOGIN_WITH_TOKEN_SUCCESS:
        return{...state,loading:false,user:payload.user}
    case types.LOGIN_WITH_TOKEN_FAIL:
      return {...state,loading:false}
  }
  return state;
}

export default userReducer;
