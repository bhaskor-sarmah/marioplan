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
    case "SIGNOUT_ERROR":
      console.log("Signout Failed", action.err);
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Signup Success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("Signup Error", action.err);
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
