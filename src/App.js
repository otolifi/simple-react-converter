import './App.css';
import React, {useState} from 'react';
import UnitConverter, { factors } from './components/UnitConverter';
import ConvertedUnits from './components/ConvertedUnits';
import { Select , Link, Container, Box} from '@material-ui/core';
import {Provider, useSelector, useDispatch} from 'react-redux';

//export const ItemsContext = React.createContext();

function App() {
  //const [type, setType] = useState("Length");
  const type = useSelector(state => state.type.data);
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    //setType(event.target.value);
    console.log(event.target.value);
    dispatch({ type: 'SET_TYPE', payload: event.target.value});
  }
  document.title = "The formwork converter";
  return (
      <Container maxWidth="sm">
        <Box border={1} borderColor="grey.500" borderRadius={16} boxShadow={3} m={2} p={2}>
          <h1>The simple units converter</h1>
          <label>Select Type:</label>
          <p>
              <Select variant="outlined" value={type} onChange={(event) => handleChange(event)}>
              {Object.keys(factors).map((item, index) => {
                          return (
                              <option value={item} key={index}>{item}</option>
                          )
                      })}
              </Select>
          </p>
          {/*<ItemsContext.Provider value={[type, setType]}>*/}
            <UnitConverter/>
          {/*</ItemsContext.Provider>*/}
          <ConvertedUnits/>
          <p><Link color="primary" href="http://tridi-cad.com">TridiCAD</Link></p>
        </Box>
      </Container>
  );
}

export default App;
