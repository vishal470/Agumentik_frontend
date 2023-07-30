import './App.css';
import Content from './Components/Content/Content';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Number from './Components/Number/Number';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Number/>
      <Content/>
    </div>
  );
}

export default App;
