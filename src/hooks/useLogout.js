
import { useAuthContext } from "./useAuthContext"
import { ACTIONS } from "../context/authContext"

export const useLogout = ()=>{


    const {dispatch} = useAuthContext()

    const logout = ()=>{

        dispatch({type:ACTIONS.LOG_OUT})

    }

    return {logout}


}