import {Link, Outlet} from "react-router-dom"
import { useLogout } from "../hooks/useLogout";
import "../css/rootLayout.css"
import { useAuthContext } from "../hooks/useAuthContext";
const RootLayout = () => {

    const {user}= useAuthContext(); 

    const {logout} = useLogout()
    const handleClick = ()=>{
        logout()

    }

    return ( 
<>
        <div className="rootLayout">
            <h3> <Link >  Blogs </Link> </h3>
            <div className="navLinks">
            { !user &&  (  <div className="login">
                        <Link to="/login" >login</Link>
                        <Link to ="signup">SignUp</Link>
                </div> )  
            }             
            {user && (  <div className="logout">
                        <button className="logoutBtn" onClick={handleClick} > Logout </button>
                </div>) }   
            
            </div>
        </div>
        <Outlet/>

</>
     );
}
 
export default RootLayout;