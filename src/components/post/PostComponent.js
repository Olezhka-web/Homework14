import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {item, selectThisPost} = this.props;
        return (
            <div>
                {item.id}-{item.title}
                <button onClick={() => selectThisPost(item.id)}>Click</button>
            </div>
        );
    }
}

export default PostComponent;