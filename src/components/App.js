import React from 'react';
import * as actionCreators from '../actions';
import {connect} from 'react-redux';
import UserHeader from './UserHeader';

class App extends React.Component {
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }
    renderList(){
        return this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <div>
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }
    render(){
        return (
            <div>
                <div>Hello</div>
                <div>{this.renderList()}</div>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({money: state.money, posts: state.posts})

export default connect(mapStateToProps, actionCreators)(App)

