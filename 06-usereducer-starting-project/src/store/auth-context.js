import { createContext, useEffect, useState } from "react";

const AuthContext =  createContext({
    isLoggedIn: false,
    onLogout: () => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
};


useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);
 
    return <AuthContext.Provider value={{isLoggedIn, onLogout:logoutHandler, onLogin: loginHandler}}>{props.children}</AuthContext.Provider>
}

export default AuthContext;