import React, {Component} from 'react';

class NewCustomerForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            surname: ""
            }
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleSurname = this.handleSurname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstName(e) {
        this.setState({firstName: e.target.value});
    }

    handleSurname(e) {
        this.setState({surname: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const newCustomer = {
            firstName: this.state.firstName,
            surname: this.state.surname
        }
        this.props.addCustomer(newCustomer);
        }
    

    render() {
        return (
        <div>
        <h2>New Customer</h2>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="First Name:" name="firstName" onChange={this.handleFirstName} value={this.state.firstName}/>
            <input type="text" placeholder="Surname:" name="surname" onChange={this.handleSurname} value={this.state.surname}/>
            <input type="number" placeholder="Phone Number:" />
            <input type="email" placeholder="E-mail:" />
            <button type="submit">Next</button>
        </form>
        </div>
    )
}
}



export default NewCustomerForm;