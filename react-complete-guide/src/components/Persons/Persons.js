import React, {Component} from 'react';
import Person from './Person/Person';

// const persons = (props) => {
// 	console.log('[Persons.js] rendering...');
// 	return props.person.map((pers, index) => {
// 				return (<Person 
//     				click={() => props.clicked(index)} 
//     				name={pers.name} 
//     				age={pers.age} 
//     				changed={(event) => props.changed(event, pers.id)}  key={pers.id}/> 
//     			);
//     			}		
// );
// };
    			// return (<ErrorBoundary key={person.id}>
//     			<Person 
//     				click={() => this.deletePersonHandler(index)} 
//     				name={person.name} 
//     				age={person.age} 
//     				changed={(event) => this.nameChangedHandler(event, person.id)} /> 
//     				</ErrorBoundary>
//     			);

	class Persons extends Component{
		static getDerivedStateFromProps(props, state){
			console.log('[Persons.js] getDerivedStateFromProps');
			return state;
		}
	
		shouldComponentUpdate(nextProps, nextState){
			console.log('[Persons.js] shouldComponentUpdate');
			return true;
		}
	
		render(){
			console.log('[Persons.js] render...');
			return this.props.person.map((pers, index) => {
				return (<Person 
    				click={() => this.props.clicked(index)} 
    				name={pers.name} 
    				age={pers.age} 
    				changed={(event) => this.props.changed(event, pers.id)}  key={pers.id}/> 
    			);
    			}		
			);
		}
		
		getSnapshotBeforeUpdate(prevProps, prevState){
			console.log('[Persons.js] getSnapshotBeforeUpdate');
			return {message : 'Snapshot!'};
		}
	
		componentDidUpdate(prevProps, prevSatte, snapshot){
			console.log('[Persons.js] componentDidUpdate');
			console.log(snapshot);
		}
		
		componentWillUnmount(){
			console.log('[Persons.js] componentWillUnmount');
		}
	}


export default Persons;