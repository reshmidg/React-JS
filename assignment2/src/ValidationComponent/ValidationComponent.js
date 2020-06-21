import React from 'react';


function ValidationComponent(props){

	if(props.inputLen > 5){
		return "Text long enough";
	}else if(props.inputLen < 5){
		return "Text too short";
	}else{
		return (
			<p>{props.inputLen}</p>
		);
	}
}

export default ValidationComponent;