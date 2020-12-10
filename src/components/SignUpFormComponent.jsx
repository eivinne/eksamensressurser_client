import React, { useState } from 'react';
import { FormStyle,FormButton } from '../styles/StyledComponents';
import {registerUser,login} from '.././utils/eventService'

const ViewContactComponent = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const handleEmailInput = (e) => {
        let inputEmail = e.target.value;
        setEmail(inputEmail);
    };

    const handleFirstNameInput = (e) => {
        let inputFirstName = e.target.value;
        setFirstName(inputFirstName);
    };

    const handleLastNameInput = (e) => {
        let inputLastName = e.target.value;
        setLastName(inputLastName);
    };

    const handlePasswordInput = (e) => {
        let inputPassword = e.target.value;
        setPassword(inputPassword);
    };
    const handleConfirmedPasswordInput = (e) => {
        let inputConfirmedPassword = e.target.value;
        setConfirmedPassword(inputConfirmedPassword);
    };

    const onSubmit = async (event) => {
        
        event.preventDefault();
       const register_data = await registerUser({ firstname: firstName,lastname: lastName,email: email,password: password,role: "User"});
       console.log(register_data);
       if(password !== confirmedPassword){
           alert("Passordene stemmer ikke!");
           
       }else if(register_data.status === 200){
        const login_result = await login({email,password});
            if(login_result.status === 200){
                window.location="/Home";
        }
    }else {
        const error = new Error(register_data.error);
        throw error;
       }
      
      }
      
    return (

        <FormStyle className="SignUp" >
            <p>Registrer deg</p>
            
            <p>Name</p>
            <input type="text" placeholder="First name" onChange={handleFirstNameInput} value={firstName} required/>
            <p>Last Name</p>
            <input type="text" placeholder="Last name" onChange={handleLastNameInput} value={lastName} required/>
            <p>Email</p>
            <input type="email" placeholder="Email" onChange={handleEmailInput} value={email} autoComplete="email" required></input>
            <p>Password</p>
            <input type="password" placeholder="Password" onChange={handlePasswordInput} value={password} required></input>
            <p>Confirm Password</p>
            <input type="password" placeholder="Confirm Password" onChange={handleConfirmedPasswordInput} value={confirmedPassword} required></input>

            <input type="submit" className="submitButton" value="Submit" onClick={onSubmit}/>
        </FormStyle>

    )
}
export default ViewContactComponent;