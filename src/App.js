import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {WhyChooseMe,WhoIAm,WhatIDo,Navbar,Header,Contact} from './components/index';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/header' element={<Header/>} />
              <Route path='header/contact' element={<Contact/>} />
              <Route path='/whoIAm' element={<WhoIAm/>} />
              <Route path='/whatIDo' element={<WhatIDo/>} />
              <Route path='whatIDo/contact' element={<Contact/>} />
              <Route path='/whyChooseMe' element={<WhyChooseMe/>} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
