import React from 'react';
import {WhyChooseMe,WhoIAm,WhatIDo,Header,Contact} from './components/index';

function App() {
  return (
    <div className="App ">
      <Header/>
      <WhoIAm/>
      <WhatIDo/>
      <WhyChooseMe/>      
      <Contact/>     
    </div>
  );
}

export default App;