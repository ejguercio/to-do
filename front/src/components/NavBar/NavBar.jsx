import css from "./NavBar.module.css"
import { NavLink } from "react-router-dom";
const NavBar=()=>{

    return (
        <div className={css.navContainer}>
         <NavLink to="/" className={css.title} >TO-DO HOME</NavLink>
         <NavLink to="/form"><button className={css.button}>CREATE TASK</button></NavLink>
        </div>
    )
};
export default NavBar;
