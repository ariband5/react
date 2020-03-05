import React from 'react'

const Form = ({changeHandler, formState}) => {
    
    return(
        <div>
            <h4>
            Name:<input type="text" name="firstName" onChange={changeHandler} /> 
            {formState.firstName.length < 2 && <p>First name must be at least 2 characters</p>}
            </h4>
            <h4>
            Last name:<input type="text" name="lastName" onChange={changeHandler} />
            {formState.lastName.length < 2 && <p>Last name must be at least 2 characters</p>}
            </h4>
            <h4>
            Email:<input type="text" name="email" onChange={changeHandler} />
            {formState.email.length < 5 && <p>Last name must be at least 5 characters</p>}
            </h4>
            <h4>
            Password:<input type="password" name="password" onChange={changeHandler} />
            {formState.password.length < 8 && <p>Password must be at least 8 characters</p>}
            </h4>
            <h4>
            Confirm Password:<input type="password" name="confirmPassword" onChange={changeHandler} />
            {formState.password != formState.confirmPassword && <p>Password must match</p>}
            </h4>
        </div>
    )      
}
export default Form;