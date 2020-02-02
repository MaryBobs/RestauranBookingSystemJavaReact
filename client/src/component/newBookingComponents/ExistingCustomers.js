import React from 'react';

const ExistingCustomers = (props) => {
    const options = props.customers.map(customer => {
        return (
            <option
            value={customer.id}
            key={customer.id}>
                {customer.lastName}
            </option>
        )
    })
    return (
        <select defaultValue=""> 
            <option disabled value="">Enter Customer name:</option>
            {options}
        </select>
    )
}

export default ExistingCustomers;
