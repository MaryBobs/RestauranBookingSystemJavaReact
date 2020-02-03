import React, {Component} from 'react';

class NewCustomerForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: ""
        }
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstName(e) {
        this.setState({firstName: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const newCustomer = {
            firstName: this.state.firstName
        }
        this.props.addCustomer(newCustomer);
        }
    

    render() {
        return (
        <div>
        <h2>New Customer</h2>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="First Name:" name="firstName" onChange={this.handleFirstName} value={this.state.firstName}/>
            <input type="text" placeholder="Surname:" />
            <input type="number" placeholder="Phone Number:" />
            <input type="email" placeholder="E-mail:" />
            <button type="submit">Next</button>
        </form>
        </div>
    )
}
}



export default NewCustomerForm;