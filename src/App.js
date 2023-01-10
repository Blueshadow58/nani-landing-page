import React from 'react';
import { WhyChooseMe, WhoIAm, WhatIDo, Navbar, Header, Contact } from './components/index';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Poppins']
  }
});





function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <WhoIAm />
      <WhatIDo />
      <WhyChooseMe />
      <Contact />
    </div>
  );
}

export default App;
