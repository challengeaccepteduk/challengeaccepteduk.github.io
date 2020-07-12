import Button from '../Button';

import { form, heading, layout, label, input } from './RegisterYourInterestForm.module.css';

const RegisterYourInterestForm = () => {
  return (
    <form className={form}>
      <legend className={heading}>Launch coming June 2020. Register to get first look access.</legend>
      <ul className={layout}>
        <li>
          <label htmlFor="email" className={label}>Enter your email address</label>
          <input type="email" id="email" name="email" className={input} />
        </li>
        <li>
          <Button type="submit">Register your interest</Button>
        </li>
      </ul>
    </form>
  );
};

export default RegisterYourInterestForm;