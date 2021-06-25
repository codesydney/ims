import React from 'react'

const style={
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

class SignUp extends React.Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      password:'',
      confirm_password:'',
      service_provider:false,
      error_message:''
    }
  }

  handleChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value} )
  }
  service_provider=(e)=>{
    console.log(e.target.value)
    this.setState({service_provider:e.target.value})
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    if(this.state.email == '' || this.state.password == ''){
      this.setState({error_message: 'Please fill in details'})
      return
    }
    if(this.state.password != this.state.confirm_password){
      this.setState({error_message: 'passwords do not match'})
      return
    }
    console.log('working')

    fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        service_provider:this.state.service_provider,
      })
    }).then(a=>{
      this.setState({
        name:'',
        email:'',
        password:'',
        service_provider:'',
      })
      return a.json()
    }).then(a=>{
      console.log(a)
    })
  }

  render(){
    return (
      <div style={style}>   
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <p className="text-muted">Create new account</p>
          <input onChange={this.handleChange} name="name" type="text" placeholder="Full Name"   value={this.state.name}/>
          <br /><br />
          <input onChange={this.handleChange} name="email" type="text" placeholder="Email"   value={this.state.email}/>
          <br /><br />
          <input onChange={this.handleChange} name='password' type="password" placeholder="Password"  value={this.state.password}/>
          <br /><br />
          <input onChange={this.handleChange} name='confirm_password' type="password" placeholder="Confirm Password"  value={this.state.confirm}/>
          <br /><br />
          Who are you?
          <br />
          <select onChange={this.service_provider} >
              <option value="none">please select</option>
              <option value="seeker">I am a Service Provider</option>
              <option value="provider">I am Seeking a Service</option>
          </select>
          <br /><br />

          <button>Create new account</button>
        </form>
        <h3>{this.state.error_message}</h3>
      </div>
    )
  }
}

export default SignUp