import React, { Component } from 'react';

class AddComment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            comment: ''
        }
    }
 
handleNameChange = (event) => {
    this.setState({
        name: event.target.value
    })
}

handleCommentChange = (event) => {
    this.setState({
        comment: event.target.value
    })
}

    render(){
        return(
            <form>
                <div className="contact">
                    <h2>Add a Comment</h2>
                    <div>
                        <label>Name</label>
                        <br></br>
                        <input id="cont" type='text' value={this.state.name} onChange={this.handleNameChange}></input>
                    </div>
                    <div>
                        <label>Comment</label>
                        <br></br>
                        <textarea id="text"value={this.state.comment}onChange={this.handleCommentChange}></textarea>
                        <br></br>
                    </div>
                    <button id="contact-btn" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default AddComment;