import Header from './components/Header/Header';
import Hero from './components/Hero/Hero.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Company from './components/Company/Company';
import Residencies from './components/residencies/residencies.jsx';
import Value from './components/Value/Value';
import Contacts from './components/Contacts/Contacts';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
      <Header/>
      <Hero/>
      </div>
      <Company/>
      <Residencies/>
      <Value/>
      <Contacts/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
