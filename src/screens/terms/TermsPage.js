import React, {useEffect} from 'react';
import Header from '../../component/header/header'
import Footer from "../../component/footer/footer";
import HeaderMobile from "../../component-mobile/header-mobile/headerMobile";
import FooterMobile from "../../component-mobile/footer-mobile/footer-mobile";
import {useLocation} from "react-router-dom";
import {Terms} from "../../component/terms/terms";

const TermsPage = ({width}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const isMobile = width <= 500;
  if(isMobile){
    return (
        <div>
          <div className="App">
            <HeaderMobile className="App" tab={''}/>
          </div>          <div style={{height:20, backgroundColor:'#2A3746'}}></div>
          <div style={{width: '80%', marginLeft: '10%', marginTop: '5%', marginBottom: '5%'}}>
            <Terms/>
          </div>
          <FooterMobile/>
        </div>
    );
  }
  else {
    return (
        <div>
          <div className="App">
            <Header className="App" tab={''}/>
          </div>
          <div style={{height:20, backgroundColor:'#2A3746'}}></div>
          <div style={{width: '80%', marginLeft: '10%', marginTop: '5%', marginBottom: '5%'}}>
            <Terms/>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default TermsPage;
