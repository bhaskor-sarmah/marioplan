const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Login Success");
      return {
        ...state,
        authError: null,
      };
    case "LOGIN_ERROR":
      console.log("Login Failed", action.err);
      return {
        ...state,
        authError: "Login Failed",
      };
    case "SIGNOUT_SUCCESS":
      console.log("Signout Success");
      return state;
    case "SIGNOUT_FAILED":
      console.log("Signout Failed", action.err);
      return state;
    default:
      return state;
  }
};

export default authReducer;
