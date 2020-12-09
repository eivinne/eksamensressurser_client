import axios from "axios";
import React, { Component,browserHistory } from "react";
import { FormStyle,FormButton } from '../styles/StyledComponents';
import {login} from '.././utils/eventService'

//Loginmetodikken er hentet fra https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/

export default class Login extends Component {

      constructor(props){
          super(props)
          this.state = {
              email:'',
              password:'',
          }
      }

      handleInputChange = (event) => {
          const {value, name} = event.target;
          this.setState({
              [name]: value
          });
      }

      onSubmit = async (event) => {
        event.preventDefault();
       const login_result = await login({email:this.state.email, password: this.state.password});
       if(login_result.status === 200){
        window.location = "/Home";
       }else if(login_result.status === 401){
           alert("Feil Passord!");
           
       }else {
        const error = new Error(login_result.error);
        throw error;
       }
      
      }

      render() {
    return (
           <FormStyle onSubmit={this.onSubmit} >
            <p>Login</p>
            <p>E-Post</p>
            <input type="text" name="email" placeholder="Skriv inn E-post" value={this.state.email} autoComplete="email" onChange={this.handleInputChange} required />
            <p>Passord</p>
            <input type="password" name="password" placeholder="Skriv Inn Passord" value={this.state.password} autoComplete="current-password" onChange={this.handleInputChange} required />
           
            <input type="submit" className="submitButton" value="Submit"/>
            
            </FormStyle>

        
        )
}
};

