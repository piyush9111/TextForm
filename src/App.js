import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container">
        <TextForm text="Enter Your text here"/>
      </div>
    </>
  );
}

export default App;
