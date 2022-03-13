
import './css/index.css';

function App() {
  return (
    <section>
      <div className='box'>
        <h1>Creating Umbra</h1>
        <h2>Cards</h2>
        <div className='card'>
          <h3 className='card-title'>This is a card title</h3>
          <p className='card-body'>
            This is a card body.
            <a href='/'>Welcome to Umbra</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
