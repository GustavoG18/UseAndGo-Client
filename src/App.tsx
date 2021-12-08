import ListProduct from "./packages/components/ListProduct/ListProduct";
import Menu from "./packages/components/Menu/Menu";
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>  
          <Route path="/" element={<div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}><ListProduct category={'All products'}/></div>}>All Products</Route>
          <Route path="/ArmyCaps" element={<div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}><ListProduct category={'Army Caps'}/></div>}>Army Caps</Route>
          <Route path="/BaseballCaps" element={<div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}><ListProduct category={'Baseball Caps'}/></div>}>Baseball Caps</Route>
          <Route path="/Berets" element={<div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}><ListProduct category={'Berets'}/></div>}>Berets</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
