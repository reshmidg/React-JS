import React, { Component } from 'react';
//import React, {useState} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
				person : [
					{id: '1', name: 'Max', age : 20},
					{id: '2', name: 'Mani', age : 30},
					{id: '3', name: 'Stephanie', age : 17},
				],
				otherState : 'some other value',
				showPersons : false,
				showCockpit: true
		}
		console.log('[App.js] constructor');
	}	

	static getDerivedStateFromProps(props,state){
		console.log('[App.js] getDerivedStatefromProps',props);
		return state;
	}
	componentDidMount(){
		console.log('[App.js] componentDidMount');
	}
	shouldComponentUpdate(nextProps, nextState){
			console.log('[App.js] shouldComponentUpdate');
			return true;
	}
	componentDidUpdate(prevProps, prevSatte, snapshot){
			console.log('[App.js] componentDidUpdate');
			console.log(snapshot);
	}
	
	/*switchNameHandler = (newName) => {
	//this.state.persone.names[0] = 'Maximilian';
		console.log(this);
		this.setState({
			person : [
				{name: newName, age : 20},
				{name: 'Manu', age : 30},
				{name: 'Stephanie', age : 18},
			]
		});
	}*/
	 // switchNameHandler(newName){
// 	//this.state.persone.names[0] = 'Maximilian';
// 		console.log(this);
// 		this.setState({
// 			person : [
// 				{name: newName, age : 20},
// 				{name: 'Manu', age : 30},
// 				{name: 'Stephanie', age : 18},
// 			]
// 		});
// 	}
	
	nameChangedHandler = (event, id) => {
	
	const personIndex = this.state.person.findIndex(p => {
		return p.id === id;
	});
	
	console.log(personIndex);
	
	//const persons = this.state.person[personIndex];
	
	const pers = {
		...this.state.person[personIndex]
	};
	
	
	
	//const pers1 = Object.assign({},this.state.person[personIndex]);
	
	//console.log(pers1);
	
	pers.name = event.target.value;
	
	const per = [...this.state.person];
	
	per[personIndex] = pers;
	
	// this.setState({
// 			person : [
// 				{id:'1', name: 'Max', age : 20},
// 				{id:'2', name: event.target.value, age : 30},
// 				{id:'3', name: 'Stephanie', age : 17},
// 			]
// 		});
		
		this.setState({
 			person : per
 		});
 		
 		console.log(this.state.person);
	
		console.log(pers);
		
	}
	
	deletePersonHandler = (personIndex) => {
		//const person = this.state.person;
		//const person = this.state.person.slice();
		const person = [...this.state.person];
		person.splice(personIndex,1);
		this.setState({person: person});
	}
	
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons : !doesShow});
	}
  
   render() {
   	console.log('[App.js] render');
  	const style = {
  	   backgroundColor : 'white',
  	   font : 'inherit',
  	   border: '1px solid blue',
  	   padding: '8px',
  	   cursor : 'pointer'
    };
    let persons = null;
    if(this.state.showPersons){
    persons = <Persons 
    		person={this.state.person}
    		clicked={this.deletePersonHandler}
    		changed={this.nameChangedHandler}
    	/>
    }
        	// <Person
//           		name={this.state.person[0].name} 
//           		age={this.state.person[0].age}/>
//         	<Person 
//           		name={this.state.person[1].name} 
//           		age={this.state.person[1].age}
//           		click={this.switchNameHandler.bind(this,'Max!')}
//           		changed = {this.nameChangedHandler}>
//           		My hobby is listening to music. 
//         	</Person>
//         	<Person 
//           		name={this.state.person[2].name} 
//           		age={this.state.person[2].age} />
        
       
   
  // return 
  // React.createElement('div',{className: 'App'},'h1','Hi, I\'m a React App');
    return (
      <div className="App">
      <button onClick={() => {
      	this.setState({showCockpit: false})
      	}
      } >Remove Cockpit </button>
      { this.state.showCockpit ?
        <Cockpit 
        	title = {this.props.appTitle}
        	person = {this.state.person} 
        	showPersons={this.showPersons}
        	clicked = {this.togglePersonsHandler}
        /> : null
        }
       
        {persons}
      </div>
    );
  }
}

/*const App = (props) => {
const [personsState, setPersonsState] = useState({
	person : [
	{name: 'Max', age : 20},
	{name: 'Manu', age : 30},
	{name: 'Stephanie', age : 17},
	]
	//,otherState : 'some other value'
});

const [otherState, setOtherState] = useState('some other value');

console.log(personsState);
console.log(otherState);

const switchNameHandler = () => {
		setPersonsState({
			person : [
				{name: 'Maximilian', age : 20},
				{name: 'Manu', age : 30},
				{name: 'Stephanie', age : 18},
			]
		});
}
	
	return (
      <div className="App">
        <h1>This is a React project.</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.person[0].name} age={personsState.person[0].age}/>
        <Person name={personsState.person[1].name} age={personsState.person[1].age}>My hobby is listening to music. </Person>
        <Person name={personsState.person[2].name} age={personsState.person[2].age} />
      </div>
    );
}*/

export default App;
