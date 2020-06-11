import React, {useEffect} from 'react';
import Header from '../../component/header/header'
import Footer from "../../component/footer/footer";
import HeaderMobile from "../../component-mobile/header-mobile/headerMobile";
import FooterMobile from "../../component-mobile/footer-mobile/footer-mobile";
import {useLocation} from "react-router-dom";
import {PrivacyPolicy} from "../../component/privacyPolicy/privacyPolicy";

const Privacy = ({width}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const isMobile = width <= 500;
  if(isMobile){
    return (
        <div>
          <HeaderMobile tab={''}/>
          <div style={{height:20, backgroundColor:'#2A3746'}}></div>
          <div style={{width: '80%', marginLeft: '10%', marginTop: '5%', marginBottom: '5%'}}>
            <PrivacyPolicy/>
          </div>
          <FooterMobile/>
        </div>
    );
  }
  else {
    return (
        <div>
          <Header tab={''}/>
          <div style={{height:20, backgroundColor:'#2A3746'}}></div>
          <div style={{width: '80%', marginLeft: '10%', marginTop: '5%', marginBottom: '5%'}}>
            <PrivacyPolicy/>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default Privacy;
