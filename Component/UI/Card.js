import React from "react";
import classes from './Card.module.css';
import bgimage from '../../assets/bg1.png'

const Card = props => {
    return (
        <div className={`${classes.card} ${props.className}`}> {props.children}
            <div className={classes['main-image']}>
                <image src={bgimage} />
            </div>

    </div>
        
    );

}
export default Card;