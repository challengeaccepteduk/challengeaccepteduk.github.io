import { useRef, useState } from 'react';

import Button from '../Button';

import { heading, layout, label, input } from './UnsubscribeForm.module.css';
import {API_BASE} from "../../constants/social";
import { useRouter } from 'next/router'

const UnsubscribeForm = () => {
  const router = useRouter()
  console.log(router.query)
  const [submissionStatus, setSubmissionStatus] = useState();
  const showSuccessMessage = submissionStatus === 'success';
  const showErrorMessage = submissionStatus === 'error';
  const disableFormSubmission = submissionStatus === 'loading';

  const emailRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const response = await fetch(API_BASE + '/marketing/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailRef.current.value,
        }),
      });

      if (response.ok) return setSubmissionStatus('success');
    } catch (e) {
      console.error(e);
    }

    return setSubmissionStatus('error');
  };

  if (showSuccessMessage) return (<p>You have successfully unsubscribed</p>);

  return (
    <form onSubmit={handleSubmit}>
      {/*<legend className={heading}>Email us at <a href="mailto:hello@challengeacceptedapp.com">hello@challengeacceptedapp.com</a>, or fill out the form below.</legend>*/}
      {showErrorMessage && <p>Something went wrong. Please try again.</p>}
      <ul className={layout}>
        <li>
          <label className={label} htmlFor="contact-us-email">Enter your email address *</label>
          <input type="email" id="contact-us-email" name="contact-us-email" required ref={emailRef} className={input} defaultValue={router.query && router.query.email ? router.query.email : null} contentEditable={false} />
          <Button type="submit" disabled={disableFormSubmission}>Unsubscribe</Button>
        </li>
      </ul>

    </form>
  );
};

export default UnsubscribeForm;
