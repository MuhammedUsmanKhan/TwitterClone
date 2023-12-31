export const reducer = (state, action) => {

  switch (action.type) {
    case "USER_LOGIN": {
      
      if (action.payload?.firstName
        && action.payload?.lastName
        && action.payload?.email
      ) {

        const role = (action.payload?.isAdmin) ? "admin" : "user";
        const user = {
          firstName: action.payload?.firstName,
          lastName: action.payload?.lastName,
          email: action.payload?.email
        }
      

      return { ...state, isLogin: true , role: role , user: user }
      }
    }
    case "USER_LOGOUT": {
      return { ...state, isLogin: false , role: null , user: {}}
    }
    case "CHANGE_THEME": {
      return { ...state, darkTheme: !state.darkTheme }
    }
    default: {
      return state
    }
  }
}