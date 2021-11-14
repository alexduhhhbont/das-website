import React from 'react'
import '../../styles/form.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function ContactForm() {
    return (
        <form name="contact" method="POST" data-netlify="true">
            <TextField
                id="name-input"
                label="Name"
                type="text"
                className="forminput"
                fullWidth
            />
            <TextField
                id="mail-input"
                label="Email"
                type="email"
                className="forminput"
                fullWidth
            />
            <TextField
            id="message-input"
            label="Message"
            multiline
            rows={4}
            className="forminput"
            fullWidth
            />
            <Button type="submit" variant="contained">Send</Button>
        </form>
    )
}
