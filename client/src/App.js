import React from 'react';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="container">
        <h1>Create Post</h1>
        <PostCreate/>
        <hr />
        <h1>Posts</h1>
        <PostList/>
        </div>
    )
}