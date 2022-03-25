import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className='app-container'>
      <Header></Header>
     <center><h1>Get Your Favourite Products</h1></center>
      <Shop></Shop>
    </div>
  );
}

export default App;
