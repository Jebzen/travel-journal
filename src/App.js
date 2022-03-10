//import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx'
import Content from './components/content.jsx';
import data from './data.js';
import './content.css';

function App() {
  //const context = useContext(MyContext);

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Content value={data}/>
      </div>
    </div>
  );
}

export default App;
