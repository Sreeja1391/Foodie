import React, { Component } from 'react';

class AddDish extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            category: '',
            label:'',
            price:'',
            description:''
        }
    }
    
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleSubmit= event => {
        alert(`submitted`)
    }

    render(){
        return(
            <form onSubmit={this.submitDish}>
                <div className="contact">
                    <h2>Add Dish</h2>
                    <div>
                        <label>Name</label>
                        <br />
                        <input id="cont" type='text'value={this.state.name} onChange={this.handleNameChange}></input>
                    </div>
                    <div>
                        <label>Category</label>
                        <br />
                        <input id="cont" type= 'text' value={this.state.category} onChange={this.handleCategoryChange}></input>
                    </div>
                    <div>
                        <label>Label</label>
                        <br />
                        <input id="cont" type='text' value={this.state.label} onChange={this.handleLabelChange}></input>
                    </div>
                    <div>
                        <label>Price</label>
                        <br />
                        <input id="cont" type='number' value={this.state.price} onChange={this.handlePriceChange}></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <br />
                        <textarea id="text" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                        <br></br>
                    </div>
                    <button id="contact-btn" type="submit">Add Dish</button>
                </div>
            </form>
        )
    }
}

export default AddDish;