import React, { useState } from 'react';
import classes from './Snackbar.module.scss';

const Snackbar = (props) => {
    const [cancel, setCancel] = useState(null);
    const handleCancel = () => {
        setCancel(true);
    }
    var className = cancel ? classes.hide : classes.Snackbar;
    return (
        <div className={className}>
            <p className={classes.cross} onClick={() => handleCancel()}>&#10006;</p>
            {props.children}
        </div>
    )
}

export default Snackbar;