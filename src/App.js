import './App.css';
import DrawerAppBar from './components/Header';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Card from './components/Card';
import MyCard from './components/Card';
import Banner from './components/Banner';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';




function App() {
  return (
    <div className="App">

      {/* <DrawerAppBar /> */}
      <Banner />
     <Menu />
      <About />
      <Gallery />
      <MyCard />
    </div>
  );
}

export default App;
