import React from 'react';
import UserOutput from './UserOutput.css';

const useroutput = (props) => {
	return (
	<div className="userOutput">
		Username: {props.username}
		<p>Hi, I'm {props.username}.</p>
	</div>
	);
}
export default useroutput;