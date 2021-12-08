import ListProduct from "./packages/components/ListProduct/ListProduct";
import Menu from "./packages/components/Menu/Menu";

const App = () => {
  return (
    <>
      <Menu />
      <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <ListProduct category={'Army Caps'}/>
      </div>
    </>
  );
}

export default App;
