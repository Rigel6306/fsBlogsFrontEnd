import axios, { Axios } from "axios";
import { useState } from "react"
import { useAuthContext} from "./useAuthContext";
import { ACTIONS } from "../context/authContext";

export const useSignup = ()=>{
    const [err, setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();    
    
    const signup= async (email, password)=>{
        
        setError(null)
        setIsLoading(true)
        axios.post('/user/signup',{email, password}) .then(data=>{
            console.log(data);
            setIsLoading(false)
            dispatch({type:ACTIONS.LOG_IN, payload:data.data})

        }).catch(err=>{
           setError(err.response.data) 
           console.log(err)
        })

     }

     return {signup,err, isLoading};

}