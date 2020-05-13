import React from 'react';
import Header from '../../component/header/header'
import {HOME} from "../../constants/constants";
import HomeRegistrationBanner
  from "../../component/homeRegistrationBanner/homeRegistrationBanner";
import HomeAppFeatures from "../../component/homeAppFeatures/homeAppFeatures";
import Footer from "../../component/footer/footer";
import HomeEmail from "../../component/homeEmail/homeEmail";
import HomeRegistrationBannerMobile
  from "../../component-mobile/homeRegistrationBannerMobile/homeRegistrationBannerMobile";
import HomeAppFeaturesMobile
  from "../../component-mobile/homeAppFeaturesMobile/homeAppFeaturesMobile";
import HomeEmailMobile
  from "../../component-mobile/homeEmailMobile/homeEmailMobile";
import FooterMobile from "../../component-mobile/footer-mobile/footer-mobile";
import HeaderMobile from "../../component-mobile/header-mobile/headerMobile";

const Home = ({width}) => {
  const isMobile = width <= 500;
  if(isMobile){
    return (
        <div className="App">
          <HeaderMobile tab={HOME}/>
          <HomeRegistrationBannerMobile/>
          <HomeAppFeaturesMobile/>
          <HomeEmailMobile/>
          <FooterMobile/>
        </div>
    );
  }
  else {
    return (
        <div className="App">
          <Header tab={HOME}/>
          <HomeRegistrationBanner/>
          <HomeAppFeatures/>
          <HomeEmail/>
          <Footer/>
        </div>
    );
  }
}

export default Home;
