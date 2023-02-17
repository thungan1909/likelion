import './index.css'
import { Link } from 'react-router-dom'
const Navigation = () =>{
    return (
       <ul id="navigation">
            <Link to="/home">
               <li>Home</li>
            </Link>
        
            <Link to="/about">
                 <li>About me</li>
            </Link>
       </ul>
    )
}
export default Navigation;