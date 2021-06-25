import React from 'react'
import {Link} from 'react-router-dom'

const style={
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

class Login extends React.Component {
  constructor(){
    super()
    this.state={
      email:'',
      password:'',
      error_message: ''
    }
  }

  handleChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value} )
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    if(this.state.email == '' || this.state.password == ''){
      this.setState({error_message: 'Please fill in details'})
      return
    }
    console.log('working')

    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    }).then(a=>{
      this.setState({
        email:'',
        password:'',
      })
      return a.json()
    }).then(a=>{
      console.log(a)
      if(a.response == 'error'){
        this.setState({error_message:a.response})
      }else{
        this.setState({error_message:'login successfull'})
      }
      
    })
  }


  render(){
    return (
      <div style={style}>   
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <p className="text-muted">Sign In to your account</p>
          <input onChange={this.handleChange} name="email" type="text" placeholder="Email" autoComplete="username" value={this.state.email}/>
          <br /><br />
          <input onChange={this.handleChange} name='password' type="password" placeholder="Password" autoComplete="current-password" value={this.state.password} />
          <br /><br />
          <button  color="primary" className="px-4" onClick={this.onSignIn}>Login</button>
        </form>
          <br /><br />
          <button color="link" className="px-0">Forgot password?</button>
          <br /><br />
          <button color="link" className="px-0"><Link to= "/signup" >Create new account</Link></button>
        
        <h3>{this.state.error_message}</h3>
      </div>
    )
  }
}

export default Login