import React, {Component} from 'react';
import Axios from 'axios';
import Post from '../../../components/Post/Post';
import {Link } from 'react-router-dom';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount = () =>{
        Axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0,4);
            const updatePosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            });
            this.setState({posts: updatePosts});

        })
        .catch(error => {
            console.log(error);
        });
    }

    postSelectedHandler = (id)=>{
        // this.setState({
        //     selectedPostId: id
        // });

        this.props.history.push('/' + id);
    }
    render(){

        let post = this.state.posts.map((post) => {
            return <Link to={'/post/' + post.id} key={post.id}><Post 
             
            title={post.title} 
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)} /></Link>
         });

        return (
            <section className="Posts">
                    {post}
            </section>
        );
    }
}

export default Posts;