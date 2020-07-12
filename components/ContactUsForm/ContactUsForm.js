import Button from '../Button';

import {} from './ContactUsForm.module.css';

const ContactUsForm = () => {
  return (
    <form>
      <legend>Launch coming June 2020. Register to get first look access.</legend>
      <ul>
        <li>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </li>
        <li>
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" />
        </li>
        <li>
          <label htmlFor="email">Enter your email address</label>
          <input type="email" id="email" name="email" required />
        </li>
        <li>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </li>
        <li>
          <Button type="submit">Register your interest</Button>
        </li>
      </ul>
    </form>
  );
};

export default ContactUsForm;