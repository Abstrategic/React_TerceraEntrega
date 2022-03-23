// import logo from './logo.svg';
import './App.css';
import './Components/Navbar/Navbar'
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import FunctionCounter from './Atoms/FunctionCounter/FunctionCounter';

function App() {
  const onAdd = (quantity) =>{
        console.log(quantity)
    }

  return (
    <><div className="App">
      <Navbar />
      
    </div>
    <div className='webContainer'>
    <ItemListContainer greeting={"Listado de articulos"} />
    <FunctionCounter initial={0} stock={15} onAdd={onAdd} />

    </div></>
  );
}

export default App;
