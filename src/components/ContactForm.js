import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled('form') `
    flex: 1 1 100%;
`

const LightTealButton = styled.button `
    background: #199BAA;
    color: #FFF;
    font-size: 2rem;
    padding: 10px 7.5rem 5px; // Typefix
    border: none;
    text-transform: uppercase;
    margin-top: 2.5rem;
`

const FormLabel = styled('label') `
    font-size: 1.5rem;
    font-weight: 500;
    color: #222;
    flex: 1 1 100%;
    margin-bottom: 0;
    text-transform: uppercase;
`

const FormInput = styled('input') `
    font-size: 1.5rem;
    font-weight: 100;
    color: #222;
    width: 100%;
    padding: 1rem;
    margin-bottom: 2.5rem;
    border: 2px solid #EEE;
`

const FormTextArea = styled('textarea') `
    font-size: 1.5rem;
    font-weight: 100;
    color: #222;
    width: 100%;
    height: 10rem;
    padding: 1rem;
    border: 2px solid #EEE;
`

const HoneyPot = styled('input') `
    display: none;
`

const ContactForm = ({ action, name }) => (
    <Form 
        key="contact-form"
        name="contact-form"
        method="POST"
        action={'/no-cache=1'}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
    >
        <FormLabel htmlFor="name">Name</FormLabel>
        <div>
            <FormInput name="name" type="name" placeholder="Enter your full name" />
        </div>
        <HoneyPot name="bot-field" type="pot-name" />
        <FormLabel htmlFor="email">Email</FormLabel>
        <div>
            <FormInput name="email" type="email" placeholder="Enter your email address" />
        </div>
        <FormLabel htmlFor="tel">Telephone Number</FormLabel>
        <div>
            <FormInput name="tel" type="tel" placeholder="Enter your telephone number" />
        </div>
        <FormLabel htmlFor="message">Message</FormLabel>
        <div>
            <FormTextArea name="message" placeholder="What would you like to talk about?" />
        </div>
        <LightTealButton type="submit">Send</LightTealButton>
    </Form>
)

ContactForm.propTypes = {
    action: PropTypes.string.isRequired,
};
  
export default ContactForm;