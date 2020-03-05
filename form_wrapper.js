import React, { useState } from 'react'
import Form from "./form"
import Show from "./show"

const FormWrapper = () => {

    const [formState, setFormState] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onChangeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
        
    }
    
    return(
        <div>
            <Form changeHandler={onChangeHandler} formState={formState} />
            <Show person={formState} />
        </div>
    )
}

export default FormWrapper