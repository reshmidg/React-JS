import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import UserInput from './MyComponent/UserInput';
import UserOutput from './MyComponent/UserOutput';

function App() {
  const [userName, setUserName] = useState({
  		name : 'Pari',
  		anotherName : 'Bob',
  		someName : 'Joe'
  });
  
  const userNameChangeHandler = (event) => {
  	setUserName({
  		name : event.target.value,
  		anotherName : 'Bob',
  		someName : 'Joe'
  	});
  }
  
  return (
    <div className="App">
      <UserInput name={userName.name} changed={userNameChangeHandler}/>
      <UserOutput username = {userName.name}/>
      <UserOutput username = {userName.anotherName}/>
      <UserOutput username = {userName.someName}/>
    </div>
  );
}

export default App;
