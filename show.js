import React from 'react'

const Show = ({person}) => {
    return(
        <div>
            <h4>First Name: {person.firstName}</h4>
            <h4>Last Name: {person.lastName}</h4>
            <h4>Email: {person.email} </h4>
            <h4>Password: {person.password} </h4>
            <h4>Password Confirm: {person.confirmPassword} </h4>
        </div>
    )
}
export default Show