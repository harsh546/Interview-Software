
import './App.css';
import LowerNav from './components/LowerNav';
import RecordButtonGrid from './components/RecordButtonGrid';

function App() {
  return (
    <div style={{backgroundColor:"black"}} className="App">
      <div style={{}}>
        <RecordButtonGrid/>
      </div>
     <LowerNav/>
    </div>
  );
}

export default App;
