import { useContext } from "react"
import { AuthContext } from "../context/authContext"


export const useAuthContext = ()=>{

    const context = useContext(AuthContext)

    if(!context){
        throw Error("context must be used inside an AuthCOntext Provider")
    }

    return context
   

}