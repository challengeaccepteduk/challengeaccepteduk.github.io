import Button from '../Button';

import {} from './ContactUsForm.module.css';

const ContactUsForm = () => {
  return (
    <form>
      <legend>Email us at <a href="mailto:hello@challengeacceptedapp.co.uk">hello@challengeacceptedapp.co.uk</a>, or fill out the form below.</legend>
      <ul>
        <li>
          <label htmlFor="contact-us-name">Name</label>
          <input type="text" id="contact-us-name" name="contact-us-name" required />
        </li>
        <li>
          <label htmlFor="contact-us-company">Company</label>
          <input type="text" id="contact-us-company" name="contact-us-company" />
        </li>
        <li>
          <label htmlFor="contact-us-email">Enter your email address</label>
          <input type="email" id="contact-us-email" name="contact-us-email" required />
        </li>
        <li>
          <label htmlFor="contact-us-message">Message</label>
          <textarea id="contact-us-message" name="contact-us-message" />
        </li>
        <li>
          <Button type="submit">Register your interest</Button>
        </li>
      </ul>
    </form>
  );
};

export default ContactUsForm;