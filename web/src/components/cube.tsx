import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    scene: {

    },
    face: {

    },
    top: {},
    left: {},
    right: {},
    bottom: {},
    front: {},
    back: {}
}));

const Cube: React.FC = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.scene}>
                <div className={classes.face}></div>
                <div className={classes.face}></div>
                <div className={classes.face}></div>
                <div className={classes.face}></div>
                <div className={classes.face}></div>
                <div className={classes.face}></div>
            </div>
        </div>
    );
};

export default Cube;