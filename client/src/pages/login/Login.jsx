import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component {
  constructor(){
    super()
    this.state={
      email:'',
      password:'',
    }
  }

  handleChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value} )
  }
  onSignIn=(e)=>{
    console.log('sign in button pressed')
    console.log(this.props.location)

    if(this.state.email==''){
      alert('please enter email')
    }else if (this.state.password == ''){
      alert('please enter password')
    }else{
      this.props.history.push("/users")


      // fetch(`/users`, {
      //   method: 'post',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify({
      //       user_input: this.state.input
      //   })
      // })


    }

  }
  render(){
    return (
      <div>   
        <h1>Login</h1>
        <p className="text-muted">Sign In to your account</p>
        <input onChange={this.handleChange} name="email" type="text" placeholder="Email" autoComplete="username" />
        <input onChange={this.handleChange} name='password' type="password" placeholder="Password" autoComplete="current-password" />
        <button  color="primary" className="px-4" onClick={this.onSignIn} >Login</button>
        <button color="link" className="px-0">Forgot password?</button>
        <Link to="/register">
            <button color="link" className="px-0">Create new account</button>
        </Link>
      </div>
    )
  }
}

export default Login