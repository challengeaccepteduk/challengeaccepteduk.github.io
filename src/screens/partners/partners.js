import React, {useEffect} from 'react';
import Header from '../../component/header/header'
import {PARTNER} from "../../constants/constants";
import Footer from "../../component/footer/footer";
import HomeEmail from "../../component/homeEmail/homeEmail";
import PartnerRegistrationBanner
  from "../../component/partnerRegistrationBanner/partnerRegistrationBanner";
import PartnerAppFeatures
  from "../../component/partnerAppFeatures/partnerAppFeatures";
import HeaderMobile from "../../component-mobile/header-mobile/headerMobile";
import HomeEmailMobile
  from "../../component-mobile/homeEmailMobile/homeEmailMobile";
import FooterMobile from "../../component-mobile/footer-mobile/footer-mobile";
import PartnerRegistrationBannerMobile
  from "../../component-mobile/partnerRegistrationBannerMobile/partnerRegistrationBannerMobile";
import PartnerAppFeaturesMobile
  from "../../component-mobile/partnerAppFeaturesMobile/partnerAppFeaturesMobile";
import {useLocation} from "react-router-dom";
const Partners = ({width}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const isMobile = width <= 500;
  if(isMobile){
    return (
        <div className="App">
          <HeaderMobile tab={PARTNER}/>
          <PartnerRegistrationBannerMobile/>
          <PartnerAppFeaturesMobile/>
          <HomeEmailMobile/>
          <FooterMobile/>
        </div>
    );
  }
  else {
    return (
        <div className="App">
          <Header tab={PARTNER}/>
          <PartnerRegistrationBanner/>
          <PartnerAppFeatures/>
          <HomeEmail/>
          <Footer/>
        </div>
    );
  }
}

export default Partners;
