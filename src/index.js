import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Placement from './components/placement/placement';
import Pres from './components/presentation/pres';
import reportWebVitals from './reportWebVitals';
import Testimonials from './components/Testimonials/Testimonials';
import Keyfit from './components/keyfit/keyfit';
import WhyZeb from './components/whyzeb/whyZeb';
import WhatTheySay from './components/whattheysay/whatTheySay';
import SapCert from './components/sapcert/SapCert';
import Footer from './components/footer/footer';
import FAQ from './components/faq/FAQ';
import Award from './components/award/award';
import Hero from './components/heropage/hero';
import Navbar from './components/navbar/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar/>
  < Hero/>
    <WhyZeb/>
    <Keyfit/>
    <WhatTheySay/>
    {/* <SapCert/> */}
    <Award/>
    <Testimonials/>
    <FAQ/>
    <Pres/>
    <Placement />
    {/* <Footer/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
