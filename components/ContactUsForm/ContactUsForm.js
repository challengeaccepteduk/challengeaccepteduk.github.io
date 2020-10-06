import { useRef, useState } from 'react';

import Button from '../Button';

import { heading, layout, label, input } from './ContactUsForm.module.css';

const ContactUsForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState();
  const showSuccessMessage = submissionStatus === 'success';
  const showErrorMessage = submissionStatus === 'error';
  const disableFormSubmission = submissionStatus === 'loading';

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const companyRef = useRef(null);
  const numberRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const response = await fetch('https://p6aap78qf4.execute-api.eu-west-1.amazonaws.com/preprod/interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'MESSAGE',
          name: nameRef.current.value,
          company: companyRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
          number: numberRef.current.value,
        }),
      });

      if (response.ok) return setSubmissionStatus('success');
    } catch (e) {
      console.error(e);
    }

    return setSubmissionStatus('error');
  };

  if (showSuccessMessage) return (<p>Thanks for contacting us</p>);

  return (
    <form onSubmit={handleSubmit}>
      <legend className={heading}>Email us at <a href="mailto:hello@challengeacceptedapp.com">hello@challengeacceptedapp.com</a>, or fill out the form below.</legend>
      {showErrorMessage && <p>Something went wrong. Please try again.</p>}
      <ul className={layout}>
        <li>
          <label className={label} htmlFor="contact-us-name">Name *</label>
          <input type="text" id="contact-us-name" name="contact-us-name" required ref={nameRef} className={input} />
        </li>
        <li>
          <label className={label} htmlFor="contact-us-email">Enter your email address *</label>
          <input type="email" id="contact-us-email" name="contact-us-email" required ref={emailRef} className={input} />
        </li>
        <li>
          <label className={label} htmlFor="contact-us-company">Company</label>
          <input type="text" id="contact-us-company" name="contact-us-company" ref={companyRef} className={input} />
        </li>
        <li>
          <label className={label} htmlFor="contact-us-phone-number">Enter your phone number</label>
          <input type="tel" id="contact-us-phone-number" name="contact-us-phone-number" ref={numberRef} className={input} />
        </li>
        <li>
          <label className={label} htmlFor="contact-us-message">Message</label>
          <textarea id="contact-us-message" name="contact-us-message" ref={messageRef} className={input} />
        </li>
        <li>
          <Button type="submit" disabled={disableFormSubmission}>Submit</Button>
        </li>
      </ul>
    </form>
  );
};

export default ContactUsForm;
