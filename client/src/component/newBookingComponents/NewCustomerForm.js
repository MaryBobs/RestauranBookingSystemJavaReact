import React, {Component} from 'react';

class NewCustomerForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            surname: "",
            phoneNumber: "",
            email: ""
            }
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstName(e) {
        this.setState({firstName: e.target.value});
    }

    handleLastName(e) {
        this.setState({lastName: e.target.value});
    }

    handlePhoneNumber(e) {
        this.setState({phoneNumber: e.target.value});
    }

    handleEmail(e) {
        this.setState({email: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const newCustomer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email
        }
        this.props.addCustomer(newCustomer);
        this.props.seeForm();
        }
    

    render() {
        return (
        <div>
        <h2 className="new-customer-title">New Customer</h2>
        <form className="new-customer-form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="First Name:" name="firstName" onChange={this.handleFirstName} value={this.state.firstName}/>
            <input type="text" placeholder="Last Name:" name="lastName" onChange={this.handleLastName} value={this.state.lastName}/>
            <input type="number" placeholder="Phone Number:" name="phoneNumber" onChange={this.handlePhoneNumber} value={this.state.phoneNumber}/>
            <input type="email" placeholder="E-mail:" name="email" onChange={this.handleEmail} value={this.state.email}/>
            <button className="new-booking-btn" type="submit">Next</button>
        </form>
        </div>
    )
}
}



export default NewCustomerForm;