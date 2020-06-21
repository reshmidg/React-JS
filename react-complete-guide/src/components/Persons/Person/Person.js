import React, {Component} from 'react';
import './Person.css';

//const person = (props) => {

// const randm = Math.random();
// 
// if(randm > 0.9){
// 	throw new Error('Error');
// }

class Person extends Component{
render(){
	console.log('[Person.js] rendering...');
	return (
	<div className="Person">
		<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
		<p>{this.props.children}</p>
		<input type="text" onChange={this.props.changed} value={this.props.name}/>
	</div>
	);
}
}
export default Person;