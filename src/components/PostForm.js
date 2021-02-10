import React from 'react';
import { connect } from 'react-redux'
import { createPost } from '../redux/actions';

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        if (!title.trim()) {
            return
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        console.log(123);
        this.props.createPost(newPost)
        this.setState({title: ''})

    }

    changeInputHandler = event => {
        // event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }

    render() {
        return (
        <form onSubmit={this.submitHandler}>
            <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                id="post-title" 
                name="title"
                placeholder="Название поста" 
                value={this.state.title}
                onChange={this.changeInputHandler}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Добавить пост</button>
            </div>
        </form>
        )
    }
}

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(PostForm)