import React, { Component } from 'react';
import FormCRInformation from './FormCRInformation';
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        supervisor: '',
        supervisorEmail: '',
        date:'',
        dateNeeded:'',
        revision:'',
        model:'',
        hardwareList:'',
        softwareList:'',
        partNumber: '',
        partNumber2: '',
        partNumber3: '',
        critical: '',
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
        const { 
            firstName, 
            lastName, 
            email, 
            department, 
            supervisor, 
            supervisorEmail,
            date,
            dateNeeded,
            revision,
            model,
            hardwareList,
            softwareList,
            partNumber,
            partNumber2,
            partNumber3,
            critical,
        } = this.state;
        const values = { 
            firstName, 
            lastName, 
            email, 
            department, 
            supervisor, 
            supervisorEmail,
            date,
            dateNeeded,
            revision,
            model,
            hardwareList,
            softwareList,
            partNumber,
            partNumber2,
            partNumber3,
            critical,
        }
        // eslint-disable-next-line
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
                return (
                    <FormCRInformation
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        handleChange={this.handleChange}
                        value={values}
                    />
                )
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
        }
    }
}

export default UserForm