import React, { Component } from 'react';

import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: null,
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }
    render() {
        return (
            <main>
                <form>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="first Name"
                    />
                    <br />
                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="last Name" /
                    >
                    <br />

                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="age" /><br /
                    >
                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> male
                    </label>
                    <br />
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> female
                    </label>
                    <br />
                    <br />
                    <select
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}
                    >
                        <option value="">--- Please Choose a destination ---</option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway</option>
                        <option value="north-pole">North Pole</option>
                        <option value="south-pole">South Pole</option>
                    </select>
                    <br />
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        />Vegan ?
                    </label>
                    <br />
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        />Kosher ?
                    </label>
                    <br />
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        />Lactose Free ?
                    </label>
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h1>Your Billing</h1>
                <p>Your name: {this.state.firstName}  {this.state.lastName}</p>
                <p>Your age: {this.state.age}  </p>
                <p>Your gender: {this.state.gender} </p>
                <p>Your destination: {this.state.destination} </p>
                <p>Your dietary restrictions: <br/>
                Vegan: {this.state.isVegan ? "Yes" : "No"} <br/>
                Kosher: {this.state.isKosher ? "Yes" : "No"} <br/>
                Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"} <br/>
                </p>
            </main>
        )
    }
}

export default App;