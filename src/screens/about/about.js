import React from 'react';
import Header from '../../component/header/header'
import {ABOUT} from "../../constants/constants";
import Footer from "../../component/footer/footer";
import HomeEmail from "../../component/homeEmail/homeEmail";
import AboutRegistrationBanner
  from "../../component/aboutRegistrationBanner/aboutRegistrationBanner";
import AboutAppFeatures
  from "../../component/aboutAppFeatures/aboutAppFeatures";
import HeaderMobile from "../../component-mobile/header-mobile/headerMobile";
import HomeEmailMobile
  from "../../component-mobile/homeEmailMobile/homeEmailMobile";
import FooterMobile from "../../component-mobile/footer-mobile/footer-mobile";
import AboutRegistrationBannerMobile
  from "../../component-mobile/aboutRegistrationBannerMobile/aboutRegistrationBannerMobile";
import AboutAppFeaturesMobile
  from "../../component-mobile/aboutAppFeaturesMobile/aboutAppFeaturesMobile";

const About = ({width}) => {
  const isMobile = width <= 500;
  if(isMobile){
    return (
        <div className="App">
          <HeaderMobile tab={ABOUT}/>
          <AboutRegistrationBannerMobile/>
          <AboutAppFeaturesMobile/>
          <HomeEmailMobile/>
          <FooterMobile/>
        </div>
    );
  }
  else {
    return (
        <div className="App">
          <Header tab={ABOUT}/>
          <AboutRegistrationBanner/>
          <AboutAppFeatures/>
          <HomeEmail/>
          <Footer/>
        </div>
    );
  }
}

export default About;
