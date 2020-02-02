import React from 'react';

const NewCustomerForm = () => {
    return (
        <div>
        <h2>New Customer</h2>
        <form>
            <input type="text" placeholder="First Name:"/>
            <input type="Surname" placeholder="Surname:" />
            <input type="number" placeholder="Phone Number:" />
            <input type="email" placeholder="E-mail:" />
            <button type="submit">Next</button>
        </form>
        </div>
    )
}

export default NewCustomerForm;