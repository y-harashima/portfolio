import React from 'react';

import { makeStyles } from '@material-ui/core/styles'; 

import HeroImage from '../assets/img/topimage.jpg';

const useStyles = makeStyles((theme) => ({
	topimage: {
		background: `url(${HeroImage}) center/100%`,
		height: '70vh',
		position: 'relative',
		boxShadow: '0px 4px 9px -1px #b5b5b5',
	},
	bgfilter: {
		height: '100%',
		width: '100%',
		background: 'rgba( 50, 50, 50, 0.3)',
	},
	topmessage: {
		position: 'absolute',
		top: '50%',
		left: '30%',
		transform: 'translate(-50%, -50%)',
	},
	maincopy: {
		color: '#FFF',
		textShadow: '2px 2px 2px #888',
		letterSpacing: '.5em',
		lineHeight: '2em',
		fontSize: '40px',
		textAlign: 'left',
	},
}));

const Home: React.FC = () => {
	const classes = useStyles();

	return(
		<div className={classes.topimage} >
			<div className={classes.bgfilter}>
				<div className={classes.topmessage}>
					<h1 className={classes.maincopy}>
						Welcome to<br/>
						My Website!
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;
