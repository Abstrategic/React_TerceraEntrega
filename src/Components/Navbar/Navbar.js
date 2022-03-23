import Cartwidget from "../../Atoms/Cartwidget/Cartwidget";
import Navlist from "../../Atoms/Navlist/Navlist";
import Userlogin from "../../Atoms/Userlogin/Userlogin";
import Logo from "../../img/logo.png"
import './Navbar.css'


const Navbar = () => {
return (

    <><div className="Navbar">
        <img className= "logo" src={Logo} alt="logoAbstrategic"></img>
        <div className="container-nav">
            <ul className="Navmenu">
                <Navlist name="Móviles"/>
                <Navlist name="Ordenadores"/>
                <Navlist name="Consolas"/>
                <Navlist name="Perifericos"/>
            </ul>
            <Cartwidget number="1"/>
            <Userlogin cta ="Login"/>
        </div>
        
    </div></>
    
)
}
export default Navbar;