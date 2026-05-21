import { createContext, useState, useContext, useEffect, useRef } from "react";
import API from "../api/api";

type LoginContext = {
    user:string | null,
    accessToken: string | null,
    login: (creds:{[x:string]:any, username:string, password:string}) => Promise<any>,
    logout: ()=> Promise<any>
}
const AuthContext = createContext<LoginContext | null>(null);
export function AuthProvider({children}:{children:React.ReactNode}){
    const [user, setUser] = useState<string | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const refreshInterval = useRef(60);

    const startRefresh = () => {
        refreshInterval.current = setInterval(async()=>{
            await refreshAccessToken();
        }, 14 * 60 * 1000)
    }

    const refreshAccessToken = async () =>{
        try{
            const res = await API.refresh();
            setAccessToken(res.access)
            return res.access;
        }catch(e){
            logout();
        }
    }
    const login = async(creds:{[x:string]:any, username:string, password:string}) => {
        const res = await API.login(creds);
        if(res.error) throw new Error(res.error.code)
        setUser(creds.username);
        setAccessToken(res.access!);
        startRefresh();
        API.accessToken = res.access!;
    }

    const logout = async() => {
        await API.logout();
        setAccessToken(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, accessToken, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx  // TypeScript now knows ctx is AuthContextType, not null
}