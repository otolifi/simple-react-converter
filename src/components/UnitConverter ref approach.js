import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const factors = {
    "Length": {
        "m": {
            "m": 1,
            "cm": 100,
            "ft": 3.28084,
            "in": 39.37008
        },
        "cm": {
            "m": 0.1,
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

const UnitConverter = forwardRef((props, ref) => {
    function operate() {
        if (type === 'Area') {
            return 'Area';
        } else {
            return 'Others';
        }
    }
    const [type, setType] = useState("length");
    const changeType = (value) => {
        setType(value);
    };
    useImperativeHandle(ref, () => {
        return {
            changeType: changeType
        }
    });
    return (
        <div>
            <h1>{type}</h1>
            <h1>{operate()}</h1>
        </div>
        )
});

export default UnitConverter;