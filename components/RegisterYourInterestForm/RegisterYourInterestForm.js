import { useRef, useState } from 'react';

import Button from '../Button';

import { heading, layout, label, input } from './RegisterYourInterestForm.module.css';

const registerEmailAddress = async (emailAddress) => {
  try {
    const response = await fetch('https://p6aap78qf4.execute-api.eu-west-1.amazonaws.com/preprod/interest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: emailAddress,
        type: 'EMAIL'
      })
    })

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

const RegisterYourInterestForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState();
  const showSuccessMessage = submissionStatus === 'success';
  const showErrorMessage = submissionStatus === 'error';
  const disableFormSubmission = submissionStatus === 'loading';
  const emailRef = useRef(null);
  const onSubmit = async (evt) => {
    evt.preventDefault();
    setSubmissionStatus('loading');
    const wasSubmissionSuccessful = await registerEmailAddress(emailRef.current.value);
    setSubmissionStatus(wasSubmissionSuccessful ? 'success' : 'error');
  }

  if (showSuccessMessage) return (<p>Thanks for registering your interest</p>);
  
  return (
    <form onSubmit={onSubmit}>
      <legend className={heading}>Launch coming June 2020. Register to get first look access.</legend>
      <ul className={layout}>
        <li>
          {showErrorMessage && <p>Something went wrong. Please try again.</p>}
          <label htmlFor="register-interest-email" className={label}>Enter your email address</label>
          <input type="email" id="register-interest-email" name="register-interest-email" className={input} ref={emailRef} />
        </li>
        <li>
          <Button type="submit" disabled={disableFormSubmission}>Register your interest</Button>
        </li>
      </ul>
    </form>
  );
};

export default RegisterYourInterestForm;