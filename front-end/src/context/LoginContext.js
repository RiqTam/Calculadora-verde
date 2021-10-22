const { createContext } = require("react");

const LoginContext = createContext({
  logged: false,
  setLogged: ()=>{}
});

export default LoginContext;