import React, {useEffect} from 'react';
import Header from '../../component/header/header'
import Footer from "../../component/footer/footer";
import HeaderMobile from "../../component-mobile/header-mobile/headerMobile";
import FooterMobile from "../../component-mobile/footer-mobile/footer-mobile";
import {useLocation} from "react-router-dom";
import UnsubscribeForm from "../../component/unsubscribeForm/unsubscribeForm";
import UnsubscribeBanner
  from "../../component/unsubscribeBanner/unsubscribeBanner";
import UnsubscribeBannerMobile
  from "../../component-mobile/unsubscribeBannerMobile/unsubscribeBannerMobile";

const Unsubscribe = ({width}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const isMobile = width <= 500;
  if(isMobile){
    return (
        <div className="App">
          <HeaderMobile/>
          <UnsubscribeBannerMobile/>
          <UnsubscribeForm/>
          <FooterMobile/>
        </div>
    );
  }
  else {
    return (
        <div className="App">
          <Header/>
          <UnsubscribeBanner/>
          <UnsubscribeForm />
          <Footer/>
        </div>
    );
  }
}

export default Unsubscribe;
