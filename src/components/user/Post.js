import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, onPostChose} = this.props;
        return (
            <div>
                {item.id}-{item.title} - <button onClick={() => {onPostChose(item.id);}}>Click me</button>
            </div>
        );
    }
}

export default Post;