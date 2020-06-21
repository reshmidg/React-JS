import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
	state = {
		posts : [],
		selectedPostId: null,
		error: false
	}
	componentDidMount(){
		axios.get('/posts')
		.then(response => {
		const posts = response.data.slice(0,4);
		const updatedPosts = posts.map(post => {
			return {
				...post,
				author : 'max'
			}
		})
			this.setState({posts: updatedPosts});
		})
		.catch(error => {
			this.setState({error: true});
		});
	}
	
	postSelectedHandler = (id) => {
		this.setState({selectedPostId : id});
	}
	
    render () {
		let post = <p style={{textAlign:'center'}}>Something went wrong!</p>;
		if(!this.state.error){
    	 post = this.state.posts.map(p => {
    		return <Post 
    			key={p.id} 
    			title={p.title} 
    			author={p.author}
    			clicked={() => this.postSelectedHandler(p.id)}/>
    	});
    	}
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;