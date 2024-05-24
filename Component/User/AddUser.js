import { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helper/Wrapper";



const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enterbirth, setBirth] = useState('')
    const [error, seterror] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            seterror({
                title: 'Invalid input',
                message: 'please enter a valid name and Age'
            })
            return
            
        }
        if (+enteredAge < 1) {
            seterror({
                title: 'Invalid age input',
                message: 'please enter a valid age'
            }) 
            return;
            
        }
        if (enterbirth.trim().length === 0) {
            seterror({
                title: 'Invalid input',
                message: 'please enter a valid date'
            })
            return

        }
        props.onAddUser(enteredUsername, enteredAge, enterbirth);
        setEnteredUsername('')
        setEnteredAge('')
        setBirth('')

    }

    const usernameChangeHanler = (event) => {
        setEnteredUsername(event.target.value)
        
    }

    const ageChangeHanler = (event) => {
        setEnteredAge(event.target.value)

    }
    const birthChangeHandler = (event) => {
        setBirth(event.target.value)
    }
    const errorHanler = () => {
        seterror(null)
    }




    return (
        <Wrapper>

            {error && (
                <ErrorModel
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHanler}
                />)}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
 
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHanler} />

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHanler} />

                    <label htmlFor="birth">Date of Birth</label>
                    <input type="date" onChange={birthChangeHandler} value={enterbirth} placeholder="enter your date of birth" />



                    <Button type="submit">Add User</Button>
                    <li>{enteredAge}</li>
                    <li>{enteredUsername}</li>

                </form>

            </Card>

        </Wrapper>
       




    )


};
export default AddUser;