import  { createContext, useContext } from "react"
import { tokenDto } from "../components/type"
export interface authContextType  {
    authToken : tokenDto | null,
    setAuthToken : React.Dispatch<React.SetStateAction<tokenDto | null>>
}
export const AuthContext = createContext<authContextType | any>({})
export function useAuth() {
    return useContext(AuthContext)
}