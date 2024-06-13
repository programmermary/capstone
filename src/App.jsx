
import Emergency from "./components/Emergency";
import Footer from "./components/Footer";
import Home from './components/Home'
import DailyCare from "./components/pages/DailyCare";
import Services from "./components/pages/Services";
import Team from "./components/pages/Team";
import AppRutes from './AppRutes';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import UserLoginForm from "./components/Forms/UserLoginForm";
import CreateTeam from "./components/Forms/CreateTeam";
import './MainStyle.css'
import homePage from './assets/images/homePage.svg'
import setting from './assets/images/Settings.svg'
import Emergencybotton from "./components/bottons/Emergencybotton";
import servicesIcon from './assets/ourserive.png'
import Cards from "./components/Cards";
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
 </BrowserRouter>
  );
}

{/* 
    <div className="h-45">
      <img src={homePage} className="w-full "/>
    </div>
    <div className="content">
      <div className=" img flex flex-col justify-start items-start">
      <Emergencybotton className="pt-[-10]" />
      <div className="services flex flex-col justify-center items-center">
        <div className="card flex items-center justify-space w-3/4 rounded-xl bg-red-400">
          <img src={servicesIcon} className="w-1/4 h-1/4" alt="" />
          <h4>خدماتنا</h4>
        </div>
      </div>
      </div>
    </div> */}

export default App;
