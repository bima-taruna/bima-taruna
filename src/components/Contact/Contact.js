import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {Home,Call,Email,LinkedIn,GitHub} from '@material-ui/icons'
import { Link} from '@mui/material'
import './contact.scss'

export default function Contact() {
    const [message,setMessage] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setMessage(true)
        emailjs.sendForm('service_u5g7ksi','template_70rojsc',e.target,'user_lXODzM5ZEHyaLmE92scWS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (
        <div className="contact" id='contact'>
            <div className="left">
                <h2>Contact Information</h2>
                <div className="isi">
                
                    <ul>
                    
                    <li className="item">
                        <Home />
                        <span>Medan, Jl. Deli Tua, Gg Sentosa, Desa Suka Makmur, Kedai Durian</span>
                    </li>
                    <li className="item">
                        <Call/>
                        <span>(+62)85762068329, (+62)85834279309(wa)</span>
                    </li>
                    <li className="item">
                        <Email/>
                        <span>bimataruna21@gmail.com</span>
                    </li>
                    
                    </ul>
                <div className="icons">
                    <div  className="kiri">
                    <Link href="https://www.linkedin.com/in/bima-taruna-0a382b201" target="_blank">
                      <LinkedIn style={{ fontSize:40,color:'white' }}/>
                    </Link>
                    </div>
                    <div title="go to this project github" className="kanan">
                    <Link href="https://github.com/bima-taruna/bima-taruna" target="_blank">
                      <GitHub style={{ fontSize:40,color:'white' }}/>
                    </Link>
                    </div>
                    
                </div>
                </div>
            </div>
            <div className="right">
                <div className="container">
                <h2>Get in Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" placeholder="Name" required/>
                    <input type="email" name="email" placeholder="Email" required/>
                    <textarea name="message" placeholder="Message" required></textarea>
                    <button type="submit" value="Send">Send</button>
                    {message && <span>Thank you for your message, I'll reply ASAP</span>}
                </form>
                </div>
            </div>
        </div>
    )
}
