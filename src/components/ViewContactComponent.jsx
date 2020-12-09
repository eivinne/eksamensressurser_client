import React, { useState } from 'react';
import { FormStyle } from '../styles/StyledComponents';
import {login, sendContactRequest} from '.././utils/eventService';

const ViewContactComponent = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const handleEmailInput = (e) => {
        let inputEmail = e.target.value;
        setEmail(inputEmail);
    };

    const handleNameInput = (e) => {
        let inputFirstName = e.target.value;
        setFirstName(inputFirstName);
    };

    const handleMessageInput = (e) => {
        let inputMessage = e.target.value;
        setMessage(inputMessage);
    };
    
     
      const onSubmit = async (event) => {
        event.preventDefault();
        const register_data = await sendContactRequest({firstName: firstName,email: email,message:message});
        console.log(register_data);
        if(register_data.status === 200){
             window.location="/Submitted";
        }
    } 

    return (

        <FormStyle className="ContactForm">
            <p>Kontakt oss</p>
            
            <p>Navn</p>
            <input type="text" placeholder="Skriv inn ditt navn" onChange={handleNameInput} value={firstName} required/>
            <p>E-Post</p>
            <input type="email" placeholder="Email" onChange={handleEmailInput} value={email} autoComplete="email" required></input>
            <p>Melding</p>
            <textarea type="text" rows="10" cols="50" placeholder="Melding" onChange={handleMessageInput} value={message} required/>
            
            <input type="submit" value="Send" onClick={onSubmit}/>
        </FormStyle>

    )
}
export default ViewContactComponent;