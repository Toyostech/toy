import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css'

const UserList = (props) => {
    return (
        <React.Fragment>
            <Card className={classes.users}>
                <h1>List</h1>
                <ul>
                    {props.users.map((user =>
                        <li key={user.id}>
                            {user.name} ({user.age} years old) {user.birth}
                        </li>





                    ))}

                </ul>
                <div>
                    {props.users.map((user =>
                    <li key={user.id}>
                        {user.name} ({user.age} years old) 
                    </li>
                    




                    ))}
                </div>


            </Card>

        </React.Fragment>
       
    )
};
export default UserList;