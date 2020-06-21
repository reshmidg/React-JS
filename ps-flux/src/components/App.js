import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';

function getPage(){
	const router = window.location.pathname;
	if(router === '/about')return <AboutPage/>;
	else if(router === '/courses')return <CoursesPage/>;
	return <HomePage/>;
}
function App(){
	return (
	<div className="container-fluid">
	   <Header/>
	   { getPage() }
	</div>
	)
}

export default App;
