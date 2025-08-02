import { useState, useEffect } from 'react';
import axios from "axios";
import "./styling/Contact.css";

//Shows a Contact form and some general contact info.
function Contact () {

    return (
        <div>
            <form id="contact-form">
                <label id="name-label">
                    <input type="text"/>
                </label>
            </form>
            <div>

            </div>
        </div>
    );
}

export default Contact;