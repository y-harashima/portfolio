import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
    menuName: string
};

/*const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 1.3em',
        height: '3em',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #333',
        background: '#FFF',
        transition: 'all .3s ease-out',
        '&:hover': {
            background: 'rgba( 255, 255, 255, 0.95)',
            color: '#999',
            transform: 'translate3d( 0, -.3em, 0)'
        }
    },
    menu: {
        letterSpacing: '.3em'
    }
})); */

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 1.3em',
        height: '3em',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #333',
        background: '#FFF',
        transition: 'all .3s ease-out',
        '&:hover': {
            background: 'rgba( 220, 220, 220, 1)',
            color: '#777',
            boxShadow : 'inset 1px 1px 1px 1px #555'
        }
    },
    menu: {
        letterSpacing: '.3em'
    }
}));

const MenuBlock: React.FC<Props> = props => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.menu}>
                <span>{props.menuName}</span>
            </div>
        </div>
    );
};

export default MenuBlock;