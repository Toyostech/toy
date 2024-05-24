import React, {Fragment} from "react";
import Headerstyle from './Header.module.css'
import mealimage from '../../assets/bgi.jpg'
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
    return <Fragment>
        <header className={Headerstyle.header}>
            <h1>ReactMeal</h1>
            <HeaderCartButton onClick={props.onShowCart} />
           
        </header>
        <div className={Headerstyle['main-image']}>
            <img src={mealimage} />
        </div>

    </Fragment>

}
export default Header