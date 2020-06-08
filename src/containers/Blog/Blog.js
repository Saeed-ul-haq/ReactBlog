import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import { Route,Switch, NavLink,Redirect } from "react-router-dom";

class Blog extends Component {

    state = {
        auth: false
    }
    

    
    render () {

        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                            <NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink>
                                </li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>HOME</h1>} />
                <Route path='/'   render={() => <h1>HOME  23</h1>} /> */}
                {/* <Route path='/' exact component={Posts} /> */}

                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost} />: null }
                 
                <Route path="/posts" component={Posts} />
                <Route path="/post/:id" exact component={FullPost} />
                <Redirect from="/" to="/posts" />
                <Route render={() => <h1>Not Found</h1>} />

                </Switch>
                
            </div>
        );
    }
}

export default Blog;