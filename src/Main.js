import React, { useState, useEffect } from "react"; 
import App from "./App"; 
import { DrugUseContext } from "./drug-use-context/DrugUseContext";
import { loadDrugUseData } from "./drug-use-context/loadDrugUseData";

export default function Main() {
    const [drugUseData, setdruguse] = useState([]);

//useEffect wird aufgerufen nach dem Draw, also wenn Komponenten gerendert werden, wird UseEffekt aufgerufen 
    useEffect(() => {
        if (!drugUseData || drugUseData.length === 0) {
            loadDrugUseData()  //Daten werden geladen
            .then((json) => {
                setdruguse(json)

            })
            .catch((err) => {
                console.error('Error ' + err);
            })
        }
})

    return (
        <DrugUseContext.Provider value={[drugUseData]}>
            <App/>
        </DrugUseContext.Provider>
)
}
