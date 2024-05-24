import React from "react";
import cardstyle from './Cardd.module.css'

const Card = (props) => {
    return<div className={cardstyle.card}>
        {props.children}
    </div>
};
export default Card;