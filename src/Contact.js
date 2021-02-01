import React, { Component } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';
import { CommentSharp } from '@material-ui/icons';

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name:'',
            email: '',
            comments : ''
        }
    }

    handlenameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCommentschange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleSubmit= event => {
        alert( `${this.state.name} ${this.state.email} ${this.comments}`)
    }
    render(){
        return(
           <form onSubmit={this.handleSubmit}>

            <div className="contact">
               <h2>Contact Us</h2>
               <div>
                   <label>Name</label>
                   <br />
                   <input
                    id="cont"
                    type='text'
                    value={this.state.name} 
                    onChange={this.handlenameChange}
                    />
               </div>
               <br />

               <div>
                   <label>Email</label>
                   <br />
                   <input id="cont" type='email' value={this.state.email} onChange={this.handleEmailChange}></input>
                </div>
                <br />

               <div>
                   <label>What do you want from us?</label>
                   <br />
                   <textarea id="text"value={this.state.comments} onChange={this.handleCommentschange}></textarea>
               </div>
               <br />

               <button id="contact-btn" type="submit">Submit</button>
               
            </div>
           </form>
        )
    }
}

export default Contact;