import './App.css';
import { UserForm } from './components/UserForm';
import React, { Component } from 'react'

class App extends Component {
    render () {
        return (
            <div className="app">
                <UserForm/>
            </div>
        );
    }
}
export default App