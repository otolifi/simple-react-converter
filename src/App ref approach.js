import './App.css';
import {useRef} from 'react';
import UnitConverter from './components/UnitConverter';
import ConvertedUnits from './components/ConvertedUnits';

function App() {
  const ref = useRef(null);
  const handleChange = (event) => {
    ref.current.changeType(event.target.value);
  }
  document.title = "The formwork converter";
  return (
    <>
    <h1>The ultimate formwork units converter</h1>
    <label>Select Type:</label>
    <p>
        <select onChange={(event) => handleChange(event)}>
            <option>Length</option>
            <option>Area</option>
            <option>Force</option>
            <option>Pressure</option>
        </select>
    </p>
    <UnitConverter ref={ref}/>
    <ConvertedUnits/>
    </>
  );
}


export default App;
