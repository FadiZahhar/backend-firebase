import React, {Component} from 'react';

class Login extends Component {

  state = {
    formdata:{
      name:"",
      lastname:"",
      password:"",
      email:"",
    },
    register:false,
    loading:false,
  }

  handleFormType = () => {
    this.setState(prevState => ({
      register:!prevState.register
    }))
  }

  handleSubmit = () => {

  }

  handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      formdata:{
        ...prevState.formdata,
        [name]: value
      }
    }))

  }
  render() {
    const {register,formdata,loading} = this.state;
    const formTitle = register ? 'Register' : 'Sign In';
    return (
      <>
      <div className="container">
      <form className="form-signin" onSubmit={this.handleSubmit}>
    <h1 className="h3 mb-3 font-weight-normal">
      {formTitle }
    </h1>

    {
      register ? 
      <>
            <input 
                type="text" 
                id="name" 
                name="name"
                className="form-control mb-3" 
                placeholder="Your name"
                onChange={this.handleInputs}
                value={formdata.name}
            />

            <input 
                type="text" 
                id="lastname" 
                name="lastname"
                className="form-control mb-3" 
                placeholder="Your lastname"
                onChange={this.handleInputs}
                value={formdata.lastname}
            />
        </>
      :null
    }
        



    <input 
        type="email" 
        id="email" 
        name="email"
        className="form-control mb-3" 
        placeholder="Email address"
        onChange={this.handleInputs}
        value={formdata.email}
    />

    <input 
        type="password" 
        id="password" 
        name="password"
        className="form-control" 
        placeholder="Password" 
        onChange={this.handleInputs}
        value={formdata.password}
    />

    <br/>
    <button 
        className="btn btn-lg btn-primary btn-block" 
        type="submit"
        disabled={loading}
    >
        Register or Login
    </button>

    <div className="mt-3">
         {register ? 'Need to sign in' :'Not registered'} click 
        <span  
            className="login_type_btn" 
            onClick={() => this.handleFormType()}
        > here </span> 
        to {register ? 'register' : 'login' }.
    </div>
</form>
      </div>
      </>
    )
  }
}

export default Login;
