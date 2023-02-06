import Contact from "./Contact/Contact";
import Logo from "./Logo/logo";
import Navigation from "./Navigation/navigation";
import './index.css'
const Navbar = () =>{
    return (
        <div id="navbar">
          <Logo></Logo>
          <Navigation></Navigation>
          <Contact></Contact>
        </div>
    )
}
export default Navbar;