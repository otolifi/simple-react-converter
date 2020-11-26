import React, { useContext, useState, useEffect } from 'react';
import { ItemsContext } from '../App';
import ConvertedUnits from './ConvertedUnits';
import { Select, Button, TextField } from '@material-ui/core';

export const factors = {
    "Length": {
        "m": {
            "m": 1,
            "cm": 100,
            "ft": 3.28084,
            "in": 39.37008
        },
        "cm": {
            "m": 0.01,
            "cm": 1,
            "ft": 0.032808,
            "in": 0.393701
        },
        "ft": {
            "m": 0.3084,
            "cm": 30.84,
            "ft": 1,
            "in": 12
        },
        "in": {
            "m": 0.0254,
            "cm": 2.54,
            "ft": 0.08333,
            "in": 1
        },
    },
    "Force": {
        "kN": {
            "kN": 1,
            "kgf": 101.9716,
            "lb": 224.8089
        },
        "kgf": {
            "kN": 0.009807,
            "kgf": 1,
            "lb": 0.453592
        },
        "lb": {
            "kN": 0.004448,
            "kgf": 2.204624,
            "lb": 1
        },
    }
}

export const ResultsContext = React.createContext();

function UnitConverter() {
    function operate() {
        let result = parseFloat(fromValue) * factors[type][fromUnit][toUnit];
        setToValue(result);
        let strResult = fromValue + " " + fromUnit + " => " + result + " " + toUnit;
        setResults([strResult, ...results]);
    }
    function swapUnits() {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
        setToValue(fromValue);
        setFromValue(toValue);
    }
    function clear() {
        setToValue(1);
        setFromValue(1);
    }
    const [type, setType] = useContext(ItemsContext);
    const [fromUnit, setFromUnit] = useState('m')
    const [toUnit, setToUnit] = useState('m')
    const [fromValue, setFromValue] = useState(1);
    const [toValue, setToValue] = useState(1);
    const [results, setResults] = useState([]);

    useEffect(() => {
        setFromUnit(Object.keys(factors[type])[0]);
        setToUnit(Object.keys(factors[type])[0]);
    }, [type]);

    return (
        <div>
            <h2>{type}</h2>
            <Select variant="outlined" value={fromUnit} onChange={(event)=>{setFromUnit(event.target.value); console.log('mudouFrom')}}>
                {Object.keys(factors[type]).map(item => {
                    let fromSelect = (fromUnit === item);
                    return (
                        <option value={item} selected={fromSelect && 'true'}>{item}</option>
                    )
                })}
            </Select>
            <TextField variant="outlined" placeholder={fromUnit} value={fromValue} onChange={(event) => setFromValue(event.target.value)}/>
            <Button variant="outlined" color="primary" onClick={swapUnits}>Swap unit</Button>
            <p>
            <Select variant="outlined" value={toUnit} onChange={(event)=>setToUnit(event.target.value)}>
                {Object.keys(factors[type]).map(item => {
                    let toSelect = (toUnit === item);
                    return (
                        <option value={item} selected={toSelect && 'true'}>{item}</option>
                    )
                })}
            </Select>
            <TextField variant="outlined" placeholder={toUnit} value={toValue}/><Button variant="contained" color="primary" onClick={operate}>Convert</Button></p>
            <Button variant="contained" color="secondary" onClick={clear}>Clear</Button>
            <ResultsContext.Provider value={[results, setResults]}>
                <ConvertedUnits/>
            </ResultsContext.Provider>
        </div>
        )
}

export default UnitConverter;