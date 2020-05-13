import React from 'react';
import Header from '../../component/header/header'
import {CONTACT} from "../../constants/constants";
import Footer from "../../component/footer/footer";
import ContactBanner from "../../component/contactBanner/contactBanner";
import ContactForm from "../../component/contactForm/contactForm";
import HeaderMobile from "../../component-mobile/header-mobile/headerMobile";
import FooterMobile from "../../component-mobile/footer-mobile/footer-mobile";
import ContactBannerMobile
  from "../../component-mobile/contactBannerMobile/contactBannerMobile";
import ContactFormMobile
  from "../../component-mobile/contactFormMobile/contactFormMobile";
const Contact = ({width}) => {
  const isMobile = width <= 500;
  if(isMobile){
    return (
        <div className="App">
          <HeaderMobile tab={CONTACT}/>
          <ContactBannerMobile/>
          <ContactFormMobile/>
          <FooterMobile/>
        </div>
    );
  }
  else {
    return (
        <div className="App">
          <Header tab={CONTACT}/>
          <ContactBanner/>
          <ContactForm/>
          <Footer/>
        </div>
    );
  }
}

export default Contact;
