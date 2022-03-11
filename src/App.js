//import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx'
import Content from './components/content.jsx';
import data from './data.js';
import './content.css';

const { faker } = require('@faker-js/faker');
const Name = faker.name.findName();

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Content value={data}/>
      </div>
      <p>
        {Name}
      </p>
    </div>
  );
}

export default App;