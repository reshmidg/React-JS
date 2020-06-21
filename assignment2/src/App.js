import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class  App extends React.Component{
	
	state = {
		inp : ''
	}
	
	inputChangeHandler = (event) => {
		this.setState({inp : event.target.value});
	}
	
	deleteHandler = (index) => {
	console.log(index);
		const arr = this.state.inp;
 		const arr1 = arr.split('');
 		arr1.splice(index,1);
 		
 		const arr2 = arr1.join('');
 		
 		this.setState({inp: arr2});
	}

	render(){
	const charList = this.state.inp.split('').map((elem, index) => {
						return (
							<CharComponent inpt = {elem} click={() => this.deleteHandler(index)} key = {index}/>
						);
					})
		return (
			<div>
				<input type = "text" onChange = {this.inputChangeHandler} value={this.state.inp}/>
				<p>{this.state.inp.value}</p>
				<ValidationComponent inputLen = {this.state.inp.length} />
				{charList}
			</div>
		);
	}
}

export default App;
