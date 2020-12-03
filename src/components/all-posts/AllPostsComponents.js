import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";

class AllPostsComponents extends Component {
    state = {posts: [], chosenPost: null};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI});
            });
    }

selectThisPost =(id) =>{
        let chosenPost = this.state.posts.find(value => value.id === id);
        this.setState({chosenPost});
}
    render() {
        let {posts, chosenPost} = this.state;
        return (
            <div>
                {
                    posts.map(value => (<PostComponent item={value} key={value.id} selectThisPost={this.selectThisPost}/>))
                }
                <hr/>
                {
                    chosenPost && <PostComponent item={chosenPost}/>
                }
            </div>
        );
    }
}

export default AllPostsComponents;