import React, { useState } from 'react';
import { FormStyle,FormButton } from '../styles/StyledComponents';

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
        setPassword(inputConfirmedPassword);
    };

   /* const postUserToApi = () => {
        const sendData = async () => {
            const { data, error } = await register({
                email: email,
                password: password,
            });
            if (error) {
                setMessage("email allready registered");
            }
            else {
                setMessage("User " + email + " created");
                console.log(data.email);
                localStorage.clear();
                localStorage.setItem('user', data.email);
                localStorage.setItem('id', data._id);
                window.location = "/Home";
            }
        };
        sendData();
    }

    //needs to write to db
    const registerUser = (e) => {
        e.preventDefault();
        if (email !== "" && password !== "" && confirmedPassword !== "") {
            if (!email.includes("@") && !email.includes(".")) {
                setMessage("Real email needed")
            }
            else if (password !== confirmedPassword) {
                setMessage("Passwords must match")
            }
            //check if user already exist first!!!
            else { //
                setUser({
                    email: email,
                    password: password,
                })
                postUserToApi()
            }
        }<FormButton onClick={registerUser}>SignUp</FormButton>
    };*/

    return (

        <FormStyle className="SignUp">
            <p>Registrer deg</p>
            
            <p>Name</p>
            <input type="text" placeholder="First name" onChange={handleFirstNameInput} value={firstName} required/>
            <p>Last Name</p>
            <input type="text" placeholder="Last name" onChange={handleLastNameInput} value={lastName} required/>
            <p>Email</p>
            <input type="email" placeholder="Email" onChange={handleEmailInput} value={email} autoComplete="email" required></input>
            <p>Password</p>
            <input type="password" placeholder="Password" onChange={handlePasswordInput} value={password} required></input>
            <input type="submit" value="Submit"/>
        </FormStyle>

    )
}
export default ViewContactComponent;