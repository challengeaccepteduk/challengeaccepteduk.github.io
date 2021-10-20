import Content from '../../components/Content';
import {useEffect} from "react";
import Router from 'next/router'

const Seedrs = () => {
  useEffect(() => {
        Router.push('https://www.seedrs.com/challengeaccepted/coming-soon')
  },[])
  return (
      <Content>
        <p>Redirecting</p>
      </Content>
  );
};

export async function getStaticProps() {
  return {
    props: {
      seoTitle: 'Seedrs',
      seoDescription: 'Seedrs',
      headline: 'Seedrs',
      includeRegisterButton: false,
    },
  }
}
export default Seedrs;
