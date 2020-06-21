import React from 'react';
import './style.css';
import Countries from './Countries';


class AutoSearchComplete extends React.Component<{}>{
constructor(props){
	super(props);
	this.handleChanges = this.handleChanged.bind(this);
	this.state = {suggestion : []};
}
handleChanged(event){
	console.log(event.target.value);
	console.log(JSON.stringify(Countries));
}
getCountryList(){
	let suggestion = [];
	suggestion = countryList.sort.filter(function(data){
	return data;
	});
	
	this.setState(suggestion: suggestion)
}
	render(){
		return (
			<>
			<div className="main-content">
				<h3>AutoComplete</h3>
				<input type="text" className="search-field" onChange={this.handleChanges}/>
				<ul className="countryList">
					<li></li>
				</ul>
				<div className="footer">Suggestions</div>
			</div>
			<div >
				
			</div>
			</>
		);
	}
}

export default AutoSearchComplete;