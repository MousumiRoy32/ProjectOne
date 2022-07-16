import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null);

    const Login = (user) =>{
        setUser(user);
    }

    const LogOut = () =>{
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user, Login, LogOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext);
}