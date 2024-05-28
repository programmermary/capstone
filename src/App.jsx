
import Emergency from "./components/Emergency";
import Footer from "./components/Footer";
import Home from './components/Home'
import DailyCare from "./components/pages/DailyCare";
import Services from "./components/pages/Services";
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
function App() {
  return (
   <div className="main-app">
     {/* <Emergency/>
    <Footer/>
     <Home/> */}
         <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/dailycare" element={<DailyCare/>}/>
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
