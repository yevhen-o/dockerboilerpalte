import logo from './logo.svg';
import './App.css';

function App() {

  const getData = () => {
    fetch('api/status')
      .then(response => {
        console.log(response);
      });
  }

  const setData = () => {
    fetch('api/add-reccord')
      .then(response => {
        console.log(response);
      });
  }

  const fetchData = () => {
    fetch('api/get-roccords')
      .then(response => {
        console.log(response);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div onClick={getData} className='someClass'>Check updates with skafold</div>
        <div onClick={setData} className='someClass'>Add data</div>
        <div onClick={fetchData} className='someClass'>Get data</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
