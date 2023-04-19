import React, { Component } from 'react'
import { UserService } from '../services/user.service'

export class SignupPage extends Component {
    
    state = {
        newUser: '',
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const { newUser } = this.state
        UserService.signup(newUser)
        this.props.history.push("/home")
    }

    signUp = (ev) => {
        const value = ev.target.value
        this.setState({ newUser: value })
    }
  
    render() {
        const {newUser} = this.state
    return (
      <section className='signup-container'>
        {/* <img src="" alt="" /> */}
        <form onSubmit={this.handleSubmit} >
            <label htmlFor="newUser">Please enter your name:</label>
            <input type="text" value={newUser} onChange={this.signUp} id="newUser" name="newUser" />
            <button>Sign up</button>
        </form>
      </section>
    )
  }
}
