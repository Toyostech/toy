import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModel.module.css'

const ErrorModel = (props) => {
    return (
        <React.Fragment
        >
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </React.Fragment>
    )
}
export default ErrorModel;