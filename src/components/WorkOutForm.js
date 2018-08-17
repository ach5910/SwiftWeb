import React from 'react';


export default class WorkOutForm extends React.Component{
    constructor(props){
        super(props)

        console.log(props.name);
        this.state = {
            name: '',
            nameCreated: false
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState(() => ({
            nameCreated: true
        }))

        this.props.callback(this.state.name);
    }

    nameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({
            name
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    placeholder={`${this.props.name} Name`}
                    autoFocus
                    className="text-input"
                    value={this.state.name}
                    onChange={this.nameChange}
                />
                <button>Create {this.props.name}</button>
                </form>
            </div>
            
        )
    }
}