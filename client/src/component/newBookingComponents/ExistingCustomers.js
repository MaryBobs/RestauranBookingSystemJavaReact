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

    function handleCustomer(e) {
        props.handleSelectedCustomer(e.target.value)
    }
    
    return (
        <select defaultValue="" onChange={handleCustomer}> 
            <option disabled value="">Enter Customer name:</option>
            {options}
        </select>
    )
}

export default ExistingCustomers;
