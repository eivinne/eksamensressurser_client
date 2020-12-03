import React, { useState } from 'react';
import { FormStyle } from '../styles/StyledComponents';

const ViewContactComponent = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");

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

    const handleMessageInput = (e) => {
        let inputMessage = e.target.value;
        setMessage(inputMessage);
    };

    /*const postUserToApi = () => {
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
    }*/

    //needs to write to db
    /*const registerUser = (e) => {
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

        <FormStyle className="ContactForm">
            <p>Kontakt oss</p>
            
            <p>Name</p>
            <input type="text" placeholder="First name" onChange={handleFirstNameInput} value={firstName} required/>
            <p>Name</p>
            <input type="text" placeholder="Last name" onChange={handleLastNameInput} value={firstName} required/>
            <p>Email</p>
            <input type="email" placeholder="Email" onChange={handleEmailInput} value={email} autoComplete="email" required></input>
            <p>Message</p>
            <input type="text" placeholder="Message" value={message} onChange={handleMessageInput} required></input>
            
        </FormStyle>

    )
}
export default ViewContactComponent;