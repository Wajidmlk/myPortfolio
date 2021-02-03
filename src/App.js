import React,{Component} from 'react';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';
import 'tachyons';
class App extends Component{
  render()
  {
    return(
      <div>
        <Home /> 
        <Navigation /> 
        <About /> 
        <Projects /> 
        <Contact />
      </div>
    );
  }
}
export default App;
