//import { useContext } from "react"
//import { ResultsContext } from "./UnitConverter"
import { List, ListItem, ListItemText } from "@material-ui/core";
import {useSelector} from 'react-redux';


function ConvertedUnits() {
    //const [results, setResults] = useContext(ResultsContext);
    const results = useSelector(state => state.results.data);
    return (
        <div>
            <h2>Converted Units</h2>
            <List>
            {results.map((result, index) => {
                    return (
                        <ListItem button>
                            <ListItemText primary={"Conversion " + index} secondary={result} key={index}>{result}</ListItemText>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

export default ConvertedUnits;
