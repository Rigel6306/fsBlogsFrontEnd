import { createContext, useReducer } from "react";
    export const ACTIONS = {
        SIGNUP:"signup",
        LOG_OUT:'log-out',
        LOG_IN:"log-in"
    }
    export const AuthContext = createContext();
    export const reducer=(state,actions)=>{
        switch(actions.type){

            case ACTIONS.LOG_IN:
                return {user:actions.payload}

            case ACTIONS.LOG_OUT:
                return {user:null}

            default : return state
        }
    }
    export const AuthContextProvider= ({children})=>{
        const [state,dispatch] = useReducer(reducer,{user:null})
        console.log("AuthContext state: ", state)

        return(
            <AuthContext.Provider value={{...state, dispatch}}>
                {children}
            </AuthContext.Provider>
        )

    }
