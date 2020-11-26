import { useContext } from "react"
import { ResultsContext } from "./UnitConverter"
import { List, ListItem, ListItemText } from "@material-ui/core";


function ConvertedUnits() {
    const [results, setResults] = useContext(ResultsContext);
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
