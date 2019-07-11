import React, {Component} from 'react';

class Counter extends Component{
	state = {
		count : 0,
		imageUrl : 'https://picsum.photos/200',
		tags : ['tag1','tag2','tag3']
	};

	styles = {
		fontSize : 40,
		fontWeight : "bold"
	}

	render(){
		let classes1 = "badge m-2 badge-";
		//classes += this.state.count === 0 ? 'warning' : 'primary';

		return (
			  <React.Fragment>  
			    <img src={this.state.imageUrl} alt=""/>
				<span style={ {fontSize: 20} } className="badge badge-primary m-2"> {this.state.count} </span>
				<span style = {this.styles} className={classes1}> {this.formatCount()} </span>
				<span style = {this.styles} className={this.getBadgeClasses()}> {this.formatCount()} </span>
				<button className="btn btn-secondary btn-sm"> Increment </button>
				<ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
			  </React.Fragment>
		);
	}

	getBadgeClasses(){
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount(){
		const {count} = this.state; // This is destructuring
		//return this.state.count === 0 ? 'Zero' : this.state.count;
		//return count === 0 ? 'Zero' : count;
		return count === 0 ? <h1>Zero</h1> : count;
	}
}

export default Counter;