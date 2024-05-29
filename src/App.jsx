
import Emergency from "./components/Emergency";
import Footer from "./components/Footer";
import Home from './components/Home'
import DailyCare from "./components/pages/DailyCare";
import Services from "./components/pages/Services";
import Team from "./components/pages/Team";
import AppRutes from './AppRutes';

import { BrowserRouter, Route,  Routes } from 'react-router-dom';
function App() {
  return (
   <div className="main-app">
  
     {/* <Emergency/>
    <Footer/>
     <Home/> */}

         <BrowserRouter>
         <AppRutes/>
      {<Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path="/dailycare" element={<DailyCare/>}/>
        <Route path="/emergency" element={<Emergency/>}/>
    </Routes>}
      </BrowserRouter>
   </div>
  );
}

export default App;
