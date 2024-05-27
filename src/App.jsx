import Emergency from "./components/Emergency";
import Footer from "./components/Footer";
import Home from "./components/Home";
import './MainStyle.css'
function App() {
  return (
   <div className="main-app">
     {/* <Home/> */}
     <Emergency/>
    <Footer/>
   </div>
  );
}

export default App;
