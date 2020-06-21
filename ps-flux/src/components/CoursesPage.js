import React, {useState, useEffect} from 'react';
import { getCourses } from '../api/courseApi';
import CourseList from './CourseList';

/*class CoursesPage extends React.Component{
	
	/*constructor(props){
		super(props);
		this.state = {
		courses : []
		}
	}*/
	
	/*state = {
		courses : []
	};
	
	componentDidMount(){
		getCourses().then(courses => this.setState({courses: courses}));
	}
	
	render(){
		return (
		<>
		<h2>Courses</h2>
		<table className="table">
			<thead>
				<tr>
					<th>Title</th>
					<th>Author Id</th>
					<th>Category</th>
				</tr>
			</thead>
			<tbody>
				{this.state.courses.map(course => {
					return (
						<tr key={course.id}>
							<td>{course.title}</td>
							<td>{course.authorId}</td>
							<td>{course.category}</td>
						</tr>
					)
				})
				}
			</tbody>
		</table>
		</>
		);
	}

}
*/


/*function CoursesPage(){
	const [courses, setCourse] = useState([]);
	
	useEffect(() => {
		getCourses().then(_courses => setCourse(_courses));
	},[])
	
	return (
		<>
		<h2>Courses</h2>
		<CourseList courses={courses} header="Courses"/>
		</>
		);
}*/


class CoursesPage extends React.Component{
constructor(){
super();
	this.state = {
		isBtnClicked : false
	};
}

handleClick = () => {
	this.setState({isBtnClicked: true});
	console.log(this.state.isBtnClicked);
}

	render(){
		return (
			<>
			<div>{this.state.isBtnClicked ? 'Clicked' : 'not'}</div>
			<input type="button" name="Button" value="Button" onClick={this.handleClick}/>
			</>
		)
	}
}

export default CoursesPage;