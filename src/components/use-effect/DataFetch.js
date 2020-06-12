import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetch(props) {
    // const [posts, setPosts] = useState([]);
    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);

    useEffect(() => {
        getPosts();
    }, [id])
    const getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res, 'gew');
                setPost(res.data);
            })
            .catch( error => {
                console.log(error);
            });
    }
    return (
        <div>
            <br/>
            <br/>
            <input type="text"
                value={id}
                onChange={(e)=> setId(e.target.value)}/>
            <br/>
            <br/>
            <ul>
                {/* {posts.map(item => (
                    <li key={item.id}> {item.title} </li>
                ))} */}
                <li key={post.id}>{post.title}</li>
            </ul>
        </div>
    );
}

export default DataFetch;