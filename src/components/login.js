import { useState } from "react";
import {useLogin} from "../hooks/useLogin"

import "../css/loginSignup.css"

const Login = () => {

const {login,err, isLoading} = useLogin()

const[email,setEmail] = useState('')
const[password,setPassword] = useState('')

const handleSubmit = async(e)=>{

    e.preventDefault();

    await login(email, password);

}
    return ( 

        <div className="loginContainer">
            <form onSubmit={handleSubmit}>

                <h1>Login</h1>
                <div className="email">
                    <input type="email"  placeholder="E-Mail" required onChange={(e)=>{setEmail(e.target.value)}} 
                    value={email} />
                </div>
              <div className="password">
              <input type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}} 
                value={password} />
              </div>
              
              <div className="submit">
                 <button className="submitbtn" onSubmit={handleSubmit}>login</button>
              </div>

            </form>
 
            { err? <p>{err}</p>: <p></p>    }

        </div>
     );
}
 
export default Login