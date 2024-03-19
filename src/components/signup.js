import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

import "../css/loginSignup.css"
const Signup = () => {

const[email,setEmail] = useState('')
const[password,setPassword] = useState('')
const {signup, err, isLoading} = useSignup();


const handleSubmit = async(e)=>{

    e.preventDefault();

    await signup(email, password);

}
    return ( 
        <div className="loginContainer">
        <form onSubmit={handleSubmit}>

            <h1>Signup</h1>
            <div className="email">
                <input type="email"  placeholder="E-Mail" required onChange={(e)=>{setEmail(e.target.value)}} 
                value={email} />
            </div>
          <div className="password">
          <input type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}} 
            value={password} />
          </div>
          
          <div className="submit">
             <button className="submitbtn" onSubmit={handleSubmit}>Signup</button>
          </div>

        </form>

        { err? <p>{err}</p>: <p></p>    }

    </div>
     );
}
 
export default Signup