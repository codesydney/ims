import React from 'react'
import {Link} from 'react-router-dom'

class SignUp extends React.Component {
  constructor(){
    super()
    this.state={
      email:'',
      password:'',
      confirm_password:'',
      service_provider:false
    }
  }

  handleChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value} )
  }

  service_provider=(e)=>{
    console.log(e.target.value)
    this.setState({service_provider:e.target.value})
  }
  onSignIn=(e)=>{
    console.log('sign in button pressed')
    console.log(this.props.location)

    if(this.state.email==''){
      alert('please enter email')
    }else if(this.state.password == ''){
      alert('please enter password')
    }else if(this.state.password != this.state.confirm_password){
        alert('password does not match')
    }else{
        console.log(this.state)
        this.props.history.push("/")
    }

  }
  render(){
    return (
      <div>   
        <h1>Sign Up</h1>
        <p className="text-muted">Create new account</p>
        <input onChange={this.handleChange} name="email" type="text" placeholder="Email"  />
        <br /><br />
        <input onChange={this.handleChange} name='password' type="password" placeholder="Password" />
        <br /><br />
        <input onChange={this.handleChange} name='confirm_password' type="password" placeholder="Confirm Password" />
        <br /><br />
        Who are you?
        <br />
        <select onChange={this.service_provider} >
            <option value="none">please select</option>
            <option value="seeker">I am a Service Provider</option>
            <option value="provider">I am Seeking a Service</option>
        </select>
        <br /><br />

        <Link to="/">
            <button onClick={this.onSignIn}>Create new account</button>
        </Link>
      </div>
    )
  }
}

export default SignUp