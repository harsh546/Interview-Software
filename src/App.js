
import './App.css';
import BigGreyBox from './components/BigGreyBox';
import BigRecordBox from './components/BigRecordBox';
import LowerNav from './components/LowerNav';
import RecordButtonGrid from './components/RecordButtonGrid';

function App() {
  return (
    <div style={{backgroundColor:"black"}} className="App">
    <div style={{display:"flex"}}>
    <RecordButtonGrid/>
    <BigRecordBox/>
    <BigGreyBox/>
    </div>
    <LowerNav/>
    </div>
  );
}

export default App;
