import React from 'react';

const userinput = (props) => {
const style = {
	width: '250px', height: '30px', border: '2px solid #ccc', borderRadius: '3px', margin: '20px'
}
	return (
		<input type="text" 
		style={style} 
		onChange={props.changed} value={props.name}/>
	);
}
export default userinput;