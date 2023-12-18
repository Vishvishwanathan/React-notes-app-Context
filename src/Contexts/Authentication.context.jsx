import React,{createContext,useState,useContext} from "react";
 
const AuthContext=createContext({
    loggedIn:false,
    setloggedIn: ()=>{}
});

export const useAuthentication = () => useContext(AuthContext);


export default function AuthenticationContextProvider ({children}){
    const [loggedIn, setLoggedIn] = useState(false);
const props = {
    loggedIn,
    setLoggedIn,
  };
    return(
        <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
    )
}