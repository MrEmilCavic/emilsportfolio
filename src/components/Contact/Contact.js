import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Contact.css';
import Linkedin from '../util/linkedinlogo.png';
import Github from '../util/githublogo.png';

function Contact() {

    const [contactName, setContactName] = useState("") ;
    const [nameError, setNameError] = useState(false);
    const [contactSubject, setContactSubject] = useState("");
    const [contactMail, setContactMail] = useState("");
    const [mailError, setMailError] = useState(false);
    const [contactMessage, setContactMessage] = useState("");
    const [messageError, setMessageError] = useState(false);

    const theme = createTheme({
        palette: {
          primary: {
            main: '#ad5d34',
            contrastText: '#fff'
          },
          secondary: {
            main: '#a5131a',
          },
          raisedButton: {
            textColor: '#fff'
          },
        },
      });

    const handleNameChange = e => {
        setContactName(e.target.value);
        if (e.target.validity.valid) {
            setNameError(false);
        } else {
            setNameError(true);
        }
    }

    const handleSubjectChange = e => {
        setContactSubject(e.target.value);
    }

    const handleMailChange = e => {
        setContactMail(e.target.value);
        if (e.target.validity.valid) {
            setMailError(false);
        } else {
            setMailError(true);
        }
    }

    const handleMessageChange = e => {
        setContactMessage(e.target.value);
        if (e.target.validity.valid) {
            setMessageError(false);
        } else {
            setMessageError(true);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(nameError || mailError || messageError) {
            alert("Oops! Something went wrong! Please check if everything is filled out correctly!");
        } else {
            fetch(`https://formsubmit.co/69c3ee0ddb2d9f98693eaa4cb9f6e167`, {
            method: 'POST',
            headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
            body : JSON.stringify({
                name: contactName,
                email: contactMail,
                _subject : contactSubject,
                message: contactMessage,
                _captcha: "false",
                })
            }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
            setContactName("");
            setContactMail("");
            setContactSubject("");
            setContactMessage("");
            alert("Thank you for saying hi! I will get back to you asap!");
            }
        }

    return (
        <div className="Contact">
            <h2>Don't be a stranger!</h2>
            <h3> Feel free to shoot me a message:</h3>
            <div className="contactForm">
                <ThemeProvider theme={theme}>
                <Box onSubmit={handleSubmit}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                  }}
                noValidate
                autoComplete="off">
                    <div className="personalWrap">
                    <TextField required value={contactName} onChange={handleNameChange}
                        error={nameError}
                        inputProps={{
                            pattern: "[A-Za-z ]+",
                        }}
                        id="outlined-basic" label="Name" variant="outlined" 
                        name="name"
                        helperText={nameError ? "Please enter your name" : ""}/>
                    <TextField required value={contactMail} onChange={handleMailChange}
                        name="email"
                        error={mailError}
                        inputProps={{
                            type: "email",
                        }}
                        id="outlined-basic" label="e-Mail adress" variant="outlined" 
                        helperText={mailError ? "Please enter your e-mail" : ""} />
                    <TextField value={contactSubject} onChange={handleSubjectChange}
                        id="_subjct" label="Subject" variant="outlined" 
                        name="_subjct" />
                    </div>
                    <div className="message">
                    <TextField required multiline rows={10} value={contactMessage}
                        onChange={handleMessageChange} error={messageError}
                        name="message"
                        inputProps= {{
                            pattern: "[a-zA-Z0-9.-!,?]"
                        }}
                        id="message" label="Message" variant="outlined" fullWidth="true"
                        size="large"
                        helperText={messageError ? "Please enter a text message":""}/>
                    </div>
                        <Button
                        color="primary"
                            variant="contained"
                            type="submit">
                                Send!
                        </Button>
                </Box>
                </ThemeProvider>
            </div>
            <div className="socialsWrapper">
            or connect with me on  
            <a href="https://www.linkedin.com/in/emil-cavic" target="_blank"><img src={Linkedin} className="linkedinfoot" alt="LinkedIn Logo" /></a>
            <a href="https://github.com/MrEmilCavic" target="_blank"><img src={Github} className="githubfoot" alt="github Logo" width="50px"/></a>
            </div>
        </div>
    );
}

export default Contact;