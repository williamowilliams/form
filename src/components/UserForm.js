import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        supervisor: '',
        supervisorEmail: '',
    }

    // Proceed to next step

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    //Go back to previous step

    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, department, supervisor, supervisorEmail} = this.state;
        const values = { firstName, lastName, email, department, supervisor, supervisorEmail};

        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <h1>FormUserDetails</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
        }
    }
}

export default UserForm