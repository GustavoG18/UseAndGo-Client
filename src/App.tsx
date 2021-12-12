import ListProduct from "./packages/components/ListProduct";
import Menu from "./packages/components/Menu";
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import Footer from "./packages/components/Footer";
import './App.css'
import LandingPage from "./packages/components/LandingPage";
import { ThemeProvider } from "styled-components";
import theme  from './packages/styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ListProduct category="Army caps"/>
        {/* <BrowserRouter>
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
        </div> */}
      </ThemeProvider>
    </>
  );
}

export default App;
