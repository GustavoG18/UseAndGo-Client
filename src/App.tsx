import ListProduct from "./packages/components/ListProduct/ListProduct";
import Menu from "./packages/components/Menu/Menu";
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import Footer from "./packages/components/Footer/Footer";
import './App.css'
import LandingPage from "./packages/components/LandingPage/LandingPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div style={{borderBottom: '0.5px grey solid'}}>
          <Menu />
        </div>
        <Routes>  
          <Route path="/" element={<LandingPage />}>All Products</Route>
          <Route path="/ArmyCaps" element={<div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}><ListProduct category={'Army caps'}/></div>}>Army Caps</Route>
          <Route path="/BaseballCaps" element={<div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}><ListProduct category={'Baseball Caps'}/></div>}>Baseball Caps</Route>
          <Route path="/Berets" element={<div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}><ListProduct category={'Berets'}/></div>}>Berets</Route>
        </Routes>
      </BrowserRouter>
      <div style={{margin: '0', padding: '0'}}>
        <Footer />
      </div>
    </>
  );
}

export default App;
