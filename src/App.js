import React from 'react';
import {WhyChooseMe,WhoIAm,WhatIDo,Navbar,Header,Contact} from './components/index';

function App() {
  return (
    <div className=" ">
      <Navbar/>
      <Header/>
      <WhoIAm/>
      <WhatIDo/>
      <WhyChooseMe/>      
      <Contact/>     
    </div>
  );
}

export default App;
