import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormCRInformation extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Change Request Information" />
                    <TextField
                        id="datetime-local"
                        label="Next appointment"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                        hintText="Enter the Revision Number"
                        floatingLabelText="Revision Number"
                        onChange={handleChange('revision')}
                        defaultValue={values.revision}
                    />
                    <br/>
                    <TextField
                        hintText="Enter the Product Model"
                        floatingLabelText="Product Model"
                        onChange={handleChange('model')}
                        defaultValue={values.model}
                    />
                    <br/>
                    <TextField
                        hintText="Enter the Part Number"
                        floatingLabelText="Part Number"
                        onChange={handleChange('partNumber')}
                        defaultValue={values.partNumber}
                    />
                    <br/>
                    <TextField
                        hintText="Enter a Description of the Problem"
                        floatingLabelText="Problem Description"
                        onChange={handleChange('description')}
                        defaultValue={values.description}
                    />
                    <br/>
                    <TextField
                        hintText="Enter the Proposed Solution"
                        floatingLabelText="Proposed Solution"
                        onChange={handleChange('solution')}
                        defaultValue={values.solution}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        styles={styles.button}
                        onClick={this.continue}
                    />
                    <br/>
                    <RaisedButton
                        label="Back"
                        primary={false}
                        styles={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormCRInformation
