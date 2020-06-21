import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

useEffect(() => {
	console.log('[Cockpit.js] useEffect');
	setTimeout(() => {
		alert('UseEffect called');
	},1000);
	
	
	return () => {
		console.log('[Cockpit.js] cleanup');
	}
},[]);


useEffect(() => {
	console.log('[Cockpit.js] 2nd useEffect');
	
	return () => {
		console.log('[Cockpit.js] 2nd cleanup');
	}
});

const assignedClasses = [];
let btnClass = '';
if(props.showPersons){
	btnClass = classes.Red;
}
if(props.person.length <= 2){
	assignedClasses.push(classes.red);
}
if(props.person.length <= 1){
	assignedClasses.push(classes.bold);
}
	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
        	<p className = {assignedClasses.join(' ')}>This is real.</p>
          
        	<button 
          		className = {btnClass} 
          		onClick = {props.clicked} >Toggle</button>
		</div>
	);
}

export default cockpit;