import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    }
    onSubmit = (evt) => {
        evt.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
       this.props.createPost(post);
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br/>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} /><br/>
                        <br/>
                        <label>Body: </label><br/>
                        <textarea name="body" value={this.state.body} onChange={this.onChange} /><br/>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(Postform);
