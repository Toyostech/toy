import React from "react";
import liststyle from './List.module.css'
import Card from "../UI/Card";

const List = props => {
    const Items = [
        'what is your name',
        'what do you want im life',
        'Life is beautyful with God',
        'Good morning from here'
    ]
    const WishList = Items.map(person => <li>{person}</li>)
    return (
        <Card className={liststyle.para}>
            <div className="para">
                <p>{props.WishList} </p>

            </div>
            <ul>{WishList}</ul>

        </Card>
        
        
    )

}
export default List;