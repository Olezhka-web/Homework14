import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "../user/Post";

class AllPosts extends Component {
    postService = new PostService();
    state = {posts: [], chosenOne: null};
    onPostChose = (id) =>{
        let chosenOne = this.state.posts.find(value => value.id === id);
        this.setState({chosenOne});
    }
    componentDidMount() {
        this.postService.getAllPosts().then(value => this.setState({posts: value}));
    }

    render() {
        let {posts, chosenOne} = this.state;
        return (
            <div>
                {
                    posts.map(value =>
                        (<Post item={value} key={value.id} onPostChose={this.onPostChose}/>))
                }
                {chosenOne && <Post item={chosenOne} isShowButton={true}/>}
            </div>
        );
    }
}

export default AllPosts;