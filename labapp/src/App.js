import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Modal from './Modal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container text-center mt-4">
        <div className="bg-white bg-opacity-75 p-4 rounded shadow">
          <h1>CS 330L</h1>
          <h2>Section: 011</h2>
          <p>WVU ID: 800429032</p>
          <p>Hi, I am Mark Khairullah</p>
        </div>
      </div>
      <Card />
      <Modal />
    </div>
  );
}

export default App;