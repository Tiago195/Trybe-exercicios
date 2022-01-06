import './App.css';
import Pokemon from './pokemon';
import Title from './Title';

function App() {
  return (
    <>
      < div className="App" >
        <Title titulo='Pokedex' />
        <div className='pai-pokemon'>
          <Pokemon />
        </div>
      </div >
    </>
  );
}



export default App;
